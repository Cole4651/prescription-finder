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
import { FaHome, FaBook, FaUser } from "react-icons/fa";
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
                    <Nav.Link as={Link} to="/" className="nav-link">
                        <FaHome /> Home
                    </Nav.Link>
                    <Nav.Link as={Link} to={getLoginPageUrl()} className="nav-link">
                        <FaBook /> Log In
                    </Nav.Link>
                    <Nav.Link as={Link} to={getSignupPageUrl()} className="nav-link">
                        <FaUser /> Account
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            <div className="container mt-4">
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