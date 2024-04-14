import React from 'react';
import "./pages.css";
import Button from 'react-bootstrap/Button';
import { useRedirectFunctions } from '@propelauth/react';


function Homepage () {
    const { redirectToLoginPage, redirectToSignupPage } = useRedirectFunctions();
    return (
        <div className="body">
            <h1 className='head'>MedTrack</h1>
                <div className="page">
                    <p>"MedTrack" is a user-friendly prescription finder application designed to simplify the process obtaining prescribed medications by organizing scheduling. Whether you're a patient searching for a specific medication, a healthcare provider looking to streamline prescription management, or a caregiver assisting others with their healthcare needs, "MedTrack" is here to help make this process le than it needs to be. A problem that we decided to try and solve at HackKU 2024 was how annoying taking and ordering prescriptions can be. We decided to build a socially good app that would help with this problem. Our solution to this problem is to build a website that streamlines the process of planning by appropriately spacing reminders to notify you when it's time for a refill</p>
                </div>
                <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={redirectToSignupPage}>
                    Sign Up
                </Button>
                <Button variant="secondary" size="lg" onClick={redirectToLoginPage}>
                    Log In
                </Button>
            </div>
        </div>
    )
}

export default Homepage;
