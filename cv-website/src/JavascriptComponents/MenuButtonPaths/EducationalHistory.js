import React from 'react'

import '../../Css/EducationalHistory.css';

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
        <div className="year">2016-2019</div>
        <div className="dark fire">
            <h1 class="Blazing">Bachelor Degree</h1>
        </div>
        <div className="sign">
            <span className="fast-flicker">D</span><span>igit</span><span className="flicker">a</span><span className="fast-flicker1">l G</span><span>ame Des<span className="flicker">i</span>gn</span>
        </div>
        <br/>
        <h1>TRAININGS</h1>
 	        <h3>Classroom Course</h3>
             <div className="year">2020</div>
             <h5>Academia de Código</h5>

        <h1>Online Course</h1>
            <div className="year">2020</div>
            <h5>Frontend Fundamentals</h5>
            <h5>Complete Python 3 Course: Beginner to Advanced</h5>
            <h5>Angular – The Complete Guide</h5>
            <h5>React – The Complete Guide</h5>
            <h5>Complete C# Unity Game Developer 2D</h5>
            <h5>Unreal Engine C++ Developer</h5>

    </div>)
}