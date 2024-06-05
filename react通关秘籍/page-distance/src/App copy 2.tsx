import { MouseEventHandler, useEffect, useRef } from 'react'

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log('clentHeight', ref.current?.clientHeight);
    console.log('scrollHeight', ref.current?.scrollHeight);
    console.log('offsetHeight', ref.current?.offsetHeight);
    console.log('clent rect height', ref.current?.getBoundingClientRect().height);
  }

  return (
    <div>
      <div id="box" ref={ref} style={{
        border: '10px solid #000',
        marginTop: '300px',
        width: '100px',
        height: '100px',
        background: 'pink',
        overflow: 'auto'
      }} onClick={clickHandler}>
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
