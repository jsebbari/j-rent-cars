import { useState, useEffect } from "react";
import ModalCar from './ModalCar'
import "../styles/Car.css";


function Car (props) {

const { marque, model, price, options, description } = props

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
  
  }, []);


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

  const imgPath = (mod)=> {
    mod.toLowerCase()
    let newModelName=  mod.replace(' ', '')
      return `/imgs-car/card/${newModelName}.png`
  }

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
        <img src= {imgPath(model)} alt={`${marque}_${model}`} className={`${zoomImgHover} img-car`} />
      
      </div>
      <ModalCar showModal={showModal} setShowModal={setShowModal} fullscreen={fullscreen} marque={marque} model={model} options={options} description ={description} />
      </>
  );
}

export default Car;


