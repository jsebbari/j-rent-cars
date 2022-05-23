import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <>
         <nav>
             <NavLink activeclassname="active"  className ="link" to="/" >Accueil</NavLink>
             <NavLink activeclassname="active" className="link" to="/vehicules">Nos véhicules</NavLink>
             <NavLink activeclassname="active" className="link" to="/contact">Contact</NavLink>
         </nav>
         
        </>

        
    )
}

export default Navbar
