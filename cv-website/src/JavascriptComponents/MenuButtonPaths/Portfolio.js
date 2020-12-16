import React from 'react'
import './Portfolio.css'


export default function Portfolio(){
    const style={
        "textAlign": "center",
        "flex": "center",
        "marginLeft": "400px",
        "marginRight": "400px"
    }
    return (
    <div style={style}>
        <div><a href="https://www.instagram.com/p/CHO0JtnF7ki/" >Laser Shooter</a></div>

        <div><a href="https://www.instagram.com/p/CHiSrERl1in/" >Dorothy’s Trip</a></div>

        <div><a href="https://www.instagram.com/p/CHOxB-bFaoG/" >Grand Theft Felinux</a></div>

        <div><a href="https://www.instagram.com/p/CHOzo0hF5-d/" >Mega Tic Tac Toe</a></div>

        <div><a href="https://www.instagram.com/p/CHOuumSFSdl/" >Launchpad Of Shapes</a></div>

        <div><a href="https://www.instagram.com/p/CHOwGaIFtVf/" >Pointless</a></div>

    </div>)
}