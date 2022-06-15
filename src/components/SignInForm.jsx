
import { useRef,useState } from 'react';
import { Button } from 'react-bootstrap';


function SignUpForm({setDisplayForm}) {

  const [user, setUser] = useState(null)

  const emailRef = useRef()
  const passwordRef = useRef()

  const submitForm =(e)=> {
      e.preventDefault()
      setUser({email:emailRef.current.value, password: passwordRef.current.value})      
  }

  
  return (
    < div >
      <h1 className='text-light'>Se connecter</h1>
      <form className='form' onSubmit ={submitForm}>
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