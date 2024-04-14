
import { withAuthInfo, useHostedPageUrls, useLogoutFunction } from '@propelauth/react';

import CalendarApp from 'components/Calendar/CalendarApp.js';
import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import "./BackApp.css";
import { FaHome, FaInfoCircle, FaBook, FaUser } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";

const BackApp = withAuthInfo((props) => {
	const { getLoginPageUrl, getSignupPageUrl, getAccountPageUrl } = useHostedPageUrls();
    const logoutFunction = useLogoutFunction();
    
    return (
        <Router>
            <Navbar className="navbar-bg" expand="lg">
                <Navbar.Brand>
                    <h1 className="navbar-brand-text">
                        <Nav.Link to="/" className="brand-link">
                            MedPlanner
                        </Nav.Link>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={ getAccountPageUrl() } className="nav-link">
                            <FaBook /> Account
                        </Nav.Link>
                        <Navbar.Text>
                            Signed in as: {props.user.email}
                        </Navbar.Text>
                        <Nav.Link as={Link} onClick={ logoutFunction } className="nav-link">
                            <FaUser /> Log Out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Outlet />}>
                            <Route index element={<CalendarApp />} />
                        </Route>
                    </Routes>
                </div>
        </Router>
    );

})


export default BackApp;
