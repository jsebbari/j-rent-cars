import { useRef,useState, useEffect, useContext } from 'react';
import { Button, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { db, auth } from '../firebase/firebase.config';
import { setDoc,doc} from "firebase/firestore"; 
import ScaleLoader  from "react-spinners/ScaleLoader";
import {sendEmailVerification} from 'firebase/auth';



function SignUpForm({setDisplayForm}) {

// States______________________________________

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState (false)
  const [showErrorAlert, setShowErrorAlert] = useState(null);
 


// Refs_________________________________________
  const formRef =useRef()
  const nameRef = useRef()
  const firstnameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

// UseEffect______________________________________
  useEffect(() => {
    nameRef.current.focus();
    return currentUser&& navigate("/mon-compte")
    }, [])

// Context_______________________________________
  const {signUp, currentUser} = useContext(AuthContext)


// Navigate______________________________________
  const navigate = useNavigate()


// Functions______________________________________

const errorFirestore= (err)=>{

  switch (err) {
    case "auth/email-already-in-use":
      setShowErrorAlert("Adresse mail déjà utilisée")
      emailRef.current.style="border-bottom:1px solid red"
      passwordRef.current.style="border-bottom:1px solid silver ";
      confirmPasswordRef.current.style="border-bottom:1px solid silver";
    break;
    
    case "auth/missing-email":
      setShowErrorAlert("Merci de saisir une adresse mail")
      emailRef.current.style="border-bottom:1px solid red"
      passwordRef.current.style="border-bottom:1px solid silver ";
      confirmPasswordRef.current.style="border-bottom:1px solid silver";
    break;

    case "auth/invalid-email":
      setShowErrorAlert("Merci de saisir une adresse mail valide")
      emailRef.current.style="border-bottom:1px solid red"
      passwordRef.current.style="border-bottom:1px solid silver ";
      confirmPasswordRef.current.style="border-bottom:1px solid silver"; 
    break;

    
    case "auth/weak-password":
      setShowErrorAlert("Minimum 6 caractères pour le mot de passe")
      passwordRef.current.style="border-bottom:1px solid red"
      confirmPasswordRef.current.style="border-bottom:1px solid silver";
    break;

    default: setShowErrorAlert("Une erreur s'est produite")
      
  }

}


  const handleSubmitForm = async (e)=> {
      e.preventDefault()
      setLoading(true)

      if(passwordRef.current.value.length < 6){
        setLoading(false)
        setShowErrorAlert("Minimum 6 caractères pour le mot de passe.")  
        passwordRef.current.style="border-bottom:1px solid red";
      }

       if(confirmPasswordRef.current.value !== passwordRef.current.value){
        setLoading(false)
        setShowErrorAlert("Mots de passe non identiques.")  
        passwordRef.current.style="border-bottom:1px solid red ";
        confirmPasswordRef.current.style="border-bottom:1px solid red";
      }

      else{
        emailRef.current.style="border-bottom:1px solid silver"
        passwordRef.current.style="border-bottom:1px solid silver ";
        confirmPasswordRef.current.style="border-bottom:1px solid silver";

        try {
          const createUser = await signUp(emailRef.current.value, passwordRef.current.value)
          await setDoc(doc(db,"users",createUser.user.uid), {name: nameRef.current.value, firstName: firstnameRef.current.value })
          setLoading(false)
          setShowErrorAlert(null)
          navigate("/mon-compte")
          
      } catch (error) {
        setLoading(false)
        errorFirestore(error.code)
        console.log(error);
      }
      }      
  }



  const spinner = <ScaleLoader color="#ffc107" loading={loading}  size={15} />

 
  
  return (
    < div>

      <h1 className='text-light'>Inscription</h1>
      <form className='form' onSubmit ={handleSubmitForm} ref={formRef}>
        <input type="text" name="name" ref={nameRef} placeholder='Nom*' required/>
        <input type="text" name="firstName" ref={firstnameRef} placeholder='Prénom*' required/>
        <input type="email" name="email" ref={emailRef} placeholder='Adresse mail*' required/>
        <input type="password" name="password" ref={passwordRef} placeholder='Mot de passe*' required />
        <input type="password" name="password-confirm" ref={confirmPasswordRef} placeholder='Confirmez votre mot de passe*' required />
        { showErrorAlert&&<p className='text-danger'>{showErrorAlert}</p>}
        {!loading? <Button variant="warning" type="submit" className='w-100'>
         S'inscrire 
        </Button>: spinner}
        <p className='text-warning pt-3 links-form' onClick={()=>setDisplayForm("signIn")}>Déjà inscrit ? Cliquez-ici</p>
      </form>

    </div>
  );
}

export default SignUpForm;