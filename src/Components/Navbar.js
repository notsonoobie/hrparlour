import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import '../Styles/Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">    
                <div className="navbar-logo">   
                    <a href='/'><img alt="Hr Parlour Logo" src='assets/img/logo.png' /></a>
                </div>
                <div className="navbar-list">
                    <ul>
                        <li><Link to='home' spy={true} hashSpy={true} smooth={true} offset={-70} duration={600}>Home</Link></li>
                        <li><Link to='about' spy={true} hashSpy={true} smooth={true} offset={-70} duration={600}>About</Link></li>
                        <li><Link to='clients' spy={true} hashSpy={true} smooth={true} offset={-70} duration={600}>Clients</Link></li>
                        <li><Link to='contact' spy={true} hashSpy={true} smooth={true} offset={-70} duration={600}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar