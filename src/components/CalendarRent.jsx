import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../styles/CalendarRent.css'

function CalendarRent() {

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log(value);
  }, [value])
  

  return (
    <div className='calendar-container'>
      <Calendar onChange={onChange} value={value} minDate={new Date()} />
    </div>
  );
}

export default CalendarRent

