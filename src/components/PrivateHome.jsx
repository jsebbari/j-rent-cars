import {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate} from "react-router-dom"
import {sendEmailVerification } from 'firebase/auth';
import Dashboard from './Dashboard';


function PrivateHome() {
  
// navigation____________________________________________
const navigate = useNavigate();
  
// useContext____________________________________________
    const {currentUser} =useContext(AuthContext)


// useEffect_____________________________________________
  useEffect(async () => {
  !currentUser&& navigate("/connexion")
}, [])

// useState_____________________________________________

  const [open, setOpen] = useState(false);


  return (
    <div className='bg-dark vh-100 vw-100'>
        <Dashboard/>
    </div>
  )
}

export default PrivateHome