
import { useRef,useState, useContext, useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import PulseLoader  from "react-spinners/PulseLoader";





function SignUpForm({setDisplayForm}) {

  // navigation____________________________________________
  const navigate = useNavigate();

  // States______________________________________

  const [user, setUser] = useState(null)
  const [showErrorAlert, setShowErrorAlert] = useState(null);
  const [loading, setLoading] = useState(false);


// Context________________________________________

  const {signIn, currentUser} = useContext(AuthContext)

// Refs___________________________________________

  const emailRef = useRef()
  const passwordRef = useRef()

// UseEffect______________________________________

  useEffect(() => {
  emailRef.current.focus();
 return currentUser&& navigate("/mon-compte")
  }, [])
  
// Functions______________________________________

const errorFirestore= (err)=>{

  switch (err) {
    case "auth/user-not-found":
      setShowErrorAlert("Aucun utilisateur trouvé")
      emailRef.current.style="border-bottom:1px solid red"
      passwordRef.current.style="border-bottom:1px solid silver ";
    break;

    case "auth/wrong-password":
      setShowErrorAlert("Mot de passe incorrect")
      emailRef.current.style="border-bottom:1px solid silver"
      passwordRef.current.style="border-bottom:1px solid red";
    break;

    default: setShowErrorAlert("Une erreur s'est produite")
      
  }

}
  const handleSubmitForm = async (e)=> {
      e.preventDefault()
      setLoading(true)
      setShowErrorAlert(null)
      try {
        const logUser = await signIn(emailRef.current.value, passwordRef.current.value)
        console.log("connecté", currentUser);
        setLoading(false)
        emailRef.current.style="border-bottom:1px solid silver"
        passwordRef.current.style="border-bottom:1px solid silver";
        navigate("/mon-compte")
        
    } catch (error) {
      setLoading(false)
      errorFirestore(error.code) 
    }    
  }

  const spinner = < PulseLoader color="silver" loading={loading}  size={15} />

  
  return (
    < div >
      <h1 className='text-light'>Se connecter</h1>
     

      <form className='form' onSubmit ={handleSubmitForm}>
        <input type="email" name="email" ref={emailRef} placeholder='Adresse mail*' required/>
        <input type="password" name="password" ref={passwordRef} placeholder='Mot de passe*' required />
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