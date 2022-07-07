import {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate} from "react-router-dom"
import {signOut} from "firebase/auth"
import { auth} from '../firebase/firebase.config';
import {sendEmailVerification } from 'firebase/auth';
import Dashboard from './Dashboard';


function PrivateHome() {

// useEffect_____________________________________________
  useEffect(async () => {
  !currentUser&& navigate("/connexion")
}, [])

// useState_____________________________________________

  const [open, setOpen] = useState(false);

// navigation____________________________________________
const navigate = useNavigate();

// useContext____________________________________________
    const {currentUser} =useContext(AuthContext)



const logOut = async() => {
    try {
        await signOut(auth)
        navigate('/connexion')
    } catch (error) {
        console.error(error)
    }

}

  return (
    <div className='bg-dark vh-100 vw-100'>
        Page privée
        <button onClick = {logOut}>se déconnecter</button>
        <Dashboard/>
    </div>
  )
}

export default PrivateHome