import { useState, useEffect } from "react";
import "../styles/Car.css";

function Car({ id, marque, model, price, quantity, img }) {

// ______________ states _____________ 

  const [tripDates, setTripDates] = useState({});
  const [carHover, setCarHover] = useState(false);

// ______________ effect _____________ 

  useEffect(() => {
    console.log(tripDates);
  }, [tripDates]);


// ______________ functions _____________ 

  const validForm = () => {
    if (tripDates.tripStart === undefined) {
      alert("🚨 Merci de saisir la date du début de location 🚨");
    } else if (tripDates.tripEnd === undefined) {
      alert("🚨 Merci de saisir la date de retour de location 🚨");
    } else {
      alert(
        `Félicitation 🎊, la location de votre ${tripDates.car} est confirmée pour la période du ${tripDates.tripStart} au ${tripDates.tripEnd}`
      );
    }
  };

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

    <div
      onMouseEnter={carHoverHandler}
      onMouseLeave={mouseOutCar}
      className="car"
    >
      <h2 className="title-card">
        {marque} {model}
      </h2>
      <p>{price}€/jour</p>
      <img src={img} alt={`${marque}_${model}`} className={`${zoomImgHover} img-car`} />
      {/* <h4>{price}€/jour</h4> */}

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
    </div>
  );
}

export default Car;
