import React from 'react'
import './AboutMe.css'

export default function AboutMe(){
    const refStyle = {
        "color": "cyan",
        "textDecoration": "none"
    }
    return (
    <div className="AboutMe-div" >
        Hello, right now, I am looking for a position as a Junior Game Programmer | Junior Web Developer | Junior Full Stack Developer! 
        I have created an Instagram account to share my projects <a style={refStyle} href="https://www.instagram.com/pikachusprojects/?hl=pt" rel="noreferrer" target="_blank" > @here </a>
         and I also have an Artstation page <a style={refStyle} href="https://www.artstation.com/davidmiguel" rel="noreferrer" target="_blank" > @here </a>.
    </div>)
}