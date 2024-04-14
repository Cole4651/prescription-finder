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
import Homepage from "./components/mainpages/Homepage.js";
import Aboutpage from "./components/mainpages/Aboutpage.js";
import Contactpage from "./components/mainpages/Contactpage.js";
import Signuppage from "./components/Signup/Signuppage.js";
import CalendarApp from "./components/Calendar/CalendarApp.js";
import { withAuthInfo, useHostedPageUrls, useLogoutFunction } from '@propelauth/react'

function Home() {
    return (
        <Homepage />
    );
}
function About() {
    return (
        <Aboutpage />
    );
}
function Contact() {
    return (
        <Contactpage />
    );
}
function Signup() {
    return (
        <div className="page">
            <h2>WIP Page</h2>
            <p>
                This page is a work in progress.
            </p>
        </div>
    );
}
function Login() {
    return (
        <Signuppage />
    );
}


function App() {
    const { getLoginPageUrl, getSignupPageUrl, getAccountPageUrl } = useHostedPageUrls();
    return (
        <Router>
            <Navbar className="navbar-bg" expand="lg">
                <Navbar.Brand>
                    <h1 className="navbar-brand-text">
                        <Link to="/" className="brand-link">
                            Calendarapp
                        </Link>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            <FaHome /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link">
                            <FaInfoCircle /> About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link">
                            <FaBook /> Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to={ getLoginPageUrl() } className="nav-link">
                            <FaBook /> Log In
                        </Nav.Link>
                        <Nav.Link as={Link} to={ getAccountPageUrl() } className="nav-link">
                            <FaUser /> Account
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
export default App;
