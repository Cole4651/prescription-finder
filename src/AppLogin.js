import App from 'App.js';
import BackApp from 'components/mainpages/BackApp.js';
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'
const AppLogin = withAuthInfo((props) => {
    if (props.isLoggedIn) {
        return (
                <BackApp />
        )
    } else {
        return (
            <App />
        )
    }
})

export default AppLogin

