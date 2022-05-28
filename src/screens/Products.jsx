import {useState} from 'react'
import "../styles/Products.css"
import Car from '../components/Car'
import {cars} from '../datas/cars'


function Products() {

    
    return (
        
        <div className="Products">
            
            <div className='title-cars-container'>
                <h1 className='title-cars'>Nos véhicules</h1>
            </div>
                <div className="cars">
                    {cars.map (car => {
                    return  <Car 
                            key={car.id}
                            id={car.id}
                            marque={car.marque}
                            model={car.model}
                            price={car.price}
                            quantity={car.quantity}
                            img= {car.img}
                        />
                    })}
                </div>
                
        </div>
    )
}

export default Products
