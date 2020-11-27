import React from 'react'

export default function ContactInformation(){
    const style={
        "justifyContent": "center",
        "flex": "center",
        "marginLeft": "400px",
        "marginRight": "400px"
    }    
    const refStyle = {
        "color": "cyan",
        "textDecoration": "none"
    }
    return (
    <div style={style}>
        +351 917914724
       <br/>
        Mira, Portugal
       <br/>
        davidmferreira@hotmail.com
       <br/>
        <a  style={refStyle}
            href="https://github.com/DavidFerreira13"
            rel="noreferrer"
            target="_blank" > My Github </a>
            <br/>
        <a  style={refStyle}
            href="https://www.linkedin.com/in/dmrf"
            rel="noreferrer"
            target="_blank" > My Linkedin </a>

    </div>)
}