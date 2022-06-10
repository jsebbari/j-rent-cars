import { Modal, CloseButton } from "react-bootstrap";
import CarouselCar from "./CarouselCar";
import uuid from "react-uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ModalCar.css";

import CalendarRange from "./CalendarRange";

import { GiCarDoor, GiGps } from "react-icons/gi";
import { FaRegSnowflake } from "react-icons/fa";
import { MdLuggage} from "react-icons/md";

export default function ModalCar(props) {
  const {showModal, setShowModal, fullscreen, marque, model, options, description}=props
  
  const doorIcon = <GiCarDoor size={30} />;
  const gpsIcon = <GiGps size={30} />;
  const climIcon = <FaRegSnowflake size={30} />;
  const bagageIcon = <MdLuggage size={30} />;

  const OptionIconGenerator = (option) => {
    if (option === "Gps") {return gpsIcon}
    else if (option === "Climatisation") {return climIcon}
    else if (option.includes("portes")){return doorIcon} 
    else if (option.includes("Bagage")) {return bagageIcon}

  }

  const optionsList = options.map((opt) => {
    return <li
    key={uuid()}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "antiquewhite",
      padding:"0 1rem",
      listStyleType: "none",
    }}
  >
    <i>{OptionIconGenerator(opt)}</i> 
    <p>{opt}</p>
     </li>
  });

  const closeModalButton = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        fullscreen={fullscreen}
        onHide={() => setShowModal(false)}
      >
        <CloseButton
          variant="white"
          onClick={closeModalButton}
          className="btn-close-modal-car"
        />
        <Modal.Body
          className="modal-car-body"
          style={{ backgroundColor: "rgb(13, 14, 15)" }}
        >
          <CarouselCar marque={marque} model={model} />
          <div className="bottom-modal-car">
            <h1 className="title-style">
              {marque} {model}
            </h1>
            <a
              href="#disponibilités"
              className="btn btn-warning
             disponibility-btn"
            >
              Vérifier les disponibilités
            </a>

            <p
              style={{
                color: "antiquewhite",
                padding: "0 1rem",
                textAlign: "start",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              
              }}
            >
              {description}
            </p>

            <h3>Options principales</h3>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              {optionsList}
            </ul>

            <div id="disponibilités">
              <h3>Disponibilités</h3>
              <CalendarRange />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
