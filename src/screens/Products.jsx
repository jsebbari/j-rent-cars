import "../styles/Products.css"
import Car from '../components/Car'
import {cars} from '../datas/cars'
import uuid from "react-uuid"


function Products() {

      
    
    return (
        
        <div className="Products">
            
            <div className='title-cars-container'>
                <h1 className='title-cars'>Nos véhicules</h1>
                
            </div>
                <div className="cars">
                    {cars.map (car => {
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
