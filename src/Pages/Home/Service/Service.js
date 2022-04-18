import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, price, description, img } = props.service;

    return (
        <Card className='mx-3 mb-5 text-center shadow-sm p-3 mb-5 bg-body rounded border-0'>
            <Card.Img variant="top" src={img} />
            <Card.Body >
                <h2>{name}</h2>
                <Card.Title className='mt-3'>{price}</Card.Title>
                <Card.Text className='mt-3'>
                    {description}
                </Card.Text>
                <Button className='my-2' as={Link} to="/checkout" variant="outline-success">Click to Checkout</Button>
            </Card.Body>
        </Card >
    );
};

export default Service;