import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./App.css";
import { FaHome, FaBook, FaUserPlus } from "react-icons/fa";
import Homepage from "./components/mainpages/Homepage.js";
import { useHostedPageUrls } from '@propelauth/react'

function Home() {
    return (
        <Homepage />
    );
}


function App() {
    const { getLoginPageUrl, getSignupPageUrl } = useHostedPageUrls();
    return (
        
        <Router>
            <Navbar className="navbar-bg" expand="lg">
            <Container>
                <Navbar.Brand>
                        <h1 className="navbar-brand-text">
                            <Nav.Link to="/" className="brand-link">
                                MedTrack
                            </Nav.Link>
                        </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            <FaHome /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to={getLoginPageUrl()} className="nav-link">
                            <FaBook /> Log In
                        </Nav.Link>
                        <Nav.Link as={Link} to={getSignupPageUrl()} className="nav-link">
                            <FaUserPlus /> Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            <div className="container mt-1">
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
export default App;
