import {useState, useEffect} from "react"
import "../styles/Products.css"
import Car from '../components/Car'
import {cars} from '../datas/cars'
import uuid from "react-uuid"

import FilterCategories from "../components/FilterCategories"


function Products() {

    const [displayedData, setDisplayedData] = useState(cars)


    
    return (
        
        <div className="Products">
            
            <div className='title-cars-container'>
                <h1 className='title-cars'>Nos véhicules</h1>
                
            </div>

            <FilterCategories displayedData={displayedData} setDisplayedData = {setDisplayedData}/>
                <div className="cars">
                    {displayedData.map (car => {
                    return  <Car 
                            key={uuid()}
                            marque={car.marque}
                            model={car.model}
                            price={car.price}
                            options={car.options}
                            description={car.description}
                        />
                    })}
                </div>
                
        </div>
    )
}

export default Products
