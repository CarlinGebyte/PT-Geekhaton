import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <header>
      <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
                <Link to="/order">Orden</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
