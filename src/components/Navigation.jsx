import { useState} from "react";
import "../styles/Navigation.css";
import {NavLink} from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler';
import { Squash as Hamburger } from 'hamburger-react'







const Navigation = () => {

// ______________ states _____________ 

  const [showNavbar, setShowNavbar] = useState(false);

// ______________ functions _____________ 

  const handleShowNav = () => {
    setShowNavbar(!showNavbar);
  };

  const showNav = !showNavbar ? "hide-nav" : "show-nav";


  return (

  

    <OutsideClickHandler
      onOutsideClick={() => {
      showNavbar&&setShowNavbar(false);
    }}
  >
      
      <div className="Navigation" >

        <Hamburger toggled={showNavbar} toggle={setShowNavbar} hideOutline={false} color="white"/>
        <nav className={showNav} onClick={handleShowNav}>
            <NavLink activeclassname="active"  className ="nav-item" to="/" >Accueil</NavLink>
            <NavLink activeclassname="active" className="nav-item" to="/vehicules">Nos véhicules</NavLink>
            {/* <NavLink activeclassname="active" className="nav-item" to="/contact">Contact</NavLink> */}
            <NavLink activeclassname="active" className="nav-item" to="/connexion">Connexion</NavLink>
        </nav>

      </div>

    </OutsideClickHandler>
  );
};

export default Navigation;
