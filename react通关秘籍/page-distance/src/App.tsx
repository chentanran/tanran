import { useEffect, useRef } from 'react'

// e.pageY：鼠标距离文档顶部的距离
// e.clientY：鼠标距离可视区域顶部的距离
// e.offsetY：鼠标距离触发事件元素顶部的距离
// e.screenY：鼠标距离屏幕顶部的距离
// winwodw.scrollY：页面滚动的距离，也叫 window.pageYOffset，等同于 document.documentElement.scrollTop
// element.scrollTop：元素滚动的距离
// element.clientTop：上边框高度
// element.offsetTop：相对有 position 的父元素的内容顶部的距离，可以递归累加，加上 clientTop，算出到文档顶部的距离
// clientHeight：内容高度，不包括边框
// offsetHeight：包含边框的高度
// scrollHeight：滚动区域的高度，不包括边框
// window.innerHeight：窗口的高度
// element.getBoundingClientRect：拿到 width、height、top、left 属性，其中 top、left 是元素距离可视区域的距离，width、height 绝大多数情况下等同 offsetHeight、offsetWidth，但旋转之后就不一样了，拿到的是包围盒的宽高

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY + window.innerHeight, document.documentElement.scrollHeight);
    })
  }, []);

  return (
    <div>
      <div id="box" ref={ref} style={{
        border: '10px solid #000',
        marginTop: '800px',
        width: '100px',
        height: '100px',
        background: 'pink',
        overflow: 'auto',
        transform: 'rotate(45deg)'
      }}>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
      </div>
    </div>
  )
}

export default App

