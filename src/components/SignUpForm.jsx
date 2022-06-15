import { useRef,useState, useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';


function SignUpForm({setDisplayForm}) {

  const [user, setUser] = useState(null)
  const [showErrorAlert, setShowErrorAlert] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(null);

  const formRef =useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()


  const submitForm =(e)=> {
      e.preventDefault()
      
      if(passwordRef.current.value.length < 6){
        setShowErrorAlert("Mot de passe inférieur à 6 caractères")
      }

      else if(confirmPasswordRef.current.value !== passwordRef.current.value){
        setShowErrorAlert("Mot de passe différent")
      }

      else{
        setUser({email:emailRef.current.value, password: passwordRef.current.value})
        setShowErrorAlert(null)
        setShowSuccessAlert("Inscription validée")
        formRef.current.reset()
      }      
  }

  
  return (
    < div >
    { showErrorAlert&&<Alert  variant="danger" height="30px"  onClose ={()=>setShowErrorAlert(null)} dismissible>
          {showErrorAlert}
        </Alert>}

    {showSuccessAlert&&<Alert  variant="success" height="30px"  onClose ={()=>setShowSuccessAlert(null)} dismissible>
          {showSuccessAlert}
      </Alert>}
      
      <h1 className='text-light'>Inscription</h1>
      <form className='form' onSubmit ={submitForm} ref={formRef}>
        <input type="text" name="name" placeholder='Nom' required/>
        <input type="text" name="firstName" placeholder='Prénom' required/>
        <input type="email" name="email" ref={emailRef} placeholder='Adresse mail' required/>
        <input type="password" name="password" ref={passwordRef} placeholder='Mot de passe' required/>
        <input type="password" name="password-confirm" ref={confirmPasswordRef} placeholder='Confirmez votre mot de passe' required />
        <Button variant="warning" type="submit" className='w-100'>
          S'inscrire
        </Button>
        <p className='text-warning pt-2 links-form' onClick={()=>setDisplayForm("signIn")}>Déjà inscrit ? Cliquez-ici</p>
      </form>
    </div>
  );
}

export default SignUpForm;