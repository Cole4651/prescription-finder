import React from 'react';
import './pages.css';
import randumb from './IMG_6463.JPG';

function Contactpage() {
    return (
        <div className='body'>
            <h1 className='head'>Contact Us</h1>
            <div className="page">
                <h2>Contact Us</h2>
                <p>Welcome to the Contact Us page</p>
                <div className="page">
                    <p>People who helped make this website: Samuel Waller, Nick Thompson, and Cole Nola </p><br />
                    <p>Chaperons: Jill Riffer and Joe Whalen</p>
                </div>
                <div className="fleximg">
                    <img className="promopic" src={randumb} alt="randumb" />
                    <img className="promopic" src={randumb} alt="randumb" />
                </div>
                <div className="splitcontainer">
                    <p className="splitpage">
                        Nick Thompson: <a href="mailto:nick@example.com">nick@example.com</a><br />
                        Samuel Waller: <a href="mailto:samuel@example.com">samuel@example.com</a><br />
                        Cole Nola: <a href="mailto:cole@example.com">cole@example.com</a><br />
                        Jill Riffer: <a href="mailto:msriffer@example.com">msriffer@example.com</a><br />
                    </p>
                    <p className="splitpage">
                        Nick Thompson: <a href="tel:1234567890">123-456-7890</a><br />
                        Samuel Waller: <a href="tel:2345678901">234-567-8901</a><br />
                        Cole Nola: <a href="tel:3456789012">345-678-9012</a><br />
                        Jill Riffer: <a href="tel:4567890123">456-789-0123</a><br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contactpage;
