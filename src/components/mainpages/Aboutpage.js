import React from 'react';
import './pages.css';
import randumb from './IMG_6463.JPG'

function Aboutpage () {
    return (
        <div className='body'>
            <h1 className='head'>About Us</h1>
            <div className="page">
                <h2>About page</h2>
                <p>Welcome to the About Page</p>
            <div className="page">
                <p>We are with the Center for Advanced Proffesional Studies also known as Blue Valley CAPS. This webapp is a project we made for our community outreach. </p>
            </div>
            <div className="fleximg">
                <img className="promopic" src={randumb} alt="randumb" />
                <img className="promopic" src={randumb} alt="randumb" />            
            </div>
            <div className="splitcontainer">
            <p class="splitpage">CAPS is a nationally recognized, innovative high school program. Students fast forward into their future and are fully immersed in a professional culture, solving real world problems, using industry standard tools and are mentored by actual employers, all while receiving high school and college credit. CAPS is an example of how business, community and public education can partner to produce personalized learning experiences that educate the workforce of tomorrow, especially in high skill, high demand jobs.</p>
                <p class="splitpage">Nick, Samuel, and Cole. Ms. Riffer is our technology solutions teacher who helped organize us attending HackKU.</p>
            </div>
            </div>
        </div>
    )
}

export default Aboutpage;