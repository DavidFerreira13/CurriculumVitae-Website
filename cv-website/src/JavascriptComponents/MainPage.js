import React from 'react'
import '../Css/FireBlaze.css'
import '../Css/MontserratEffect.css';

const MainPage = () => (
    <div>
        <div className="dark fire">
            <div className='Blazing'>Hello, my name is</div>
        </div>

        {/* Classroom Course*/}
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

        <div style={{textAlign: "center"}}>This website doesn't support mobile yet, so make sure to be on a computer to have the full experience!</div>        
    </div>
);

export default MainPage;