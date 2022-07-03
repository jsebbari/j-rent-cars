import {useState, useEffect} from "react"
import { Modal, CloseButton, Button } from "react-bootstrap";
import {sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import "bootstrap/dist/css/bootstrap.min.css";



export default function ForgetPasswordModal(props) {
 
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState(null)
    const [responseFirebase, setResponseFirebase] = useState(null)
  

    const handleShow = (e) => {
        setShowModal(true)
      }
  const closeModalButton = () => {
    setShowModal(false);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  }

  const submitForm = async () => {

    await sendPasswordResetEmail(auth, email)
  .then(() => {
    setResponseFirebase("Email envoyé")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setResponseFirebase("Oups, une erreur s'est produite, veuillez réessayer")
  });

  }

  

  return (
    <>
       <p className='text-warning mt-3 mb-1 links-form' onClick={handleShow}>Mot de passe oublié</p>
      <Modal
        show={showModal}
        fullscreen={false}
        onHide={() => setShowModal(false)}
        centered= {true}
        
      >
        <CloseButton onClick={closeModalButton} className="shadow-none r-0"/>
        {!responseFirebase? 
        <Modal.Body>
            <input type="email" name="userEmail" onChange={emailChange} />
            <button onClick = {submitForm}>Envoyer</button>
        </Modal.Body>:
        <Modal.Body><p className="text-success">{responseFirebase}</p></Modal.Body>}
        
      </Modal>
    </>
  );
}
