import { Modal } from "react-bootstrap";
import CarouselCar from './CarouselCar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalCar({showModal,setShowModal, fullscreen, marque,model, img}) {
  

    return (
      <>
        <Modal show={showModal} fullscreen={fullscreen} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{marque} {model}</Modal.Title>
          </Modal.Header>
          <Modal.Body><CarouselCar img={img}/></Modal.Body>
        </Modal>
      </>
    );
  }