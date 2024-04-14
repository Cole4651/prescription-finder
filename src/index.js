import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLogin from './AppLogin.js';
import reportWebVitals from './reportWebVitals';

import { AuthProvider, withAuthInfo } from "@propelauth/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthProvider authUrl={process.env.REACT_APP_AUTH_URL}>
		<React.StrictMode>
			<AppLogin />
		</React.StrictMode>
	</AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
