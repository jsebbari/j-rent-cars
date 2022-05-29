import { Modal, CloseButton, Container } from "react-bootstrap";
import CarouselCar from './CarouselCar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ModalCar.css'

export default function ModalCar({showModal,setShowModal, fullscreen, marque,model, img}) {
  

    return (
      <>
        <Modal show={showModal} fullscreen={fullscreen} onHide={() => setShowModal(false)}  >
        <CloseButton variant='white' onClick={() => setShowModal(false)}  />
          <Modal.Body   style={{backgroundColor:"rgb(13, 14, 15)"}}>
          <CarouselCar img={img}/>
          
          </Modal.Body>
          
        </Modal>
      </>
    );
  }