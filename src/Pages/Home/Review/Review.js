import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Review.css'

const Review = (props) => {
    const { name, rating, description, img } = props.review;
    return (
        <Card className='mx-3 mb-5 text-center'>
            <Card.Img className='img' variant="top" src={img} />
            <Card.Body >
                <h2>{name}</h2>
                <Card.Text className='mt-3'>
                    {description}
                </Card.Text>
                <h5>Rating: {rating}</h5>
            </Card.Body>
        </Card >
    );
};

export default Review;