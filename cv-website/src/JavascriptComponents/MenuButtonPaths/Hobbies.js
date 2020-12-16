import React from 'react'
import MatrixGif from '../../Images/Gifs/MatrixCode.gif';
import GamerGif from '../../Images/Gifs/gamer.gif';
import GoOutGif from '../../Images/Gifs/goOut.gif';
import StudyGif from '../../Images/Gifs/study.gif';

export default function Hobbies(){
    const style={
        "justifyContent": "center",
        "textAlign": "center",
        "flex": "center",
        "marginTop": 100,
        "marginBottom": 100,
        "marginLeft": 60
    }
    return (
    <div style={style}>
        <h1>Code</h1>
        <img src={MatrixGif} alt="Matrix" title="Code" width="80%" height="auto" />   
        <h1>Study</h1>        
        <img src={StudyGif} alt="Study" title="Study" width="80%" height="auto" />
        <h1>Play Games</h1>        
        <img src={GamerGif} alt="Play Games" title="Play Games" width="80%" height="auto" />
        <h1>Going out with friends</h1>        
        <img src={GoOutGif} alt="Going Out" title="Going Out" width="80%" height="auto" />

    </div>)
}