import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
       
      
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item '>
              <Link to='/education' className='nav-links ' onClick={closeMobileMenu}>
              Éducation
              <div className="line"/>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/research'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rechercher
                <div className="line"/>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/collaboration'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Collaboration
              </Link>
           </li>

           
          </ul>
       
        </div>
         
      </nav>
    </>
  );
}

export default Navbar;
