import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import "./index.css";

interface CalendarProps {
  value?: Date,
  onChange?: (date: Date) => void,
}

interface CalendarRef {
  getDate: () => Date,
  setDate: (date: Date) => void
}

const InternalCalendar: React.ForwardRefRenderFunction<CalendarRef, CalendarProps> = (props, ref) => {
  const {
    value = new Date(),
    onChange = () => {}
  } = props

  const [date, setDate] = useState(value);

  useImperativeHandle(ref, () => {
    return {
      getDate: () => date,
      setDate: (date: Date) => setDate(date)
    }
  })

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  const daysOfMonth = (year: number, month: number, date: number = 0) => {
    return new Date(year, month + 1, date).getDate();
  };

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const days = [];

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth(), 0);
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = firstDay - 1; i >= 0; i--) {
      const num = daysOfMonth(date.getFullYear(), date.getMonth() - 1, -i)
      const clickHandler = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth() - 1, num));
      days.push(<div key={`empty-${i}`} className="empty" onClick={clickHandler}>{num}</div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth(), i));
      if (i === date.getDate()) {
        days.push(
          <div key={`day-${i}`} className="day selected" onClick={clickHandler}>
            {i}
          </div>
        );
      } else {
        days.push(
          <div key={`day-${i}`} className="day" onClick={clickHandler}>
            {i}
          </div>
        );
      }
    }

    const num = 42 - days.length
    for (let i = 1; i <= num; i++) {
      const clickHandler = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth() + 1, i));
      days.push(<div key={`next-${i}`} className="empty" onClick={clickHandler}>{i}</div>);
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()}年{monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDays()}
      </div>
    </div>
  );
}

const Calendar = React.forwardRef(InternalCalendar)

function Test() {
  const calendarRef = useRef<CalendarRef>(null)

  // useEffect(() => {
  //   console.log(calendarRef.current?.getDate().toLocaleDateString())

  //   setTimeout(() => {
  //     calendarRef.current?.setDate(new Date(2024, 3, 1))
  //   })
  // }, [])

  return <div>
    <Calendar ref={calendarRef} value={new Date('2023-3-1')} onChange={(date: Date) => {
      console.log(date.toLocaleDateString())
      calendarRef.current?.setDate(new Date(date.toLocaleDateString()))
    }}></Calendar>
    {/* <Calendar ref={calendarRef} value={new Date('2024-8-15')}></Calendar> */}
  </div>
}

export default Test;
