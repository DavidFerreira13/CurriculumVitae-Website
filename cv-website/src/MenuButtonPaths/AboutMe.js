import React from 'react'

export default function AboutMe(){
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
        Right now, I am looking for a position as a Junior Full Stack Developer || Web Developer || Junior Game Programmer,
        in any language, in order to continue to grow and improve on my skill.
        While developing, I try to get the most out of OOP, I follow design patterns and principles and try to make my code as readable as possible.
        I have created an Instagram account to share my projects <a style={refStyle} href="https://www.instagram.com/pikachusprojects/?hl=pt" rel="noreferrer" target="_blank" > @here </a>.
    </div>)
}