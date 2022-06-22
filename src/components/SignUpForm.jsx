import { useRef,useState, useEffect, useContext } from 'react';
import { Button, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase.config';
import { setDoc,doc} from "firebase/firestore"; 
import PulseLoader  from "react-spinners/PulseLoader";





function SignUpForm({setDisplayForm}) {

// States______________________________________

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState (false)
  const [showErrorAlert, setShowErrorAlert] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(null);


// Refs_________________________________________
  const formRef =useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const nameRef = useRef()
  const firstnameRef = useRef()

// Context_______________________________________

  const {signUp, currentUser} = useContext(AuthContext)
  

// Navigate______________________________________

  const navigate = useNavigate()


// Functions______________________________________

  const handleSubmitForm = async (e)=> {
      e.preventDefault()
      setLoading(true)
      if(passwordRef.current.value.length < 6){
        setShowErrorAlert("Mot de passe inférieur à 6 caractères")  
      }

      else if(confirmPasswordRef.current.value !== passwordRef.current.value){
        setShowErrorAlert("Mot de passe différent")  
      }

      else{
        // setUser({email:emailRef.current.value, password: passwordRef.current.value})
        // setShowErrorAlert(null)
        // setShowSuccessAlert("Inscription validée")
        // formRef.current.reset()

        try {
          const createUser = await signUp(emailRef.current.value, passwordRef.current.value)
          await setDoc(doc(db,"users",createUser.user.uid), {name: nameRef.current.value, firstName: firstnameRef.current.value, reservations:[] })
          setShowSuccessAlert("Inscription validée")
          setLoading(false)
          console.log(currentUser);
          // navigate("/private")
          
      } catch (error) {

        setShowErrorAlert(error.code) 
      }
      }      
  }

  const spinner = < PulseLoader color="silver" loading={loading}  size={15} />

 
  
  return (
    < div>
    { showErrorAlert&&<Alert  variant="danger" height="30px"  onClose ={()=>setShowErrorAlert(null)} dismissible>
          {showErrorAlert}
        </Alert>}

    {showSuccessAlert&&<Alert  variant="success" height="30px"  onClose ={()=>setShowSuccessAlert(null)} dismissible>
          {showSuccessAlert}
      </Alert>}
      
      <h1 className='text-light'>Inscription</h1>
     
      <form className='form' onSubmit ={handleSubmitForm} ref={formRef}>
        <input type="text" name="name" ref={nameRef} placeholder='Nom' required/>
        <input type="text" name="firstName" ref={firstnameRef} placeholder='Prénom' required/>
        <input type="email" name="email" ref={emailRef} placeholder='Adresse mail' required/>
        <input type="password" name="password" ref={passwordRef} placeholder='Mot de passe' required/>
        <input type="password" name="password-confirm" ref={confirmPasswordRef} placeholder='Confirmez votre mot de passe' required />
        {!loading? <Button variant="warning" type="submit" className='w-100'>
         S'inscrire 
        </Button>: spinner}
        <p className='text-warning pt-2 links-form' onClick={()=>setDisplayForm("signIn")}>Déjà inscrit ? Cliquez-ici</p>
      </form>
    </div>
  );
}

export default SignUpForm;