import React from 'react';
import "./pages.css";
import randumb from "./IMG_6463.JPG"

function Homepage () {
    return (
        <div className="body">
            <h1 className='head'>MedPlanner</h1>
            <div className="page">
                <h2>Home Page</h2>
                <p>Welcome to the Home Page.</p>
                <div className="page">
                    <p>"MedPlanner" is a user-friendly prescription finder application designed to simplify the process of locating and obtaining prescribed medications by organizing scheduling. Whether you're a patient searching for a specific medication, a healthcare provider looking to streamline prescription management, or a caregiver assisting others with their healthcare needs, "MedPlanner" is here to help make this process less annoying than it needs to be.</p>
                </div>
                <div className="fleximg">
                    <img className="promopic" src={randumb} alt="randumb" />
                    <img className="promopic" src={randumb} alt="randumb" />            
                </div>
                <div className="splitcontainer">
                    <p class="splitpage">A problem that we decided to try and solve at HackKU 2024 was how annoying taking and ordering prescriptions can be. We decided to build a socially good app that would help with this problem. </p>
                    <p class="splitpage">Our solution to this problem is to build a website that... Our website features secure user databases and ...</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;