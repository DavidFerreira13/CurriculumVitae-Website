import React from 'react'

import '../../Css/EducationalHistory.css';
import '../../Css/NeonLight.css'

export default function EducationalHistory(){
    const style={
        "justifyContent": "center",
        "flex": "center",
        "marginLeft": "400px",
        "marginRight": "400px",
        "marginTop": "100px",
        "marginBottom": "100px"
    }
    return (
    <div style={style}>
        <h1>EDUCATION</h1>
        <div className="year" >2016-2019</div>
        <h5>Bachelor Degree in Digital Game Design</h5>
        <hr/>
        <h1>TRAININGS</h1>
             <div className="year">2020 - Classroom Course</div>
             <h5>Academia de Código</h5>

             <hr/>
        <h1>Online Course</h1>
            <div className="year">2020 - Online Course</div>
            <h5>Frontend Fundamentals</h5>
            <h5>Complete Python 3 Course: Beginner to Advanced</h5>
            <h5>Angular – The Complete Guide</h5>
            <h5>React – The Complete Guide</h5>
            <h5>Complete C# Unity Game Developer 2D</h5>
            <h5>Unreal Engine C++ Developer</h5>

    </div>)
}