import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Toggle from './Toggle';
import useCounter from './useCounter';

function App() {
  const [count, increment, decrement] = useCounter()

  return (
    <div className="App">
      {/* <Toggle></Toggle> */}
      <div>{count}</div>
      <div><button onClick={() => increment(1)}>+</button></div>
      <div><button onClick={() => decrement(1)}>-</button></div>
    </div>
  );
}

export default App;
