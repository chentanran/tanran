import MonthCalendar from './MonthCalendar'
import Header from './Header'
// import './index.scss'
import dayjs, { Dayjs } from 'dayjs'
import cs from 'classnames'
import LocaleContext from './LocaleContext'
import { useState } from 'react'

export interface CalendarProps {
  value: Dayjs,
  style?: React.CSSProperties,
  className?: string | string[],
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => React.ReactNode,
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效
  dateInnerContent?: (currentDate: Dayjs) => React.ReactNode,
  // 国际化相关
  locale?: string
  onChange?: (date: Dayjs) => void
}

function Calendar(props: CalendarProps) {
  const {
    value,
    style,
    className,
    locale,
    onChange
  } = props;

  const classNames = cs("calendar", className);

  const [curValue, setCurValue] = useState<Dayjs>(value)

  const [curMonth, setCurMonth] = useState<Dayjs>(value)

  function changeDate(date: Dayjs) {
    setCurValue(date)
    setCurMonth(date)
    onChange?.(date)
  }

  function selectHandler(date: Dayjs) {
    changeDate(date)
  }

  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'))
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'))
  }

  function todayHandler() {
    const date = dayjs(Date.now())
    changeDate(date)
  }

  return <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
    <div className={classNames} style={style}>
      <Header curMonth={curMonth} prevMonthHandler={prevMonthHandler} nextMonthHandler={nextMonthHandler} todayHandler={todayHandler} />
      <MonthCalendar {...props} value={curValue} curMonth={curMonth} selectHandler={selectHandler} />
    </div>
  </LocaleContext.Provider>
   
}

export default Calendar
