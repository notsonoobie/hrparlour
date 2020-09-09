import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "../Styles/Carouseldisplay.css"

class Carouseldisplay extends Component {
    render() {
        return (
            <div id='home' className="Carouseldisplay">
                <div className='container-fluid' >  
                    <Carousel indicators={false}>
                        <Carousel.Item className="Carouseldisplay-item" style={{'height':"85vh"}}>
                            <img style={{'height':"100%", 'filter':"brightness(15%)"}} alt="Carousel Display" className="d-block w-100" src='assets/img/1.jpg' />
                            <Carousel.Caption>
                                <h3 className='carousel-header'>PLACEMENT SERVICES</h3>
                                <p className='carousel-info'>At <span className="hrparlour">HRPARLOUR</span> we are comitted to helping candidates to achieve their career goals.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="Carouseldisplay-item" style={{'height':"85vh"}}>
                            <img style={{'height':"100%", 'filter':"brightness(15%)"}} alt="Carousel Display" className="d-block w-100" src={'assets/img/2.jpg'} />
                            <Carousel.Caption>    
                                <h3 className='carousel-header'>KEEP IN TOUCH &amp; STAY UPDATED</h3>
                                <p className='carousel-info'>We know that Recruitment is a costly and time consuming process. So we focus on ensuring our candidates with high quality permenant career objectives quickly and efficiently.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="Carouseldisplay-item" style={{'height':"85vh"}}>
                            <img style={{'height':"100%", 'filter':"brightness(15%)"}} alt="Carousel Display" className="d-block w-100" src={'assets/img/3.jpg'} />
                            <Carousel.Caption>    
                                <h3 className='carousel-header'>OUR APPROACH</h3>
                                <p className='carousel-info'>Our consultancy in not just limited to hiring staff, it goes much deeper. At <span className="hrparlour">HRPARLOUR</span> we believe, the success of consultancy firm depends on it's core values and excellent competence of it's Human Resources. So, we aim to provide a solution to hire right talent.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>  
            </div>
        )
    }
}
export default Carouseldisplay
