import React from "react";
import { Link } from "react-router-dom";
import { NavbarStyle } from "../styles/styledComp/navbarStyle";

function NavigationBar() {
  return (
    <header>
      <NavbarStyle>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/order">Orden</Link>
          </li>
        </ul>
      </NavbarStyle>
    </header>
  );
}

export default NavigationBar;
