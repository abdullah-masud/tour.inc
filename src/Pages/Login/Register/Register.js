import React, { useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('');
    const [error1, setError] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        return <Loading />
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }
        else {
            setError("Password didn't Match")
        }
    }
    return (
        <Container className='w-25 mt-5'>
            <h2 className='mb-3 text-center' style={{ color: 'rgb(1, 10, 100)' }}>Sign Up</h2>
            <form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='login-input' ref={nameRef} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='login-input' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='login-input' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='login-input' ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button className='login-button mx-auto d-block' variant="primary" type="submit" >
                    Sign Up
                </Button>
            </form>
            {errorElement}
            <p className='text-danger mt-3'>{error1}</p>

            <p className='mt-3'>
                Already have an account? <Link className='form-link' to="/login">Login</Link>
            </p>
            <SocialLogin />

        </Container >
    );
};

export default Register;