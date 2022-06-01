import { useState } from "react";
import { Modal, CloseButton, Button } from "react-bootstrap";
import CarouselCar from './CarouselCar'
import uuid from 'react-uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ModalCar.css'
import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import CalendarRent from './CalendarRent'
import CalendarRange from "./CalendarRange";
import CalendarModal from "./CalendarModal";


export default function ModalCar({showModal,setShowModal, fullscreen, marque,model,options,description}) {

  // const [showCalendar, setShowCalendar] = useState (false)

  const optionsList = options.map(opt => {

    return <li key={uuid()} style={{display:'flex', flexDirection:'column', alignItems:'center' ,color:'antiquewhite',listStyleType:'none'}}>
      <i>{opt.icon}</i>
      <p>{opt.nameOpt}</p>
    </li> 
  })

  const closeModalButton = ()=> {
   setShowModal(false)
  }


  // const arrowDirection= showCalendar? "arrow-btn-open": "arrow-btn"
    return (
      <>
        <Modal show={showModal} fullscreen={fullscreen} onHide={() => setShowModal(false)}>
        <CloseButton variant='white' onClick={closeModalButton} className='btn-close-modal-car'/>
          <Modal.Body  className="modal-car-body" style={{backgroundColor:"rgb(13, 14, 15)"}}>
          
          <CarouselCar marque={marque} model={model}/>
          <div className="bottom-modal-car">
            

         
           
            <h1 className="title-style"> {marque} {model}</h1>
            <a href="#disponibilités" className="btn btn-warning
             disponibility-btn">
              Vérifier les disponibilités
            </a> 

            <p style={{color:'antiquewhite', padding:'0 .5rem', textAlign:'center'}}>{description}</p>

            <h3>Options principales</h3>
            <ul style={{display:'flex', justifyContent:'space-evenly',width:'100%', marginTop:'1rem'}}>
              {optionsList}
            </ul>
          

           
           <div id='disponibilités'>
             <h3>Disponibilités</h3>
              <CalendarRange/>
           </div>
            
          </div>
          
          
          </Modal.Body>
          
        </Modal>
      </>
    );
  }