import React from 'react';
import { Container, Form, Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <Container bg="light" >
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className='navbar-title' as={Link} to="/">Tour.inc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={CustomLink} to="/aboutme">About Me</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-success">Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;