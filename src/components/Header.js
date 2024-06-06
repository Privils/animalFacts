import React from 'react';
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
   <>
   <header>
    <nav>
        <a href="/animalLover" className='logo'>AnimalZone</a>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
        <FaBars />
          </label>
        <ul>
            
        </ul>
    </nav>
   </header>
   </>
  )
}

export default Header;
