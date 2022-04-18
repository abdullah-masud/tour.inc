import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Checkout = () => {

    const [user] = useAuthState(auth)

    const billingAddress = (event) => {
        event.preventDefault()
        toast("Form Submitted")
    }
    return (
        <Container className='w-25 login-container mt-5'>
            <h2 className='mb-3 text-center' style={{ color: 'rgb(1, 10, 100)' }}>Billing address</h2>
            <form onSubmit={billingAddress}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='login-input' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control disabled className='login-input' type="email" placeholder={user.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='login-input' type="text" placeholder="Enter Phone Number" />
                </Form.Group>

                <Button className='login-button w-25 mx-auto d-block' type="submit">
                    Submit
                </Button>
            </form>
            <ToastContainer />
        </Container>
    );
};

export default Checkout;