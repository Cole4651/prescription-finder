import App from 'App.js';
import BackApp from 'components/mainpages/BackApp.js';
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'
import CalendarApp from 'components/Calendar/CalendarApp.js';

const AppLogin = withAuthInfo((props) => {
    if (props.isLoggedIn) {
        return (
            <div>
                <BackApp />
                <CalendarApp />
            </div>
        )
    } else {
        return (
            <App />
        )
    }
})

export default AppLogin

