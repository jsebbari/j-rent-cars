import React from 'react'
import "../styles/Products.css"
import Car from '../components/Car'
import {cars} from '../datas/cars'


function Products() {

    
    return (
        <div className="Products">
            <h1>Véhicules</h1>
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
