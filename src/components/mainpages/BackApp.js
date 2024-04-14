
import { withAuthInfo, useHostedPageUrls, useLogoutFunction } from '@propelauth/react';
import "bootstrap/dist/css/bootstrap.min.css";
import CalendarApp from 'components/Calendar/CalendarApp.js';
import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import "./BackApp.css";
import { FaBook, FaUser } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";

const BackApp = withAuthInfo((props) => {
	const { getAccountPageUrl } = useHostedPageUrls();
    const logoutFunction = useLogoutFunction();
    
    return (
        <Router>
            <Navbar className="navbar-bg" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <h1 className="navbar-brand-text">
                            <Nav.Link to="/" className="brand-link">
                                MedPlanner
                            </Nav.Link>
                        </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                            <Navbar.Text>
                                Signed in as: {props.user.email}
                            </Navbar.Text>
                            <Nav.Link as={Link} to={ getAccountPageUrl() } className="nav-link">
                                <FaBook /> Account
                            </Nav.Link>
                            <Nav.Link as={Link} onClick={ logoutFunction } className="nav-link">
                                <FaUser /> Log Out
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
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
