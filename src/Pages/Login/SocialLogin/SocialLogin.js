import React from 'react';
import google from '../../../images/google.svg'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-secondary'></div>
                <span className='mx-3'>or</span>
                <div style={{ height: "1px" }} className='w-50 bg-secondary'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='continue-with-google py-3'>
                <img src={google} alt="" />
                <span className='ms-2'>Continue With Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;