import React from 'react';


const Loginpage = (props) => {
    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input 
                    value={''}
                    placeholder='name@example.com'
                    onChange={''}
                    className={'inputBox'}
                />
                <label className="errorLabel">{''}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input 
                    value={''}
                    placeholder='password'
                    onChange={''}
                    className={'inputBox'}
                />
                <label className="errorLabel">{''}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type='button' onClick={''} value={'Log in'} />
            </div>
        </div>
    )
}

export default Loginpage;