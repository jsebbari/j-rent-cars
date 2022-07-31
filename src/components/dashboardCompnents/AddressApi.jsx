
import {useEffect, useState} from 'react'
import "../../styles/AddressApi.css"
import {uid} from 'react-uid'
import ScaleLoader  from "react-spinners/ScaleLoader";

export default function AddressApi({address, setAddress}) {

    const [resultStreets, setResultStreets] = useState([])
    const [streetSearch, setStreetSearch] = useState("")
    const [loadingDatas, setLoadingDatas] = useState(false)


    useEffect( () => {
      setStreetSearch(address.street)
  }, [address])




    const handleChangeStreet = async (e) => {
      setAddress({...address, street:e.target.value})
      setLoadingDatas(true)

     if (e.target.value.length > 3){ 
        const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${streetSearch}&type=street&autocomplete=1`)
        const data = await response.json()
        console.log(data);
        setResultStreets([])
        setLoadingDatas(false)
        data.features.map((street) => {
           setResultStreets(resultStreets => [...resultStreets,{name: street.properties.name,
           city:street.properties.city, postcode: street.properties.postcode }]
           );
      })}else {
        setResultStreets([])
      }
    }

   const displayResults= resultStreets.map ((street) => {
    
    const handleSelectStreet = () => {
        setAddress({...address, 
            street: street.name,
            postalCode: street.postcode,
            city:street.city,
         })
         setResultStreets([])
    }
        return <li onClick ={handleSelectStreet} key={uid(street)} >
        <span>{street.name}</span>
        <span> {street.postcode} {street.city}</span>
        </li>
    })


    
  return (
    <div className='address-api-container'>


    <label htmlFor="address" className='input-labels'>Adresse postale</label>
    <input type="number" placeholder='Numéro ' id="houseNumber" name="houseNumber"value ={address.houseNumber}  onChange= {(e)=>setAddress({...address, houseNumber: e.target.value})}/>
        <input type="text" placeholder='Adresse' id="address" name="street" value ={streetSearch} onChange= {handleChangeStreet}/>
        {resultStreets.length !== 0 &&   <ul className="result-cities">{displayResults}</ul>}
        {loadingDatas&&resultStreets.length===0?< ScaleLoader color="black" loading={loadingDatas}  size={15} />:null}
        <input type="number" placeholder='Code postal' name="postalCode"value ={address.postalCode}  onChange= {(e)=>setAddress({...address, postalCode: e.target.value})}/>
        <input type="text" placeholder='Ville' name="city" value ={address.city} onChange={(e)=>setAddress({...address, city: e.target.value})}/>
         
    </div>
  )
}
