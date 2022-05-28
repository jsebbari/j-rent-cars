import { useState, useEffect } from "react";
import ModalCar from './ModalCar'
import "../styles/Car.css";
import OutsideClickHandler from 'react-outside-click-handler';

function Car({ id, marque, model, price, quantity, img}) {

// ______________ states _____________ 

  const [tripDates, setTripDates] = useState({});
  const [carHover, setCarHover] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  

  
  

// ______________ effect _____________ 

  useEffect(() => {
    console.log(tripDates);
  }, [tripDates]);



// ______________ functions _____________ 


  const changeDate = (e) => {
    setTripDates({
      ...tripDates,
      car: `${marque} ${model}`,
      [e.target.name]: e.target.value,
    });
  };

  const carHoverHandler = () => {
    setCarHover(true);
  };

  const mouseOutCar = () => {
    setCarHover(false);
  };

  const handleOpenModal = ()=> {
      setOpenModal(true)
  }




  const zoomImgHover = carHover && "hover-img";



  return (
    <div
          onClick={handleOpenModal}
          onMouseEnter={carHoverHandler}
          onMouseLeave={mouseOutCar}
          className="car"
    >
      <h2 className="title-card">
        {marque} {model}
      </h2>
      <p>{price}€/jour</p>
      <img src={img} alt={`${marque}_${model}`} className={`${zoomImgHover} img-car`} />
        
        
    <OutsideClickHandler
      onOutsideClick={() => {
        openModal&&setOpenModal(false);
      }}
      >
        {openModal&&<ModalCar marque={marque} model={model}/>}
      </OutsideClickHandler>
      
    </div>

  );
}

export default Car;


     {/* <label htmlFor="start">Départ</label>
      <input
        type="date"
        id="start"
        name="tripStart"
        min={new Date()}
        max={tripDates.tripEnd}
        onChange={changeDate}
      />

      <label htmlFor="start">Retour</label>
      <input
        type="date"
        id="end"
        name="tripEnd"
        min={tripDates.tripStart}
        onChange={changeDate}
      />

      <button onClick={validForm}>Louer</button> */}

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