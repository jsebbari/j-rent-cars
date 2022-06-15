import "../styles/FilterCategories.css"
import {Dropdown} from'react-bootstrap'
import {GoSettings} from "react-icons/go";

function FilterCategories(props) {
    const {displayedData, filterData, setFilterData} = props

    const mapDatas = filterData.length === 0 ? displayedData : filterData;

function descendingOrder() {

    const descendingListFilter= [...mapDatas].sort((a, b) => {
        return b.price - a.price;
    });

    setFilterData(descendingListFilter)
   
}

function ascendingOrder() {
    const ascendingListFilter= [...mapDatas].sort((a, b) => {
        return a.price - b.price;
    });

   
    setFilterData(ascendingListFilter)
}


const removeFilters = filterData.length !== 0 && <Dropdown.Item onClick={()=>setFilterData([])} className="text-danger" >Effacer filtres</Dropdown.Item>
  return (


<Dropdown className='align-self-md-start align-self-sm-center mx-md-5 mt-2'>
        <Dropdown.Toggle  variant="outline-warning" id="dropdown-basic" className=' d-flex justify-content-center px-4 w-auto' >
            <span className='mx-2'>Filtrer</span> 
            <GoSettings size={25} />
</Dropdown.Toggle>

        <Dropdown.Menu  align="start">
            <Dropdown.Item onClick={ascendingOrder} >Du moins cher au plus cher</Dropdown.Item>
            <Dropdown.Item onClick={descendingOrder} >Du plus cher au moins cher</Dropdown.Item>
           {removeFilters}
        </Dropdown.Menu>
</Dropdown>

    
  )
}

export default FilterCategories