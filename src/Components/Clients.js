import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import '../Styles/Clients.css'

class Clients extends Component {
    render() {
        return (
            <div id='clients' className="Clients">
                <h1 className="Clients-header">OUR CLIENTS</h1>
                <div className='Clients-list'>
                    <ul className='Clients-list-ul'>
                        <li className='Clients-list-li'><a href='https://voitekk.com/' target='_blank' rel='noopener noreferrer'>VOITEKK</a></li>
                        <li className='Clients-list-li'><a href='http://www.live-digital.in/' target='_blank' rel='noopener noreferrer'>LIVE DIGITAL</a></li>
                        <li className='Clients-list-li'><a href='https://www.paddlepoint.in/' target='_blank' rel='noopener noreferrer'>PADDELPOINT</a></li>
                        <li className='Clients-list-li'>TELEPERFORMANCE</li>
                        <li className='Clients-list-li'><a href='http://www.platinumone.in/' target='_blank' rel='noopener noreferrer'>PLATINUM ONE</a></li>
                        <li className='Clients-list-li'><a href='https://www.icanbpo.com/' target='_blank' rel='noopener noreferrer'>ICAN</a></li>
                        <li className='Clients-list-li'>ALTRUS</li>
                        <li className='Clients-list-li'><a href='https://reliablebss.com/' target='_blank' rel='noopener noreferrer'>RBSS</a></li>
                        <li className='Clients-list-li'>PACESETTER</li>
                        <li className='Clients-list-li'>EUREKA</li>
                    </ul>
                </div>
                <ListGroup className="Clients-listgroup">
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg' alt="companies" src='assets/svg/companies.svg' /> COLLABORATION WITH 20+ COMPANIES</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg' alt='corporates' src='assets/svg/corporates.svg' /> COLLABORATION WITH 8+ CORPORATES</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg' alt='training courses' src='assets/svg/teaching.svg' /> COLLABORATION WITH 10+ TRAINING COURSES</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg' alt='freelancers' src='assets/svg/freelancers.svg'/> COLLABORATION WITH 25+ FREELANCING HR EXECUTIVES</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
export default Clients