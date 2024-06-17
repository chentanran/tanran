import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ListItem, useTodoListStore } from "./Store";
import { animated, useTransition } from "@react-spring/web";

interface ListProps {
  className?: string | string[];
}

export const List: FC<ListProps> = (props) => {
  const list = useTodoListStore((state) => state.list);

  const cs = classNames("h-full p-10", props.className);

  const transitions = useTransition(list, {
    from: { transform: "translate3d(100%,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0%,0,0)", opacity: 1 },
    leave: { transform: "translate3d(-100%,0,0)", opacity: 0 },
    keys: list.map((item) => item.id),
  });

  return (
    <div className={cs}>
      {list.length
        ? transitions((style, item) => {
            return (
              <animated.div style={style}>
                <Gap id={item.id} />
                <Item data={item} />
              </animated.div>
            );
          })
        : "暂无待办事项"}
    </div>
  );
};

function Gap(props: { id?: string }) {
  const addItem = useTodoListStore((state) => state.addItem);

  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "new-item",
      drop(item) {
        addItem(
          {
            id: Math.random().toString().slice(2, 8),
            status: "todo",
            content: "待办事项",
          },
          props.id
        );
      },
      collect(monitor) {
        return {
          isOver: monitor.isOver(),
        };
      },
    };
  });

  useEffect(() => {
    drop(ref);
  }, []);

  const cs = classNames("h-10", isOver ? "bg-red-300" : "");

  return <div ref={ref} className={cs}></div>;
}

function Item(props: { data: ListItem }) {
  const { data } = props;

  const [editing, setEditing] = useState(false);

  const [editingContent, setEditingContent] = useState(data.content);

  const updateItem = useTodoListStore((state) => state.updateItem);

  const ref = useRef<HTMLDivElement>(null);

  const [{ dragging }, drag] = useDrag({
    type: "list-item",
    item: {
      id: data.id,
    },
    collect(monitor) {
      return {
        dragging: monitor.isDragging(),
      };
    },
  });

  useEffect(() => {
    drag(ref);
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        "h-100 border-2 border-black bg-blue-300 p-10",
        "flex justify-start items-center",
        "text-xl tracking-wide",
        dragging ? "bg-white border-dashed" : ""
      )}
      onDoubleClick={() => {
        setEditing(true);
      }}
    >
      <input
        type="checkbox"
        className="w-40 h-40 mr-10"
        checked={data.status === "done" ? true : false}
        onChange={(e) => {
          updateItem({
            ...data,
            status: e.target.checked ? "done" : "todo",
          });
        }}
      />
      <p>
        {editing ? (
          <input
            type="text"
            value={editingContent}
            onChange={(e) => {
              setEditingContent(e.target.value);
            }}
            onBlur={() => {
              setEditing(false);
              updateItem({
                ...data,
                content: editingContent,
              });
            }}
          />
        ) : (
          data.content
        )}
      </p>
    </div>
  );
}
