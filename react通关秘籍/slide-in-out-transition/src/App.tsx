import { useState } from "react";
import "./App.css";
import { SlideInOverlay } from "./SlideInOverlay";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
        style={{ position: "relative", zIndex: "10000" }}
      >
        1111
      </button>
      <SlideInOverlay
        isVisible={visible}
        className={"aaaa"}
        style={{ border: "1px solid red" }}
        onEnter={() => {
          alert('111enter')
        }}
        onExit={() => {
          alert('111exit')
        }}
      ></SlideInOverlay>
    </>
  );
}

export default App;
