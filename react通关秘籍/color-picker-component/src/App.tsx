import React from 'react';
import './App.css';
import ColorPickerPanel from './ColorPicker/ColorPickerPanel'

function App() {
  return (
    <div className="App">
      <ColorPickerPanel value={'rgb(166 57 57)'}></ColorPickerPanel>
    </div>
  );
}

export default App;
