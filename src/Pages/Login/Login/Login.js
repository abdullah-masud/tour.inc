import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [user] = useAuthState(auth)
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    if (user) {
        Navigate(from, { replace: true });
    }

    return (
        <Container className='w-50 login-container'>
            <h2 className='mb-3' style={{ color: 'rgb(1, 10, 100)' }}>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <p className='mt-3'>
                New to Tour.inc? <Link className='form-link' to="/register">Create an account</Link>
            </p>
            <SocialLogin />
        </Container>
    );
};

export default Login;