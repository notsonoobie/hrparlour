import React, { Component } from 'react'
import '../Styles/Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className='Footer'>
                <div className='Footer-span'>
                </div>
                <div className='Footer-content'>
                    <section>
                        <h5 className='Footer-content-logo'>HRPARLOUR</h5>
                        <p className='Footer-content-info'>An HR Consultancy Firm &copy; 2020 HRPARLOUR</p>
                        <span className="Footer-quotation">
                            DESIGNED DEVELOPED &amp; MAINTAINED BY <a className='Footer-quotation-link' href='http://showcasingmyself.netlify.com'>RAHUL GUPTA</a>
                        </span>
                        </section>
                    <div className='Footer-verticalline'>
                    </div>
                    <div className='Footer-contact'>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='tel:+919967574687'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Telephone' src='assets/svg/phone.svg' /></a> <a href='tel:+919967574687'>+91-99675-74687</a></span>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='tel:+918850276408'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Telephone' src='assets/svg/phone.svg' /></a> <a href='tel:+918850276408'>+91-88502-76408</a></span>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='mailto:contact@hrparlour.com'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Mail' src='assets/svg/mail.svg' /></a> <a href='mailto:contact@hrparlour.com'>contact@hrparlour.com</a></span>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer