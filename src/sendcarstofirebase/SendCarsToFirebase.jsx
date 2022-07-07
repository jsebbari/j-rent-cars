import {useState} from 'react'
import {cars} from "../datas/cars"
import {db} from '../firebase/firebase.config'
import {addDoc, collection} from "firebase/firestore"; 

export default function SendCarsToFirebase() {

    const [successFirebase,setSuccessFirebase] = useState()
    const [errorFirebase, setErrorFirebase] = useState()

    const sendAllCars = () => {
        try {

            cars.map(async (car)=> {
              await addDoc(collection(db,"cars"), car)
              .then (setSuccessFirebase("Infos envoyées sur DB Firebase"), setErrorFirebase(null))
            })
          }catch (error) {
                setErrorFirebase("Une erreur s'est produite")
                setSuccessFirebase(null)
              }
          
          
    }



  return (

  
    <div className='vw-100 vh-100 d-flex align-items-center justify-content-center'>
        <button onClick={sendAllCars} >Envoi</button>
       {successFirebase&& <h4 className='text-success'>{successFirebase}</h4>}
       {errorFirebase&& <h4 className='text-danger'>{errorFirebase}</h4>}

    </div>
  )
}
