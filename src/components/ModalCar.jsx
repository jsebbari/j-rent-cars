import { Modal, CloseButton, Button } from "react-bootstrap";
import CarouselCar from './CarouselCar'
import uuid from 'react-uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ModalCar.css'
import { faUnderline } from "@fortawesome/free-solid-svg-icons";


export default function ModalCar({showModal,setShowModal, fullscreen, marque,model,options}) {


  const optionsList = options.map(opt => {

    return <div key={uuid()} style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'0 1rem', color:'antiquewhite'}}>
      {opt.icon}
      <p>{opt.nameOpt}</p>
    </div> 
  })

    return (
      <>
        <Modal show={showModal} fullscreen={fullscreen} onHide={() => setShowModal(false)}  >
        <CloseButton variant='white' onClick={() => setShowModal(false)}  />
          <Modal.Body   style={{backgroundColor:"rgb(13, 14, 15)"}}>
          <CarouselCar marque={marque} model={model}/>
          <div className="d-flex flex-column align-items-center m-2 ">
            <h1 style={{backgroundColor:'antiquewhite',margin:'.5rem 0',padding:'1rem',textAlign:'center', width:'100%'}}> {marque} {model}</h1>
            <div style={{display:'flex', justifyContent:'center',width:'100%'}}>
              {optionsList}
            </div>
            <Button>Vérifier la disponibilité</Button>
          </div>
          
          
          </Modal.Body>
          
        </Modal>
      </>
    );
  }