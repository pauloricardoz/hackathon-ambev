import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import myContext from '../Context';
const MyCalendar = () => {
  const { date, setDate } = useContext(myContext);
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  };

  return (
    <Calendar onChange={onDateChange} value={date} showNeighboringMonth={false} locale={'pt-BR'} />
  );
};

export default MyCalendar;
