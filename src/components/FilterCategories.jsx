import React from 'react'
import {Button} from'react-bootstrap'
import {BsFilter} from "react-icons/bs";

function FilterCategories() {
  return (
    <div className='align-self-md-end align-self-sm-center mx-md-5 mt-2'>
        <Button variant="outline-warning" className=' d-flex justify-content-center px-4 w-auto '>
           <span className='mx-2'>Filtrer</span> 
            <BsFilter size={25} />
        </Button>
    </div>
  )
}

export default FilterCategories