import React from 'react'
import "../styles/ErrorPage.css"
import {GiCarWheel} from "react-icons/gi";
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-100 vh-100  error-page'>
      <main>
       <h1>Erreur <span>4<GiCarWheel/>4</span></h1> 
       <p>La page recherchée est introuvable...</p>
       <Link className='btn btn-warning mt-2 ' to= "/" >Revenir à l'accueil</Link>
      </main>
    </div> 
  )
}

export default ErrorPage