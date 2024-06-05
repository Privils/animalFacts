import React from 'react';

const Header = () => {
  return (
   <>
   <header>
    <nav>
        <a href="#" className='logo'>AnimalZone</a>
        <ul>
            <li>
                <a href="/">Home</a> 
            </li>
            <li>
                <a href="#cats">cats</a>
            </li>
            <li>
                <a href="#dogs">dogs</a>
            </li>
            <li>
                <a href="#foxes">foxes</a>
            </li>
            <li>
                <a href="#ducks">ducks</a>
            </li>
        </ul>
    </nav>
   </header>
   </>
  )
}

export default Header;
