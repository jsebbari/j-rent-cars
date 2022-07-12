import {useEffect, useState} from 'react'
import "../styles/ErrorPage.css"
import {GiCarWheel} from "react-icons/gi";
import {Link} from 'react-router-dom'





const ErrorPage = () => {

  const [animWheel, setAnimeWheel] = useState ('')
  useEffect(() => {
    setTimeout(()=> {
      setAnimeWheel('wheel-icon')
    },800)
  }, [])
  return (
    <div className='w-100 vh-100  error-page'>
      <main>
       <h1>Erreur <span>4<GiCarWheel className={animWheel}/>4</span></h1> 
       <p>La page recherchée est introuvable...</p>
       <Link className='btn btn-warning mt-2 ' to= "/" >Revenir à l'accueil</Link>
      </main>
    </div> 
  )
}

export default ErrorPage