import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Form, Navbar, Button, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Container bg="light">
            <Navbar expand="lg" className='py-3'>
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
                            {
                                user ?
                                    <Button onClick={handleSignOut} variant="outline-success">Logout</Button>
                                    :
                                    <Button as={Link} to='/login' variant="outline-success">Login</Button>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;