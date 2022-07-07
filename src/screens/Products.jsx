import {useState, useEffect, useContext} from "react"
import "../styles/Products.css"
import Car from '../components/Car'
import {cars} from '../datas/cars'
import uuid from "react-uuid"
import { AllCarsContext } from "../context/AllCarsContext"

import FilterCategories from "../components/FilterCategories"


function Products() {

//useState_____________________________________________
    const [displayedData, setDisplayedData] = useState(cars)
    const [filterData, setFilterData] = useState([])

//useContext___________________________________________
    const {allCars} = useContext(AllCarsContext)

//useEffect____________________________________________
useEffect(() => {
 console.log(allCars.length); 

}, [])


//functions_____________________________________________

const mapDatas = filterData.length === 0 ? displayedData : filterData;

const listCars= mapDatas.map (car => {
        return  <Car 
                key={uuid()}
                marque={car.marque}
                model={car.model}
                price={car.price}
                options={car.options}
                description={car.description}
            />
        })


    return (
        
        <div className="Products">
            
            <div className='title-cars-container'>
                <h1 className='title-cars text-light'>Nos véhicules</h1>
                
            </div>

            <FilterCategories displayedData={displayedData} setDisplayedData = {setDisplayedData} filterData={filterData} setFilterData={setFilterData}/>
                <div className="cars">
                    {listCars}
                </div>
                
        </div>
    )
}

export default Products
