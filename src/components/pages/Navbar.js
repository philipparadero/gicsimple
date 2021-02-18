import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../gic-site-logo.png'

function Navbar() {

    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);


    const closeMobileMenu = () => {
        setClick(false);
    }

    const handleClick = () => {
        setClick(!click)
    }
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo"><img src={logo} alt="logo"/></Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/about-us' className="nav-links" onClick={closeMobileMenu}>About Us</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/features' className="nav-links" onClick={closeMobileMenu}>Features</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/redeem' className="nav-links" onClick={closeMobileMenu}>Redeem</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/howwework' className="nav-links" onClick={closeMobileMenu}>How We Work</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className="nav-links" onClick={closeMobileMenu}>Blog</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/faq' className="nav-links" onClick={closeMobileMenu}>FAQ</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>Login</Link> 
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
