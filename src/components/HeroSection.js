import React ,{useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Navbar from './Navbar';
import {FaSearch } from 'react-icons/fa';

function HeroSection() {
  const [navBar, setnavBar] = useState(true);

  const showNavBar = () => {
    if (window.innerWidth <= 960) {
      setnavBar(false);
    } else {
      setnavBar(true);
    }
  };
  console.log("value",window.innerWidth)
  return (
    <div className='hero-container'>
        <div className='uni-title'>
              Département de Science Politiques
            
              </div>
        { (window.innerWidth >= 950)&& <Navbar/>}
    
      <FaSearch className="searchIcon" size={30} />
    </div>
  );
}

export default HeroSection;
