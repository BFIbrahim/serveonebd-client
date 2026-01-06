import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import useAxios from '../../hooks/useAxios';

const GoogleLogin = () => {
    const { signInWithGoogle } = useAuth()
    const navigate = useNavigate()
    const axios = useAxios()

    const handleGoogleSignIn = () => {
        console.log("Google Sign In clicked");
        signInWithGoogle()
            .then(async(result) => {
                const user = result.user
                const userInfo = {
                    email: user.email,
                    role: 'user',
                    cretedAt: new Date().toISOString()
                } 

                const respose = await axios.post('/users', userInfo)
                console.log(respose.data)

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