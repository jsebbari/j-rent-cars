import {useContext, useEffect} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate} from "react-router-dom"
import {signOut} from "firebase/auth"
import { auth} from '../firebase/firebase.config';
import {sendEmailVerification } from 'firebase/auth';
function PrivateHome() {

// navigation____________________________________________
const navigate = useNavigate();

// useContext____________________________________________
    const {currentUser} =useContext(AuthContext)

useEffect(async () => {
  !currentUser&& navigate("/connexion")

}, [])

const logOut = async() => {
    try {
        await signOut(auth)
        navigate('/connexion')
    } catch (error) {
        console.error(error)
    }

}

  return (
    <div>
        Page privée
        <button onClick = {logOut}>se déconnecter</button>
    </div>
  )
}

export default PrivateHome