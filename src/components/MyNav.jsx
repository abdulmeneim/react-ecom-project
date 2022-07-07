import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./MyNav.css"
export default function MyNav() {
    return (
        <Navbar className="" style={{ backgroundColor: "#000" }} variant="dark" expand="lg">
            <div className="container-fluid">
                <Navbar.Brand href="#home">React Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/Home">Home</NavLink>
                        <NavLink to="/mycart">MYcart</NavLink>
                        <NavLink to="/about">About us</NavLink>
                        {/* <NavLink to="/Albums">Albums</NavLink> */}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
