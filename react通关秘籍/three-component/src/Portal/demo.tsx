import { useEffect, useRef } from 'react';
import Portal from './Portal';

function App() {
  const containerRef = useRef<HTMLElement>(null);

  const content = <div className="btn">
    <button>按钮</button>
  </div>;

  useEffect(()=> {
    console.log(containerRef.current);
  }, []);

  return <Portal attach={document.body} ref={containerRef}>
    {content}
  </Portal>
}

export default App;
