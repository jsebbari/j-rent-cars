import {useState, useEffect, useContext} from 'react'
import "../../styles/InfosUser.css"
import {Button} from 'react-bootstrap';
import {onSnapshot,doc, setDoc  } from "firebase/firestore";
import {db} from '../../firebase/firebase.config'
import {AuthContext} from "../../context/AuthContext"


function InfosUser() {

//useContext______________________________________________
const {currentUser} =useContext(AuthContext)

//useState______________________________________________
 
    const [loadingFirebase, setLoadingFirebase] = useState(true)

    const [name, setName] =useState("")
    const [firstname, setFirstname] =useState("")
    const [address, setAddress] =useState("")
    const [postalCode, setPostalCode] =useState("")
    const [city, setCity] =useState("")
    const [telephone, setTelephone] =useState("")
    

//useEffect____________________________________________

    const fetchDataFromFirebase = async () => {
        const unsub = onSnapshot(doc(db, "users", currentUser.uid ), (doc) => {
            setName(doc.data().name)
            setFirstname(doc.data().firstname)
            setAddress(doc.data().address)
            setPostalCode(doc.data().postalCode)
            setCity(doc.data().city)
            setTelephone(doc.data().telephone)
        });  
    }

    useEffect(() => {
        fetchDataFromFirebase()   
    }, [])
    
const updateProfil= async () => {
    await setDoc(doc(db, "users", currentUser.uid), {
        name,
        firstname,
        address,
        postalCode,
        city,
        telephone
      });
}

  return (
    <form className='form'>

    <label htmlFor="name" className='input-labels'>Nom</label>
    <input type="text" id ="name" name="name" value ={name} onChange= {(e)=>setName(e.target.value)}/>
   
    <label htmlFor="firstname" className='input-labels'>Prénom</label>
    <input type="text" id="firstname" name="firstname" value ={firstname} onChange= {(e)=>setFirstname(e.target.value)}/>
    
    <label htmlFor="address" className='input-labels'>Adresse postale</label>
    <input type="text" placeholder='Adresse' id="address" name="address"value ={address} onChange= {(e)=>setAddress(e.target.value)}/>
    <input type="number" placeholder='Code postal' name="postalCode"value ={postalCode} onChange= {(e)=>setPostalCode(e.target.value)}/>
    <input type="text" placeholder='Ville' name="city" value ={city} onChange= {(e)=>setCity(e.target.value)}/>
    
    <label htmlFor="telephone" className='input-labels'>Téléphone</label>
    <input type="tel" id="telephone" name="telephone"value ={telephone} onChange= {(e)=>setTelephone(e.target.value)}/>
    
<Button variant="warning" onClick = {updateProfil}>
      Enregistrer les modifications
    </Button>
    

  </form>

    
  )
}

export default InfosUser