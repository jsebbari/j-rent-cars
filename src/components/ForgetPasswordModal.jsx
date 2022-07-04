import {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ForgetPasswordModal.css"
import { Modal, CloseButton, Button, Form } from "react-bootstrap";
import {sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

import {BsCheck2Circle} from "react-icons/bs";



export default function ForgetPasswordModal(props) {
 
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState(null)
    const [responseFirebase, setResponseFirebase] = useState(null)
    const [errorFirebase, setErrorFirebase] = useState(null)
  

    const handleShow = (e) => {
        setShowModal(true)
      }
  const closeModalButton = () => {
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false)
    setResponseFirebase(null)
  }

  const emailChange = (e) => {
    setErrorFirebase(null)
    setEmail(e.target.value);
    console.log(email);
  }

  const submitForm = async (e) => {
e.preventDefault()
    await sendPasswordResetEmail(auth, email)
  .then(() => {
    setResponseFirebase("Email envoyé")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorFirebase("Oups, une erreur s'est produite, veuillez réessayer")
  });

  }

  const successIcon = <BsCheck2Circle size={40} />;

  return (
    <>
       <p className='text-warning text-center m-0 links-form' onClick={handleShow}>Mot de passe oublié</p>
       <Modal show={showModal} onHide={handleClose} centered= {true}>
       <Modal.Header closeButton>
          <Modal.Title>Mot de passe oublié</Modal.Title>
        </Modal.Header>
        
       
        <Modal.Body className="w-100 d-flex flex-column ">
        {!responseFirebase? 
         <Form onSubmit={submitForm} id="forget-password-form">
            <Form.Group className="mb-3" >
        
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={emailChange}
                required
                className="input-forget-password"
              
            
              />
            </Form.Group>
            {errorFirebase&&<p className="text-danger">{errorFirebase}</p>}
          </Form>: <p className="text-success">{successIcon} {responseFirebase}</p>}

        </Modal.Body>
       
       <Modal.Footer >
       {!responseFirebase? <Button variant="warning" type="submit" form="forget-password-form" >
            Valider
          </Button>:<Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>}
        </Modal.Footer> 

      </Modal>
    </>
  );
}


