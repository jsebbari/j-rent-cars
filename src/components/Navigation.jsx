import { useState, useContext, useEffect} from "react";
import "../styles/Navigation.css";
import {NavLink} from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler';
import { Squash as Hamburger } from 'hamburger-react'
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";



const Navigation = () => {

//states _______________________________________________
  const [showNavbar, setShowNavbar] = useState(false);


//useContext____________________________________________
  const {currentUser} =useContext(AuthContext)


//functions ____________________________________________

const userLogo =  <FaRegUserCircle size={25}style={{marginRight:'.5rem'}} className="user-connect-icon"/>
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
        <NavLink activeclassname="active"  className ="connect-user-link" to="/connexion">
          {userLogo} 
          <span className="connect-user-text">{currentUser?currentUser.displayName: "Se connecter | S'inscrire"}</span> 
        </NavLink>
        
        <nav className={showNav} onClick={handleShowNav}>
            <NavLink activeclassname="active"  className ="nav-item" to="/" >Accueil</NavLink>
            <NavLink activeclassname="active" className="nav-item" to="/vehicules">Nos véhicules</NavLink>
            <NavLink activeclassname="active" className="nav-item" to="/mon-compte">Mon compte</NavLink>
        </nav>
        
      </div>

    </OutsideClickHandler>
  );
};

export default Navigation;
