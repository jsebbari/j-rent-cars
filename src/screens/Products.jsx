import {useState, useEffect, useContext} from "react"
import "../styles/Products.css"
import Car from '../components/Car'
import {cars} from '../datas/cars'
import uuid from "react-uuid"
import { AllCarsContext } from "../context/AllCarsContext"
import {onSnapshot,collection } from "firebase/firestore";
import {db} from '../firebase/firebase.config'
import ScaleLoader  from "react-spinners/ScaleLoader";

import FilterCategories from "../components/FilterCategories"


function Products() {

//useState_____________________________________________
    const [displayedData, setDisplayedData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [loadingCars, setLoadingCars] = useState(true);

//useContext___________________________________________
    const {allCars, setAllCars} = useContext(AllCarsContext)

//useEffect____________________________________________

const fetchDataFromFirebase = async () => {
     onSnapshot(collection(db, "cars"), (data) => {
        setAllCars(data.docs.map(doc =>doc.data()))
        setLoadingCars(false)
    })

    
}

useEffect(() => {
    allCars.length === 0 ? fetchDataFromFirebase() : setLoadingCars(false)
}, [])



//functions_____________________________________________

const mapDatas = filterData.length === 0 ? allCars : filterData;

const listCars= mapDatas.map (car => {
    const {marque, model, price, options, description} = car
        return  <Car 
                key={uuid()}
                marque={marque}
                model={model}
                price={price}
                options={options}
                description={description}
            />
        })


    return (
    
        <div className="Products"> 
            <div className='title-cars-container'>
                <h1 className='title-cars text-light'>Nos véhicules</h1>  
            </div>
            <FilterCategories displayedData={allCars} setDisplayedData = {setAllCars} filterData={filterData} setFilterData={setFilterData}/>
          {loadingCars?< ScaleLoader color="#ffc107" loading={setLoadingCars}  size={40}/>: <div className="cars">
                {listCars}
            </div>} 
                
        </div>
    )
}

export default Products
