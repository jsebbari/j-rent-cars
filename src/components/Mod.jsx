import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Example({img,marque,model,zoomImgHover}) {
  
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  
    return (
      <>
      
      <img src={img} alt={`${marque}_${model}`} className={`${zoomImgHover} img-car`} onClick={() => handleShow(true)}/>
       
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{marque} {model}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal>
      </>
    );
  }