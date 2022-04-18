import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='fixed-bottom mt-5 py-3 text-center bg-light text-white d-flex align-items-center justify-content-evenly'>
            <h4 className='navbar-title' style={{ color: 'rgb(33, 30, 71)' }}>Tour.inc</h4>
            <h6 style={{ color: 'rgb(33, 30, 71)' }}>Copyright &copy; {year}</h6>
        </footer>
    );
};

export default Footer;