import {useState} from 'react'
import '../styles/ConnectUser.css'
import SignUpForm from '../components/SignUpForm'
import SignInForm from"../components/SignInForm"

export default function () {

    const [displayForm, setDisplayForm] =useState("signIn")
  return (
    <div className="form-container bg-dark">
       
        <div className=' presentation-form '>
            <h3 className='d-flex h-100 w-100 align-items-center justify-content-center bg-dark bg-opacity-75 text-light'> <span className='bg-secondary bg-opacity-75 p-2'> Accédez à vos réservations</span></h3>
        </div>

        <div className='form-container-right'>
            {displayForm === "signUp"?
            <SignUpForm setDisplayForm={setDisplayForm}/>
            :<SignInForm setDisplayForm={setDisplayForm}/>}
        </div>
        
    </div>
  )
}
