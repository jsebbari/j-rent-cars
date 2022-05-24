import { useState} from "react";
import {Link,NavLink} from 'react-router-dom'
import "../styles/Navigation.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignCenter,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mouseHoverIcon, setMouseHoverIcon] = useState(false);

  const handleShowNav = () => {
    setShowNavbar(!showNavbar);
  };

  const hoverIconHandler = () => {
    setMouseHoverIcon(true);
  };

  const mouseOutIcon = () => {
    setMouseHoverIcon(false);
  };

  const showNav = !showNavbar ? "hide-nav" : "show-nav";
  const hideNavIcon = showNavbar && "hide-logo";

  const navIcon = (
    <FontAwesomeIcon
      size="2xl"
      icon={faBars}
      color="#F6F6F6"
      className={`icon-nav ${hideNavIcon}`}
      onClick={handleShowNav}
      onMouseEnter={hoverIconHandler}
    />
  );
  const navIconHover = (
    <FontAwesomeIcon
      size="2xl"
      icon={faAlignCenter}
      color="#F6F6F6"
      className={`icon-nav ${hideNavIcon}`}
      onClick={handleShowNav}
      onMouseLeave={mouseOutIcon}
    />
  );
  return (
    <div className="Navigation">
      {!mouseHoverIcon ? navIcon : navIconHover}


      <nav className={showNav} onClick={handleShowNav}>
        {showNavbar && (
          <FontAwesomeIcon
            size="2xl"
            icon={faClose}
            color="#F6F6F6"
            className="icon-nav close-icon-nav"
            onClick={handleShowNav}
          />
        )}

       
              <NavLink activeclassname="active"  className ="nav-item" to="/" >Accueil</NavLink>
             <NavLink activeclassname="active" className="nav-item" to="/vehicules">Nos véhicules</NavLink>
             <NavLink activeclassname="active" className="nav-item" to="/contact">Contact</NavLink>
          </nav>
    </div>
  );
};

export default Navigation;