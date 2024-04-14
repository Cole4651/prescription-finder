
// const { getLoginPageUrl, getSignupPageUrl, getAccountPageUrl } = useHostedPageUrls();
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react';
import CalendarApp from 'components/Calendar/CalendarApp.js';
import React from "react";
import { Navbar, Nav, Link } from "react-bootstrap";
import "./BackApp.css";
import { FaHome, FaInfoCircle, FaBook, FaUser } from "react-icons/fa";



const BackApp = withAuthInfo((props) => {
    const redirectToAccountPage = useRedirectFunctions()
    const logoutFunction = useLogoutFunction()
    
    return (
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
                        <Nav.Link as={Link} to={ redirectToAccountPage } className="nav-link">
                            <FaBook /> Account
                        </Nav.Link>
                        <Navbar.Text>
                            Signed in as: {props.user.email}
                        </Navbar.Text>
                        <Nav.Link as={Link} to={ logoutFunction } className="nav-link">
                            <FaUser /> Log Out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );

})


export default BackApp;