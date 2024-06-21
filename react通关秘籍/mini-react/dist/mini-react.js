"use strict";
(function () {
    /**
     * 创建一个虚拟DOM元素。
     *
     * 此函数通过接收元素类型、属性和子元素，返回一个对象表示的虚拟DOM元素。
     * 它的主要作用是在不直接操作真实DOM的情况下，构建DOM元素的结构描述。
     *
     * @param {string|function} type - 元素的类型，可以是HTML标签名或自定义组件的构造函数。
     * @param {Object} props - 元素的属性对象，包含各种属性和事件监听器。
     * @param {...*} children - 元素的子元素，可以是字符串、数字、其他虚拟DOM元素或数组。
     * @returns {Object} 返回一个对象，表示创建的虚拟DOM元素。
     */
    function createElement(type, props, ...children) {
        return {
            type,
            props: Object.assign(Object.assign({}, props), { children: children.map((child) => {
                    const isTextNode = typeof child === "string" || typeof child === "number";
                    return isTextNode ? createTextNode(child) : child;
                }) }),
        };
    }
    /**
     * 创建一个文本节点对象。
     *
     * 此函数用于生成一个表示文本节点的对象。文本节点是DOM树中的一种节点类型，
     * 专门用于包含文本内容。这个函数返回的对象有一个type属性表示节点类型，
     * 一个props属性包含节点的值(nodeValue)和子节点数组(children)。
     *
     * @param {string} nodeValue - 文本节点的值。
     * @returns {Object} 返回一个对象，表示创建的文本节点。
     */
    function createTextNode(nodeValue) {
        return {
            type: "TEXT_ELEMENT",
            props: {
                nodeValue,
                children: [],
            },
        };
    }
    let nextUnitOfWork = null;
    let wipRoot = null;
    let currentRoot = null;
    let deletions = null;
    /**
     * 初始化渲染过程，设置工作区根元素和下一个将要处理的工作单元。
     *
     * @param {Object} element - 需要渲染的元素。
     * @param {Object} container - 元素将被渲染到的容器。
     */
    function render(element, container) {
        // 设置工作InProgress（wip）根元素，它包含了当前正在渲染的容器及其属性
        wipRoot = {
            dom: container,
            props: {
                children: [element],
            },
            alternate: currentRoot,
        };
        // 初始化一个空数组，用于后续收集需要删除的元素
        deletions = [];
        // 设置下一个将要处理的工作单元为wipRoot，开始渲染过程
        nextUnitOfWork = wipRoot;
    }
    /**
     * 工作循环，用于在空闲时执行单元工作。
     * @param {Object} deadline - 空闲回调提供的deadline对象，包含timeRemaining方法，用于判断是否应该yield。
     */
    function workLoop(deadline) {
        // 初始化是否应该yield的标志为false
        let shouldYield = false;
        // 当有下一个单元工作且不应该yield时，继续执行单元工作。
        while (nextUnitOfWork && !shouldYield) {
            // 执行下一个单元工作。
            nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
            // 如果剩余时间小于1毫秒，应该yield，设置标志为true。
            shouldYield = deadline.timeRemaining() < 1;
        }
        // 如果没有下一个单元工作且当前有正在处理的根节点，提交根节点的更改
        if (!nextUnitOfWork && wipRoot) {
            commitRoot();
        }
        // 请求在下一个空闲时期调用工作循环。
        requestIdleCallback(workLoop);
    }
    requestIdleCallback(workLoop);
    /**
     * 执行单元工作单元。
     *
     * 此函数负责根据当前工作单元的类型，更新函数组件或宿主组件的状态。
     * 它首先判断当前工作单元是否为函数组件，然后调用相应的更新函数。
     * 随后，它会尝试找到下一个需要处理的工作单元，这可能是当前单元的子单元，或者是同级的下一个单元。
     * 这个函数是React框架内部调度和更新组件的重要逻辑之一。
     *
     * @param fiber 当前需要处理的工作单元，这是一个虚拟DOM节点，包含了组件的信息和状态。
     * @returns {Object} 返回下一个需要处理的工作单元，如果没有则返回null。
     */
    function performUnitOfWork(fiber) {
        // 判断当前工作单元的类型是否为函数组件
        const isFunctionComponent = fiber.type instanceof Function;
        // 根据工作单元的类型，执行相应的更新逻辑
        if (isFunctionComponent) {
            updateFunctionComponent(fiber);
        }
        else {
            updateHostComponent(fiber);
        }
        // 如果当前工作单元有子单元，则处理子单元
        if (fiber.child) {
            return fiber.child;
        }
        // 依次检查当前工作单元的兄弟单元和返回路径上的其他单元，找到下一个需要处理的单元
        let nextFiber = fiber;
        while (nextFiber) {
            if (nextFiber.sibling) {
                return nextFiber.sibling;
            }
            nextFiber = nextFiber.return;
        }
    }
    let wipFiber = null;
    let stateHookIndex = null;
    /**
     * 更新函数组件的 fiber 对象。
     *
     * 此函数负责初始化工作阶段的 fiber 对象，为即将进行的 DOM 更新做准备。
     * 它首先设置当前正在处理的 fiber 对象（wipFiber），然后重置状态钩子和效应钩子的索引和数组。
     * 接着，它通过调用 fiber 对象的 type 和 props 属性来创建子元素数组，并通过调用 reconcileChildren 函数来处理这些子元素的差异。
     *
     * @param {Object} fiber - 要更新的 fiber 对象，代表一个 React 组件实例。
     */
    function updateFunctionComponent(fiber) {
        // 设置当前正在处理的 fiber 对象
        wipFiber = fiber;
        // 重置状态钩子索引
        stateHookIndex = 0;
        // 初始化 fiber 的状态钩子和效应钩子数组
        wipFiber.stateHooks = [];
        wipFiber.effectHooks = [];
        // 创建一个包含组件类型和props初始化的子元素数组
        const children = [fiber.type(fiber.props)];
        // 处理当前 fiber 对象的子元素，以实现虚拟DOM的差异比较和更新
        reconcileChildren(fiber, children);
    }
    /**
     * 更新主机组件的DOM元素。
     *
     * 此函数负责在虚拟DOM树中找到对应的主机组件，并根据当前的props更新其子组件。
     * 如果当前fiber节点还没有对应的DOM元素，则先创建一个DOM元素。
     * 接着，通过调用reconcileChildren函数来处理当前fiber节点子组件的更新。
     *
     * @param fiber 虚拟DOM节点，代表一个组件实例。这个节点包含了组件的状态、属性以及子节点等信息。
     */
    function updateHostComponent(fiber) {
        // 检查当前fiber节点是否已经有对应的DOM元素
        // 如果没有，则创建一个新的DOM元素并将其关联到fiber节点上
        if (!fiber.dom) {
            fiber.dom = createDom(fiber);
        }
        // 对当前fiber节点的子组件进行和解（reconciliation），即根据新的props更新子组件
        reconcileChildren(fiber, fiber.props.children);
    }
    /**
     * 根据 fiber 对象创建或更新 DOM 元素。
     *
     * 该函数负责根据传入的 fiber 对象的类型创建相应的 DOM 元素。
     * 如果 fiber 对象的类型为 "TEXT_ELEMENT"，则创建一个文本节点；
     * 否则，创建一个对应类型的元素节点。之后，通过调用 updateDom 函数来应用 fiber 对象的属性到创建的 DOM 元素上。
     *
     * @param fiber 一个包含组件信息的 fiber 对象，用于指导 DOM 的创建或更新。
     * @returns 返回创建或更新后的 DOM 元素。
     */
    function createDom(fiber) {
        // 根据 fiber 的类型决定创建的是文本节点还是元素节点
        const dom = fiber.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(fiber.type);
        // 使用空对象和 fiber 的 props 更新 dom 元素
        updateDom(dom, {}, fiber.props);
        return dom;
    }
    /**
     * 判断一个字符串是否以"on"开头，用于识别是否为事件名称。
     *
     * @param {string} key 待检查的字符串。
     * @returns {boolean} 如果字符串以"on"开头，则返回true；否则返回false。
     */
    const isEvent = (key) => key.startsWith("on");
    /**
     * 判断一个键是否为属性键而不是事件键或children。
     *
     * 此函数用于确定一个给定的键是否应该被视为组件的属性。它排除了'children'键，
     * 因为'children'通常不作为属性直接处理，而是作为组件结构的一部分。
     * 同时，它也检查该键是否是一个事件处理函数，因为事件处理函数也不应该被视为属性。
     *
     * @param {string} key 要检查的键名。
     * @returns {boolean} 如果键既不是'children'也不是事件处理函数，则返回true；否则返回false。
     */
    const isProperty = (key) => key !== "children" && !isEvent(key);
    /**
     * 判断对象的某个属性值是否在新旧对象中发生了变化。
     *
     * 该函数返回一个高阶函数，用于比较两个对象中指定属性值是否不同。
     * 这种设计模式常用于判断某个属性是否在更新操作中被修改，例如在React的shouldComponentUpdate生命周期方法中。
     *
     * @param {Object} prev - 旧对象，用于比较的基准。
     * @param {Object} next - 新对象，与旧对象进行比较。
     * @returns {Function} 返回一个函数，该函数接受一个属性键作为参数，返回一个布尔值，
     *                     表示该属性在新旧对象中的值是否不同。
     */
    const isNew = (prev, next) => (key) => prev[key] !== next[key];
    /**
     * 判断一个键是否在后续对象中已经不存在了。
     * 这个函数首先接受两个参数，这两个参数分别是前一个对象和后一个对象。
     * 然后返回一个函数，这个函数接受一个键作为参数。
     * 返回的函数的作用是检查这个键是否在后一个对象中存在。
     * 如果键在后一个对象中不存在，那么返回true，表示这个键已经“消失”了。
     * 如果键在后一个对象中存在，那么返回false，表示这个键仍然存在。
     * 这种函数设计模式被称为高阶函数，因为它返回的函数可以进一步接受参数并执行操作。
     *
     * @param {Object} prev - 前一个对象，用于比较键的存在性。
     * @param {Object} next - 后一个对象，用于检查键是否仍然存在。
     * @returns {Function} 返回一个函数，该函数接受一个键作为参数，并返回一个布尔值，表示该键是否在后一个对象中不存在。
     */
    const isGone = (prev, next) => (key) => !(key in next);
    function updateDom(dom, prevProps, nextProps) {
        //Remove old or changed event listeners
        Object.keys(prevProps)
            .filter(isEvent)
            .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
            .forEach((name) => {
            const eventType = name.toLowerCase().substring(2);
            dom.removeEventListener(eventType, prevProps[name]);
        });
        // Remove old properties
        Object.keys(prevProps)
            .filter(isProperty)
            .filter(isGone(prevProps, nextProps))
            .forEach((name) => {
            dom[name] = "";
        });
        // Set new or changed properties
        Object.keys(nextProps)
            .filter(isProperty)
            .filter(isNew(prevProps, nextProps))
            .forEach((name) => {
            dom[name] = nextProps[name];
        });
        // Add event listeners
        Object.keys(nextProps)
            .filter(isEvent)
            .filter(isNew(prevProps, nextProps))
            .forEach((name) => {
            const eventType = name.toLowerCase().substring(2);
            dom.addEventListener(eventType, nextProps[name]);
        });
    }
    /**
     * 调和工作进展中的 Fiber 节点的子元素与新元素。
     * 此过程涉及比较旧子元素和新元素以确定需要执行的操作：更新、插入或删除。
     *
     * @param {Object} wipFiber - 工作进展中的 Fiber 节点，表示当前正在处理的组件。
     * @param {Array} elements - 新元素对象的数组，表示要更新的子元素。
     */
    function reconcileChildren(wipFiber, elements) {
        var _a;
        // 初始化遍历 elements 数组的索引
        let index = 0;
        // 尝试获取旧 Fiber 的子节点，即上一次渲染的子节点
        let oldFiber = (_a = wipFiber.alternate) === null || _a === void 0 ? void 0 : _a.child;
        // 初始化前一个兄弟 Fiber，用于链接新创建的 Fiber 节点
        let prevSibling = null;
        // 循环继续，直到遍历完所有 elements 或处理完所有旧 Fiber 节点
        while (index < elements.length || oldFiber != null) {
            const element = elements[index];
            let newFiber = null;
            // 判断新旧元素类型是否相同
            const sameType = (element === null || element === void 0 ? void 0 : element.type) == (oldFiber === null || oldFiber === void 0 ? void 0 : oldFiber.type);
            // 如果类型相同，创建标记为"UPDATE"的新Fiber
            if (sameType) {
                newFiber = {
                    type: oldFiber.type,
                    props: element.props,
                    dom: oldFiber.dom,
                    return: wipFiber,
                    alternate: oldFiber,
                    effectTag: "UPDATE",
                };
            }
            // 如果元素存在且类型不同，创建标记为"PLACEMENT"的新Fiber（插入新节点）
            if (element && !sameType) {
                newFiber = {
                    type: element.type,
                    props: element.props,
                    dom: null,
                    return: wipFiber,
                    alternate: null,
                    effectTag: "PLACEMENT",
                };
            }
            // 如果旧Fiber存在且类型不同，标记其为"DELETION"（待删除）
            if (oldFiber && !sameType) {
                oldFiber.effectTag = "DELETION";
                deletions.push(oldFiber);
            }
            // 移动到旧Fiber的下一个兄弟节点
            if (oldFiber) {
                oldFiber = oldFiber.sibling;
            }
            // 处理新Fiber的链表关系
            if (index === 0) {
                wipFiber.child = newFiber;
            }
            else if (element) {
                prevSibling.sibling = newFiber;
            }
            // 更新前一个兄弟节点的引用
            prevSibling = newFiber;
            index++;
        }
    }
    /**
     * 使用状态钩子来管理组件的本地状态。
     * @param {any} initialState 组件初始状态。
     * @returns 返回一个数组，第一个元素是当前状态，第二个元素是更新状态的函数。
     */
    function useState(initialState) {
        var _a;
        // 获取当前正在工作的纤维（组件实例）
        const currentFiber = wipFiber;
        // 尝试从现有的备用纤维（上一个版本的组件实例）中获取旧的状态钩子
        const oldHook = (_a = wipFiber.alternate) === null || _a === void 0 ? void 0 : _a.stateHooks[stateHookIndex];
        // 初始化新的状态钩子，包括状态和更新队列
        const stateHook = {
            state: oldHook ? oldHook.state : initialState, // 如果有旧钩子，则继承状态，否则使用初始状态
            queue: oldHook ? oldHook.queue : [], // 如果有旧钩子，则继承更新队列，否则初始化为空数组
        };
        // 执行队列中的所有更新动作
        stateHook.queue.forEach((action) => {
            stateHook.state = action(stateHook.state);
        });
        // 清空更新队列，准备迎接新的更新
        stateHook.queue = [];
        // 增加状态钩子索引，用于跟踪和管理多个状态钩子
        stateHookIndex++;
        // 将新的状态钩子添加到当前工作的纤维中
        wipFiber.stateHooks.push(stateHook);
        /**
         * 设置新状态的函数。
         * @param {Function | any} action 用于更新状态的函数或新状态值。
         */
        function setState(action) {
            // 判断传入的action是否为函数
            const isFunction = typeof action === "function";
            // 将action（如果是函数）添加到更新队列中
            stateHook.queue.push(isFunction ? action : () => action);
            // 重新设置工作纤维和备用纤维的关系，以准备重新渲染
            wipRoot = Object.assign(Object.assign({}, currentFiber), { alternate: currentFiber });
            // 设置下一个要执行的工作单元为新的根纤维
            nextUnitOfWork = wipRoot;
        }
        // 返回当前状态和更新状态的函数
        return [stateHook.state, setState];
    }
    /**
     * 使用Effect Hook来注册一个副作用函数。
     *
     * 此函数用于在React的函数组件中添加副作用逻辑。副作用可以是数据订阅、事件监听等。
     * 它在组件渲染完成后执行，且在组件卸载时提供清理逻辑的机会。
     *
     * @param {Function} callback 副作用函数。这个函数会在组件渲染完成后调用。
     * @param {Array} deps 依赖数组。列出callback函数依赖的变量，用于判断是否需要重新执行副作用。
     */
    function useEffect(callback, deps) {
        // 创建一个effectHook对象，用于存储回调函数和依赖项，以及后续可能的清理函数。
        const effectHook = {
            callback,
            deps,
            cleanup: undefined,
        };
        // 将effectHook对象添加到当前正在构建的fiber节点的effectHooks数组中。
        // 这将在组件渲染完成后触发回调函数。
        wipFiber.effectHooks.push(effectHook);
    }
    /**
     * 执行根节点的提交操作。
     * 这是一个关键的生命周期函数，用于处理虚拟DOM的更新和实际DOM的同步。
     * 它主要负责以下几项工作：
     * 1. 对即将被删除的节点执行清理工作。
     * 2. 提交当前工作周期中根节点的子节点更新。
     * 3. 执行所有因更新而产生的副作用钩子函数。
     * 4. 更新当前的根节点和工作节点，为下一次更新做准备。
     * 5. 清空待删除节点的列表，以供下一次更新使用。
     *
     * @remarks
     * 此函数不接受任何参数。
     */
    function commitRoot() {
        // 遍历并执行待删除节点的清理工作
        deletions.forEach(commitWork);
        // 提交当前根节点子节点的更新
        commitWork(wipRoot.child);
        // 执行所有待处理的副作用钩子函数
        commitEffectHooks();
        // 更新当前根节点和工作节点，为下一次渲染做准备
        currentRoot = wipRoot;
        wipRoot = null;
        // 清空待删除节点列表
        deletions = [];
    }
    /**
     * 执行 fiber 对象的工作提交。
     *
     * 此函数负责根据 fiber 对象的不同 effectTag（标记）值，执行相应的 DOM 操作：
     * - 如果 fiber 对象的 effectTag 为 "PLACEMENT"（放置），则将该 fiber 对象对应的 DOM 节点添加到其父 DOM 节点中；
     * - 如果 effectTag 为 "UPDATE"（更新），则更新该 fiber 对象对应的 DOM 节点的属性；
     * - 如果 effectTag 为 "DELETION"（删除），则执行相应的删除操作。
     *
     * 这一过程是递归进行的，首先处理当前 fiber 对象，然后处理其子 fiber 对象和同级 fiber 对象。
     *
     * @param fiber 需要处理的 fiber 对象，代表一个虚拟 DOM 节点及其相关信息。
     */
    function commitWork(fiber) {
        // 如果 fiber 对象为空，则直接返回，不进行任何操作
        if (!fiber) {
            return;
        }
        // 通过 fiber 对象的 return 属性向上遍历，找到对应的 DOM 父节点
        let domParentFiber = fiber.return;
        while (!domParentFiber.dom) {
            domParentFiber = domParentFiber.return;
        }
        const domParent = domParentFiber.dom;
        // 根据 fiber 对象的 effectTag 值，执行相应的 DOM 操作
        if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
            domParent.appendChild(fiber.dom);
        }
        else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
            updateDom(fiber.dom, fiber.alternate.props, fiber.props);
        }
        else if (fiber.effectTag === "DELETION") {
            commitDeletion(fiber, domParent);
        }
        // 递归处理当前 fiber 对象的子 fiber 对象和同级 fiber 对象
        commitWork(fiber.child);
        commitWork(fiber.sibling);
    }
    /**
     * 执行DOM元素的删除操作。
     *
     * 此函数负责从DOM树中移除给定的Fiber节点对应的DOM元素。如果Fiber节点有子节点，
     * 则递归地对子节点执行删除操作。这是React虚拟DOM更新实际DOM的一部分，
     * 用于处理组件或元素的删除操作。
     *
     * @param {Object} fiber 要删除的Fiber节点。这个节点代表了虚拟DOM树中的一个部分，
     *                       包含了对应的DOM元素信息。
     * @param {Object} domParent 要删除的Fiber节点的父DOM节点。这个参数用于定位要删除的DOM元素
     *                           在实际DOM树中的位置，从而能够执行移除操作。
     */
    function commitDeletion(fiber, domParent) {
        // 如果当前Fiber节点有对应的DOM元素，则从其父DOM节点中移除该DOM元素
        if (fiber.dom) {
            domParent.removeChild(fiber.dom);
        }
        else {
            // 如果当前Fiber节点没有子节点，则递归地对它的第一个子Fiber节点执行删除操作
            commitDeletion(fiber.child, domParent);
        }
    }
    /**
     * 检查两个依赖数组是否相等。
     *
     * 该函数通过比较两个数组的长度和每个元素的值来确定它们是否相等。
     * 如果数组长度不相等，或者任意对应位置的元素不相等，则认为两个数组不相等。
     * 主要用于判断新的依赖数组是否与旧的依赖数组完全相同，从而决定是否需要执行某些操作。
     *
     * @param {Array} deps 旧的依赖数组，用于比较。
     * @param {Array} newDeps 新的依赖数组，用于比较。
     * @returns {boolean} 如果两个数组相等返回true，否则返回false。
     */
    function isDepsEqual(deps, newDeps) {
        // 比较两个数组的长度，如果不相等，则直接返回false
        if (deps.length !== newDeps.length) {
            return false;
        }
        // 遍历数组，比较每个位置的元素是否相等
        for (let i = 0; i < deps.length; i++) {
            if (deps[i] !== newDeps[i]) {
                // 如果找到不相等的元素，返回false
                return false;
            }
        }
        // 如果所有元素都相等，返回true
        return true;
    }
    /**
     * 执行效果钩子的提交过程。
     * 此函数负责遍历当前工作中的纤维节点（fiber），并执行相应的效果钩子（effect hook）。
     * 这包括清理旧的效果钩子和运行新的效果钩子。
     */
    function commitEffectHooks() {
        /**
         * 遍历纤维节点，执行清理操作。
         * @param {Object} fiber 当前正在处理的纤维节点。
         */
        function runCleanup(fiber) {
            var _a, _b;
            // 如果当前纤维节点为空，则返回。
            if (!fiber)
                return;
            // 遍历当前纤维节点的效果钩子，执行清理操作。
            (_b = (_a = fiber.alternate) === null || _a === void 0 ? void 0 : _a.effectHooks) === null || _b === void 0 ? void 0 : _b.forEach((hook, index) => {
                var _a;
                // 获取当前钩子的依赖数组。
                const deps = fiber.effectHooks[index].deps;
                // 如果当前钩子没有依赖数组，或者依赖数组已经改变，则执行清理操作。
                if (!hook.deps || !isDepsEqual(hook.deps, deps)) {
                    (_a = hook.cleanup) === null || _a === void 0 ? void 0 : _a.call(hook);
                }
            });
            // 递归处理当前纤维节点的子节点和兄弟节点。
            runCleanup(fiber.child);
            runCleanup(fiber.sibling);
        }
        /**
        * 遍历纤维节点，运行新的效果钩子。
        * @param {Object} fiber 当前正在处理的纤维节点。
        */
        function run(fiber) {
            var _a;
            // 如果当前纤维节点为空，则返回。
            if (!fiber)
                return;
            // 遍历当前纤维节点的新效果钩子，准备执行。
            (_a = fiber.effectHooks) === null || _a === void 0 ? void 0 : _a.forEach((newHook, index) => {
                var _a;
                // 如果当前纤维没有对应的旧效果钩子，则直接设置清理操作为回调函数的执行结果。
                if (!fiber.alternate) {
                    newHook.cleanup = newHook.callback();
                    return;
                }
                // 如果当前新钩子没有依赖数组，则同样直接设置清理操作为回调函数的执行结果。
                if (!newHook.deps) {
                    newHook.cleanup = newHook.callback();
                }
                // 如果当前新钩子有依赖数组，则进一步判断依赖数组是否改变。
                if (newHook.deps.length > 0) {
                    // 获取对应的旧效果钩子。
                    const oldHook = (_a = fiber.alternate) === null || _a === void 0 ? void 0 : _a.effectHooks[index];
                    // 如果依赖数组已经改变，则设置清理操作为回调函数的执行结果。
                    if (!isDepsEqual(oldHook.deps, newHook.deps)) {
                        newHook.cleanup = newHook.callback();
                    }
                }
            });
            // 递归处理当前纤维节点的子节点和兄弟节点。
            run(fiber.child);
            run(fiber.sibling);
        }
        // 从当前的工作纤维根节点开始，先执行清理操作，然后运行新的效果钩子。
        runCleanup(wipRoot);
        run(wipRoot);
    }
    const MiniReact = {
        createElement,
        render,
        useState,
        useEffect,
    };
    window.MiniReact = MiniReact;
})();
