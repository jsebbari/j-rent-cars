import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ForgetPasswordModal.css";
import { Modal, CloseButton, Button, Form } from "react-bootstrap";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import PulseLoader from "react-spinners/PulseLoader";

import { BsCheck2Circle } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";

export default function ForgetPasswordModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [responseFirebase, setResponseFirebase] = useState(null);
  const [errorFirebase, setErrorFirebase] = useState(null);
  const [loadingForgetPassword, setLoadingForgetPassword] = useState(false);

  const forgetPasswordEmailRef = useRef();

  const successIcon = <BsCheck2Circle size={40} />;
  const errorIcon = <BiErrorAlt size={40}/>;
  const loader = (
    <PulseLoader color="silver" loading={loadingForgetPassword} size={15}/>
  );

  const handleShow = (e) => {
    setShowModal(true);
  };

  const errorAuth = (err) => {
    if (err.includes("auth/user-not-found")) {
      return setErrorFirebase(
        "Cette adresse mail n'est associé à aucun compte"
      );
    }

    return setErrorFirebase(
      "Oups, une erreur s'est produite, veuillez réessayer"
    );
  };

  const handleClose = () => {
    setShowModal(false);
    setResponseFirebase(null);
  };

  const emailChange = (e) => {
    setErrorFirebase(null);
    forgetPasswordEmailRef.current.style="border-bottom:1px solid #ffc107 !important";
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoadingForgetPassword(true);
    await sendPasswordResetEmail(auth, forgetPasswordEmailRef.current.value)
      .then(() => {
        setLoadingForgetPassword(false);
        setResponseFirebase("Email envoyé");
      })
      .catch((error) => {
        setLoadingForgetPassword(false);
        forgetPasswordEmailRef.current.style="border-bottom:1px solid red !important";
        const errorCode = error.code;
        const errorMessage = error.message;
        errorAuth(errorMessage);
      });
  };

  return (
    <>
      <p
        className="text-warning text-center m-0 links-form"
        onClick={handleShow}
      >
        Mot de passe oublié
      </p>
      <Modal show={showModal} onHide={handleClose} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Mot de passe oublié</Modal.Title>
        </Modal.Header>

        <Modal.Body className="w-100 d-flex flex-column ">
          {!responseFirebase ? (
            <Form onSubmit={submitForm} id="forget-password-form">
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Adresse mail"
                  autoFocus
                  onChange={emailChange}
                  required
                  className="input-forget-password"
                  ref={forgetPasswordEmailRef}
                />
              </Form.Group>
              {errorFirebase && (
                <p className="text-danger d-flex align-items-center">
                  {errorIcon} {errorFirebase}
                </p>
              )}
            </Form>
          ) : (
            <p className="text-success">
              {successIcon} {responseFirebase} à <span className="fw-bold">{forgetPasswordEmailRef.current.value}</span>
            </p>
          )}

{loadingForgetPassword ? (
            loader
          ) : !responseFirebase ? (
            <Button variant="warning" type="submit" form="forget-password-form">
              Valider
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          )}
        </Modal.Body>


         
    
      </Modal>
    </>
  );
}
