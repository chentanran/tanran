import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(() => {
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2
  });

  return (
    <div className="App">
      <div onClick={() => setNum(num + 1)}>{ num }</div>
    </div>
  );
}

export default App;
