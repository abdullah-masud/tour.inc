import React from 'react';
import google from '../../../images/google.svg'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const location = useLocation()


    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='w-25 bg-secondary'></div>
                <span className='mx-3'>or</span>
                <div style={{ height: "1px" }} className='w-25 bg-secondary'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='continue-with-google  mx-auto py-3 '>
                <img src={google} alt="" />
                <span className='ms-2'>Continue With Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;