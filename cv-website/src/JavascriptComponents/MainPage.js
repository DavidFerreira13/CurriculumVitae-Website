import React from 'react'
import '../Css/MontserratEffect.css';
import '../Css/Greeting.css';

const MainPage = () => (
    <div style={{marginLeft: '50px'}}>
            <div className="greet">Hello, I am</div>
            
        <svg viewBox="0 0 960 100">
            <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="80%">David Ferreira</text>
            </symbol>

            <g class = "g-ants">
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
            </g>
        </svg>

        <div className="welcome">Welcome to my WEBSITE!</div>        
    </div>
);

export default MainPage;