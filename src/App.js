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
import { FaHome, FaInfoCircle, FaBook, FaPhone } from "react-icons/fa";
function Home() {
    return (
        <div className="page">
            <h2>Home Page</h2>
            <p>Welcome to the Home Page.</p>
        </div>
    );
}
function About() {
    return (
        <div className="page">
            <h2>About Page</h2>
            <p>Welcome to the About Page.</p>
        </div>
    );
}
function Contact() {
    return (
        <div className="page">
            <h2>Contact Page</h2>
            <p>Welcome to the Contact Page.</p>
        </div>
    );
}
function Articles() {
    return (
        <div className="page">
            <h2>WIP Page</h2>
            <p>
                This page is a work in progress.
            </p>
        </div>
    );
}
function Courses() {
    return (
        <div className="page">
            <h2>WIP Page</h2>
            <p>
                This page is a work in progress.
            </p>
        </div>
    );
}
function App() {
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            <FaHome /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link">
                            <FaInfoCircle /> About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/articles" className="nav-link">
                            <FaBook /> Articles
                        </Nav.Link>
                        <Nav.Link as={Link} to="/courses" className="nav-link">
                            <FaBook /> Courses
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link">
                            <FaPhone /> Contact
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
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/courses" element={<Courses />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
export default App;