import {useState} from 'react'
import '../styles/ConnectUser.css'
import SignUpForm from '../components/SignUpForm'
import SignInForm from"../components/SignInForm"

export default function () {

    const [displayForm, setDisplayForm] =useState("signIn")
  return (
    <div className="form-container bg-dark">
       
        <div className='d-none d-md-flex presentation-form  align-items-center'>
            <h3 className='d-flex h-100 w-100 align-items-center justify-content-center bg-dark bg-opacity-75 text-white'>Accédez à vos réservations</h3>
        </div>

        <div className='form-container-right'>
            {displayForm === "signUp"?
            <SignUpForm setDisplayForm={setDisplayForm}/>
            :<SignInForm setDisplayForm={setDisplayForm}/>}
        </div>
        
    </div>
  )
}
