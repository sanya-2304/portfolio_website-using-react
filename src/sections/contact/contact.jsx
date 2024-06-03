import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section id="contact" className="contact_container">
        <h1 className='conTitle'>Contact me!</h1>
        <form action="">
            <div className="formGroup">
                <label htmlFor="name" hidden>Name</label>
                <input type="text"  placeholder='Name' id='name' required/>
            </div>
            <div className="formGroup">
            <label htmlFor="email" hidden>Email:</label>
                <input type="text"  placeholder='Email' id='email'/>
            </div>
            <div className="formGroup">
            <textarea name="message"
            id="message"
            placeholder="Message"
            required></textarea>
            </div>
            <input type='submit' className='hover btn' value="Submit"/>
        </form>
    </section>
  )
}

export default Contact
