import React from 'react';
import person from '../../images/person.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-me mt-5 shadow-sm p-3 mb-5 bg-body rounded container d-flex justify-content-around align-items-center'>
            <div className='info'>
                <h1 style={{ color: 'rgb(33, 30, 71)' }}>Abdulla Al Masud</h1>
                <h6 className='my-3  d-inline-block p-3'>Aspiring Software Engineer</h6>
                <p style={{ color: 'rgb(33, 30, 71)', fontSize: '16px' }} className='  w-75'>My ambition is to work as a software developer. My initial move has been to enroll in an online course to study web programming. After completing the program, I aim to work as a professional web developer and continue my software engineering career. </p>
            </div>
            <div>
                <img width='400px' src={person} alt="" />
            </div>
        </div >
    );
};

export default AboutMe;