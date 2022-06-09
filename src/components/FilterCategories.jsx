import {useState, useEffect} from "react"
import "../styles/FilterCategories.css"
import {Button,Dropdown} from'react-bootstrap'
import {BsFilter} from "react-icons/bs";

function FilterCategories({displayedData,setDisplayedData}) {

function descendingOrder() {
    const descendingListFilter= [...displayedData].sort((a, b) => {
        return b.price - a.price;
    });

 
    setDisplayedData(descendingListFilter)
   
}

function ascendingOrder() {
    const ascendingListFilter= [...displayedData].sort((a, b) => {
        return a.price - b.price;
    });

   
    setDisplayedData(ascendingListFilter)
}


  return (


<Dropdown className='align-self-md-start align-self-sm-center mx-md-5 mt-2'>
        <Dropdown.Toggle  variant="outline-warning" id="dropdown-basic" className=' d-flex justify-content-center px-4 w-auto '>
            <span className='mx-2'>Filtrer</span> 
            <BsFilter size={25} />
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
            <Dropdown.Item onClick={ascendingOrder} >Par odre croissant</Dropdown.Item>
            <Dropdown.Item onClick={descendingOrder} >Par odre décroissant</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>

    
  )
}

export default FilterCategories