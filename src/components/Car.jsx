import { useState, useEffect } from "react";
import ModalCar from './ModalCar'
import "../styles/Car.css";


function Car({ id, marque, model, price, options, img, description}) {

// ______________ states _____________ 

  const [tripDates, setTripDates] = useState({});
  const [carHover, setCarHover] = useState(false);
 

  
  const [fullscreen, setFullscreen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function handleShowModal(breakpoint) {
    setFullscreen(breakpoint);
    setShowModal(true);
  }
  
  

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

  const zoomImgHover = carHover && "hover-img";

  return (
    <>
    <div
          onClick={() => handleShowModal(true)}
          onMouseEnter={carHoverHandler}
          onMouseLeave={mouseOutCar}
          className="car"
    >
      <h3 className="title-card">
        {marque} {model}
      </h3>
      <p>{price}€/jour</p>
      <img src={img} alt={`${marque}_${model}`} className={`${zoomImgHover} img-car`} />
     
    </div>
      <ModalCar img={img} showModal={showModal} setShowModal={setShowModal} fullscreen={fullscreen} marque={marque} model={model} options={options} description ={description} />
      </>
  );
}

export default Car;


