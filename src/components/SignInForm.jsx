
import { useRef,useState, useContext } from 'react';
import { Button, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import PulseLoader  from "react-spinners/PulseLoader";



function SignUpForm({setDisplayForm}) {

  // States______________________________________

  const [user, setUser] = useState(null)
  const [showErrorAlert, setShowErrorAlert] = useState(null);
  const [loading, setLoading] = useState(false);


// Context________________________________________

  const {signIn, currentUser} = useContext(AuthContext)

// Refs___________________________________________

  const emailRef = useRef()
  const passwordRef = useRef()

// Functions________________________________________
  const handleSubmitForm = async (e)=> {
      e.preventDefault()
      setLoading(true)
      setShowErrorAlert(null)
      try {
        const createUser = await signIn(emailRef.current.value, passwordRef.current.value)
        // navigate("/private")
        console.log("connecté", currentUser);
        setLoading(false)
        
    } catch (error) {
      setLoading(false)
      setShowErrorAlert(error.code) 
    }    
  }

  const spinner = < PulseLoader color="silver" loading={loading}  size={15} />

  
  return (
    < div >
      <h1 className='text-light'>Se connecter</h1>
     

      <form className='form' onSubmit ={handleSubmitForm}>
        <input type="email" name="email" ref={emailRef} placeholder='Adresse mail' required/>
        <input type="password" name="password" ref={passwordRef} placeholder='Mot de passe' required />
        { showErrorAlert&&<p className='text-danger'>{showErrorAlert}</p>}
      {!loading? <Button variant="warning" type="submit" className='w-100'>
          Se connecter
        </Button>:spinner}  
        
        <p className='text-warning pt-2 links-form' onClick={()=>setDisplayForm("signUp")}>Pas encore inscrit ? Cliquez-ici</p>
      </form>
    </div>
  );
}

export default SignUpForm;