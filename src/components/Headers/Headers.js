import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Headers = () => {
    return (
        <Navbar bg="success" expand="lg" >
            <Navbar.Brand href="/" className="text-white" style={{fontWeight:'bolder', fontSize:'1.8rem'}}>Daily Need</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                    <Nav.Link ><Link className="text-dark" to="/allProducts" className="text-dark">All Products</Link></Nav.Link>
                    <Nav.Link ><Link className="text-dark" to="/orders">Orders</Link></Nav.Link>
                    <Nav.Link > <Link className="text-dark" to="/admin">Admin</Link></Nav.Link>
                    <Nav.Link ><Link className="text-dark" to="/Login">Login</Link></Nav.Link>
                    
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Headers;