import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }


    return (
        <div>
            <div className="grid justify-items-center items-center">
                <h5 className="text-3xl text-blue-700 pb-10 font-bold">Please Log In</h5>
                <form onSubmit={handleUserSignIn} >
                    <label className="text-2xl" htmlFor="name">Name :</label>
                    <input onBlur={handleEmailBlur} className="block border border-yellow-600 mb-2 px-10 py-3" type="email" name="" id="" placeholder="Your Email" required />
                    <label className="text-2xl" htmlFor="password">Password:</label>
                    <input onBlur={handlePasswordBlur} className="block border border-yellow-600 px-10 py-3" type="password" name="" id="" placeholder="Enter Password" required />
                    <div className="block text-red-700">{error}</div>
                    <Link to="/resetpasswordemail"> <button>Reset Password</button></Link> <br />
                    <input className="bg-blue-300 text-base rounded px-1 py-1 mr-2 mt-2" type="submit" value="Log In" />
                </form>
                <p className="text-2xl mt-10">New in Clinic? <Link to="/signUp"> <span className="text-red-700 font-bold">Register</span> </Link></p>

                <button onClick={handleGoogleSignIn} className="bg-yellow-700 text-white rounded-lg  px-5 py-3 my-5">Sign In</button>

            </div>
        </div >
    );
};

export default Login;