import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <Container >
                <h1 style={{ color: "rgb(33, 30, 71)" }} className='text-center my-5'>Reviews</h1>
                <div className='service-container mb-5'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Reviews;