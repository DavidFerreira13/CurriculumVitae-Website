import React from 'react'
import './ContactMe.css'

export default function ContactMe(){
    return (
    <React.Fragment>
        <form action="mailto:davidmrferreira@hotmail.com" method="post" encType="text/plain" className="formStyle">
            <input className="inputStyle" name="name" type="text" placeholder="Your Name" required />
            <br/>
            <textarea className="inputStyle" name="message" placeholder="Your Message" rows="4" required />
            <br/>
            <input type="submit" value="Send" className="submitStyle"/>
        </form>
    </React.Fragment>)
}