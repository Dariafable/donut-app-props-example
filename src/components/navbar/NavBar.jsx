import React, { useState } from 'react'
import './NavBarStyles.css'
import {GiDonut} from 'react-icons/gi'
import {CgMenuRight, CgClose} from 'react-icons/cg'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);

  return (
    <div className='navbar'>
        <div className='container'>
             <div><GiDonut size={40} style={{marginLeft: '4px'}} /></div>
             <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li>Home</li>
                <li>Menu</li>
                <li>Order</li>
                <li>Delivery</li>
             </ul>
             <div className='hamburger' onClick={handleNav}>{nav ? (<CgClose size={25} style={{color: '#fff'}}/>) : <CgMenuRight size={25}/>}</div>
        </div>
    </div>
  )
}

export default NavBar
