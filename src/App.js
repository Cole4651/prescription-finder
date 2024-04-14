import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import { FaHome, FaInfoCircle, FaBook, FaUser } from "react-icons/fa";
import { withAuthInfo, useHostedPageUrls, useLogoutFunction } from '@propelauth/react'


function App() {
    const { getLoginPageUrl, getAccountPageUrl } = useHostedPageUrls();
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
                        <Nav.Link as={Link} to={ getLoginPageUrl() } className="nav-link">
                            <FaBook /> Log In
                        </Nav.Link>
                        <Nav.Link as={Link} to={ getAccountPageUrl() } className="nav-link">
                            <FaUser /> Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}
export default App;
