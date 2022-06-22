
import { useRef,useState, useContext } from 'react';
import { Button, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'



function SignUpForm({setDisplayForm}) {

  // States______________________________________

  const [user, setUser] = useState(null)
  const [showErrorAlert, setShowErrorAlert] = useState(null);

// Context________________________________________

  const {signIn} = useContext(AuthContext)

// Refs___________________________________________

  const emailRef = useRef()
  const passwordRef = useRef()

// Functions________________________________________
  const handleSubmitForm = async (e)=> {
      e.preventDefault()
      try {
        const createUser = await signIn(emailRef.current.value, passwordRef.current.value)
        // navigate("/private")
        console.log("connecté");
        
    } catch (error) {

      setShowErrorAlert(error.code) 
    }    
  }

  
  return (
    < div >
      <h1 className='text-light'>Se connecter</h1>
      { showErrorAlert&&<Alert  variant="danger" height="30px"  onClose ={()=>setShowErrorAlert(null)} dismissible>
          {showErrorAlert}
        </Alert>}

      <form className='form' onSubmit ={handleSubmitForm}>
        <input type="email" name="email" ref={emailRef} placeholder='Adresse mail' required/>
        <input type="password" name="password" ref={passwordRef} placeholder='Mot de passe' required />
        <Button variant="warning" type="submit" className='w-100'>
          Se connecter
        </Button>
        
        <p className='text-warning pt-2 links-form' onClick={()=>setDisplayForm("signUp")}>Pas encore inscrit ? Cliquez-ici</p>
      </form>
    </div>
  );
}

export default SignUpForm;