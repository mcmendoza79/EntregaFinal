import React from 'react';
import {Link} from "react-router-dom";
const Nav = (props) => {
  return (
       <nav>
         <div>
           <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Elcolegio">El Colegio</Link></li>
              <li><Link to="/Novedades">Novedades</Link></li>
              <li><Link to="/Contacto">Contacto</Link></li>
              <li><Link to="">Login</Link></li>
           </ul>
        </div>
        </nav>
      );
}
export default Nav;