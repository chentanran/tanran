import React from 'react';
import Calendar from './Calendar';
import dayjs from 'dayjs';

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs('2023-11-09')}></Calendar>
    </div>
  );
}

export default App;
