import React, { useState} from 'react'
import './Navbar.css'
import {GiSydneyOperaHouse} from 'react-icons/gi'
import {GiFamilyHouse} from 'react-icons/gi'
import {AiOutlineMenuFold} from 'react-icons/ai'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {TbUserCircle} from 'react-icons/tb'

const Navbar = () => {

  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><GiFamilyHouse />Vancouver</span>Cabins</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            <button className='btn'>Log-in</button>
            <div className='bar' onClick={handleClick}>
                {click ? (<AiOutlineMenuUnfold className="closing-mobile-nav" />) : (<AiOutlineMenuFold className="mobile-nav" />)}
            </div>
        </div>
    </div>
  )
}

export default Navbar