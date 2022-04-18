import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const location = useLocation()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        } else {
            toast('Please enter email address');
        }
    }

    return (
        <Container className='w-25 login-container mt-5'>
            <h2 className='mb-3 text-center' style={{ color: 'rgb(1, 10, 100)' }}>Login</h2>
            <form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='login-input' ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='login-input' ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                {errorElement}
                <Button className='login-button w-25 mx-auto d-block' type="submit">
                    Login
                </Button>
            </form>
            <p className='mt-3'>
                New to Tour.inc? <Link className='form-link' to="/register">Create an account</Link>
            </p>
            <p className='mt-3'>
                Forget Password?<button onClick={resetPassword} className='btn btn-link text-primary text-decoration-none'>Reset Password</button>
            </p>
            <SocialLogin />
            <ToastContainer />

        </Container>
    );
};

export default Login;