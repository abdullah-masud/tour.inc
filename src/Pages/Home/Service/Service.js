import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, price, description, img } = props.service
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{price}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Click to Checkout</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;