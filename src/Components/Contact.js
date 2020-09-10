import React, { Component } from 'react'
import '../Styles/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='Contact'>
                <form action='/' method='POST' data-netlify='true' className='Contact-form'>
                    <label className='Contact-form__label' for='firstname'>FIRST NAME</label>
                    <input  autoComplete='off' type='text' id='firstname' name='firstname' className='Contact-form__input' required />
                    <label className='Contact-form__label' for='lastname'>LAST NAME</label>
                    <input autoComplete='off' type='text' id='lastname' name='lastname' className='Contact-form__input' required />
                    <label className='Contact-form__label' for='email'>E-MAIL</label>
                    <input autoComplete='off' type='email' id='email' name='email' className='Contact-form__input' required />
                    <label className='Contact-form__label' for='contact'>CONTACT</label>
                    <input autoComplete='off' type='text' id='contact' name='contact' className='Contact-form__input' required />
                    <button type='submit' className='Contact-form__submit'>SUBMIT</button>
                </form>
            </div>
        )
    }
}
export default Contact