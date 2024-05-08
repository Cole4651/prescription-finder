import App from 'App.js';
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'
import CalendarApp from 'components/Calendar/CalendarApp';
const AppLogin = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()
    // Or if you want to make links instead
    // const { getLoginPageUrl, getSignupPageUrl, getAccountPageUrl } = useHostedPageUrls()

    if (props.isLoggedIn) {
        return (
            <div>
                <CalendarApp />
            </div>
        )
    } else {
        return (
            /* <div>
                <p>You are not logged in</p>
                <button onClick={() => redirectToLoginPage()}>Login</button>
                <button onClick={() => redirectToSignupPage()}>Signup</button>
            </div> */
            <App />
        )
    }
})

export default AppLogin

