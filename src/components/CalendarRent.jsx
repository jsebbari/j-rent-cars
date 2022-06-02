import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';


function CalendarRent() {

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log(value);
  }, [value])
  

  return (
    <div className='calendar-container'>
      
      <Calendar onChange={onChange} value={value}  selectRange={true}/>
    </div>
  );
}

export default CalendarRent

