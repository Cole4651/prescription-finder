import React from 'react';
import './loginpage.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';


const LoginPage = () => {
    
    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name" />
                </div>
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder='Email' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className='forgot-password'>Forgot Password?</div>
            <div className='login-extra'>Already Have an Account? Log In Here!</div>
            <div className='submit-container'>
                <div className={"submit"}>Sign Up</div>

            </div>
        </div>
    )
}

export default LoginPage