import { useState } from 'react';
import { DateRange } from 'react-date-range'
import {fr} from 'react-date-range/dist/locale';



import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import React from 'react'

function CalendarRange() {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
      
    <DateRange
    rangeColors={['#ffc107']}
    minDate={new Date()}
    locale={fr}
    editableDateInputs={true}
    onChange={item => setState([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={state}
    />
    
    
  )
}


export default CalendarRange




////////////////////////////////////////////////////////////////////////////////

      // const validForm = () => {
      //   if (tripDates.tripStart === undefined) {
      //     alert("🚨 Merci de saisir la date du début de location 🚨");
      //   } else if (tripDates.tripEnd === undefined) {
      //     alert("🚨 Merci de saisir la date de retour de location 🚨");
      //   } else {
      //     alert(
      //       `Félicitation 🎊, la location de votre ${tripDates.car} est confirmée pour la période du ${tripDates.tripStart} au ${tripDates.tripEnd}`
      //     );
      //   }
      // };

    //   const [tripDates, setTripeDates] = useState({tripStart:'', tripEnd:''})

    //   const changeDate = (e) => {
    //       setTripeDates({...tripDates,[e.target.name]: e.target.value})
    //      console.log(tripDates)
    //   }
  
    //   const validForm = () => {
    //       console.log("Formulaire validé")
    //    }

//     <div>
//     <label htmlFor="start">Départ</label>
// <input
//     type="date"
//     id="start"
//     name="tripStart"
//     min={new Date()}
//     max={tripDates.tripEnd}
//     onChange={changeDate}
  
// />

// <label htmlFor="start">Retour</label>
// <input
//     type="date"
//     id="end"
//     name="tripEnd"
//     min={tripDates.tripStart}
//     onChange={changeDate}
//     isValidDate={new Date()+1}
// />


// </div>