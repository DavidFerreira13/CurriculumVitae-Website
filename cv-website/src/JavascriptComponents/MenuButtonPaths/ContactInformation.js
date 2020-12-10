import React from 'react'

export default function ContactInformation(){

    const formStyle={
        "transition": "all 4s easeInOut",
    }
    const inputStyle={
        "backgroundColor": "transparent",
        "resize": "none",
        "width": "600px",
        "borderStyle": "none none solid none",
        "outline": "none",
        "color": "black",
        "font-size": "20px",
    }
    const submitStyle={
        "background": "#c94444",
        "border": "none",
        "color": "#fff",
        "fontSize": "20px",
        "letterSpacing": "2px",
        "height": "50px",
        "width": "200px",
        "marginTop": "20px"
    }
    return (
    <React.Fragment>
        <form action="" style={formStyle}>
            <input style={inputStyle} name="name" type="text" placeholder="Your Name" required />
            <br/>
            <input style={inputStyle} name="email" type="email" placeholder="Your email" required />
            <br/>
            <textarea style={inputStyle} name="message" placeholder="Your Message" rows="4" required />
            <br/>
            <button style={submitStyle} type="submit">Send Message</button>
        </form>
    </React.Fragment>)
}