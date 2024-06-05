import { MouseEventHandler, useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    // const top = document.getElementById('box')!.getBoundingClientRect().top;
    console.log(ref.current?.scrollTop);

    console.log("box pageY", e.pageY);
    console.log("box clientY", e.clientY);
    // console.log('box offsetY', e.pageY - top - window.scrollY);
    console.log("box offsetY", e.nativeEvent.offsetY);
    console.log("box screenY", e.screenY);
  };

  useEffect(() => {
    document.getElementById("box")!.addEventListener("click", (e) => {
      console.log("box2 pageY", e.pageY);
      console.log("box2 clientY", e.clientY);
      console.log("box2 offsetY", e.offsetY);
      console.log("box2 screenY", e.screenY);
    });
  }, []);

  useEffect(() => {
    console.log("offsetTop", ref.current?.offsetTop);
    console.log("clientTop", ref.current?.clientTop);

    console.log("totol offsetTop", getTotalOffsetTop(ref.current!));
  }, []);

  function getTotalOffsetTop(element: HTMLElement) {
    let totalOffsetTop = 0;
    while (element) {
      if (totalOffsetTop > 0) {
        totalOffsetTop += element.clientTop
      }
      totalOffsetTop += element.offsetTop;
      element = element.offsetParent as HTMLElement;
    }
    return totalOffsetTop;
  }

  return (
    <div>
      <div
        style={{
          position: "relative",
          margin: "100px",
          padding: "200px",
          border: "10px solid blue",
        }}
      >
        <div
          id="box"
          ref={ref}
          style={{
            border: "20px solid #000",
            // marginTop: "800px",
            width: "100px",
            height: "100px",
            background: "blue",
            overflow: "auto",
          }}
          onClick={clickHandler}
        >
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
    </div>
  );
}

export default App;
