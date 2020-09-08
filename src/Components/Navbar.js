import React, { Component } from 'react'
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
                        <li><a href='/#root'>Home</a></li>
                        <li><a href='/#about'>About</a></li>
                        <li><a href='/#clients'>Clients</a></li>
                        <li><a href='/#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar