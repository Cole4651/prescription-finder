
// const { getLoginPageUrl, getSignupPageUrl, getAccountPageUrl } = useHostedPageUrls();
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react';


const FrontPage = function () {
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions();
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
                <button onClick={() => redirectToSignupPage()}>Sign up</button>
                
            </div>
        </div>
        )
}


export default FrontPage;