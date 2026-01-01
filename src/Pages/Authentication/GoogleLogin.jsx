import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

const GoogleLogin = () => {
    const {signInWithGoogle} = useAuth()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        console.log("Google Sign In clicked");
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    };
    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2 text-base-content border-secondary hover:border-primary hover:text-primary"
            >
                <FcGoogle size={20} />
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleLogin;