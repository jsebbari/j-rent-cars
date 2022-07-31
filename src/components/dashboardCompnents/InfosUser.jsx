import {useState, useEffect, useContext} from 'react'
import "../../styles/InfosUser.css"
import {Button} from 'react-bootstrap';
import {onSnapshot,doc, setDoc  } from "firebase/firestore";
import {db} from '../../firebase/firebase.config'
import {AuthContext} from "../../context/AuthContext"
import AddressApi from './AddressApi';
import ScaleLoader  from "react-spinners/ScaleLoader";
import Alert from 'react-bootstrap/Alert';


function InfosUser() {

//useContext______________________________________________
const {currentUser} =useContext(AuthContext)

//useState______________________________________________
 
    const [loadingFetchFirestore, setLoadingFetchFirestore] = useState(true)
    const [loadingSendFirestore, setLoadingSendFirestore] = useState(false)
    const [successMessage, setSuccessMessage] = useState(null)


    const [name, setName] =useState("")
    const [firstname, setFirstname] =useState("")
    const [address, setAddress] =useState({
        houseNumber:"",
        street:"",
        postalCode:"",
        city:""
    })

    const [telephone, setTelephone] =useState("")
    

//useEffect____________________________________________

    const fetchDataFromFirebase = async () => {
        const unsub = onSnapshot(doc(db, "users", currentUser.uid ), (doc) => {
            setName(doc.data().name)
            setFirstname(doc.data().firstname)
            setTelephone(doc.data().telephone)

            if (doc.data().address){ 
                setAddress(doc.data().address)
            }
            setLoadingFetchFirestore(false)
        }); 
      
    }

    useEffect(() => {
        fetchDataFromFirebase()   
        
    }, [])
  


    
const updateProfil= async () => {
    setLoadingSendFirestore(true)
    await setDoc(doc(db, "users", currentUser.uid), {
        name,
        firstname,
        address,
        telephone
      });
      setLoadingSendFirestore(false)
      setSuccessMessage ("Vos informations ont bien été modifiées !")
}

const displaySuccessMessage =  <Alert variant="success" >{successMessage}</Alert>

  return (
<>

    {loadingFetchFirestore?< ScaleLoader color="black" loading={loadingFetchFirestore}  size={15} />: <form className='form'>
        <label htmlFor="name" className='input-labels'>Nom</label>
        <input type="text" id ="name" name="name" value ={name} onChange= {(e)=>setName(e.target.value)}/>
    
        <label htmlFor="firstname" className='input-labels'>Prénom</label>
        <input type="text" id="firstname" name="firstname" value ={firstname} onChange= {(e)=>setFirstname(e.target.value)}/>
        
        <AddressApi address={address} setAddress={setAddress}/>
        
        <label htmlFor="telephone" className='input-labels'>Téléphone</label>
        <input type="tel" id="telephone" name="telephone"value ={telephone} onChange= {(e)=>setTelephone(e.target.value)}/>
        {successMessage&&displaySuccessMessage}
        <Button variant="warning" onClick = {updateProfil}>
        {!loadingSendFirestore?"Enregistrer les modifications": < ScaleLoader color="black" loading={loadingSendFirestore}  size={15} />}
        </Button>
        
    </form>}
</>
    
  )
}

export default InfosUser