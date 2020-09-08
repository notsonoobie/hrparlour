import React, { Component } from 'react'
import '../Styles/Card.css'

class Card extends Component {
    render() {
        return (
            <div id='about' className="Card">
                <div className="Card-desc">
                    <h1 className="Card-desc-header">
                        SERVICES
                    </h1>
                    <p className="Card-desc-info">
                        At <span className="hrparlour">HR Parlour</span>, along with identifying and hiring appropriate staff for our clients, we also provide HR consultants from Recruitment to Retirement which includes organization structuring, designing ideal selection process, HR Policy making and implementing, making Compensation &amp; Benefit Plan, Performance Management System, HR Audit, Payroll Administartion &amp; Exit Process.
                    </p>
                </div>
                <div className="actualCard">
                    <div className="actualCard-card">
                        <div className="card-logo">
                            <img className="svg-icn" style={{height: '5rem', width: '5rem'}} alt="Fastest Growing Recruitment" src="assets/svg/histogram.svg" />
                        </div>
                        <h1 className="card-title">Fastest Growing Recruitment</h1>
                        <p className="card-desc">We at HR Parlour provide expert opinions, analysis and recommendations based on our expertise. We are not going beyond just.</p>
                    </div>
                    <div className="actualCard-card">
                        <div className="card-logo">
                            <img className="svg-icn" style={{height: '5rem', width: '5rem'}} alt="Fastest Growing Recruitment" src="assets/svg/user.svg" />
                        </div>
                        <h1 className="card-title">Organization &amp; Decisions</h1>
                        <p className="card-desc">Our organization are designed to be effective &amp; efficient. Collaborative decision boards &amp; tailored decision processes.</p>
                    </div>
                    <div className="actualCard-card">
                        <div className="card-logo">
                            <img className="svg-icn" style={{height: '5rem', width: '5rem'}} alt="Fastest Growing Recruitment" src="assets/svg/hr.svg" />
                        </div>
                        <h1 className="card-title">Experienced HR Team</h1>
                        <p className="card-desc">Responsible for Recruiting, Screening, Interviewing and placing candidates. Managers plan and coordinate the administrative functions of an organization.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card
