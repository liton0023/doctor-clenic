import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPass, setConformPass] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const navgite = useNavigate()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const [signInWithGoogle] = useSignInWithGoogle(auth);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePassBlur = event => {
        setPassword(event.target.value);
    }
    const handleConformPassBlur = event => {
        setConformPass(event.target.value);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }


    const handleNameChange = event => {
        setName(event.target.value)
    }

    if (user) {
        navgite('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== conformPass) {
            setError("Password did not match")
            return
        }
        if (password.length < 6) {
            setError('password less than 6 characters')
            return
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (

        <div>
            <div className="grid justify-items-center items-center">
                <h5 className="text-3xl text-blue-700 pb-10 font-bold">Please Register</h5>
                <form onSubmit={handleCreateUser} >
                    <label className="text-2xl" htmlFor="name">Name:</label>
                    <input onBlur={handleNameChange} className="block border border-yellow-600 mb-2 px-10 py-3" type="name" name="" id="" placeholder="Your Name" required />

                    <label className="text-2xl" htmlFor="email">Email:</label>
                    <input onBlur={handleEmailBlur} className="block border border-yellow-600 mb-2 px-10 py-3" type="email" name="" id="" placeholder="Your Email" required />
                    <label className="text-2xl" htmlFor="password">Password:</label>
                    <input onBlur={handlePassBlur} className="block border border-yellow-600 px-10 py-3" type="password" name="" id="" placeholder="Enter Password" required />
                    <label className="text-2xl" htmlFor="password">Conform Password:</label>
                    <input onBlur={handleConformPassBlur} className="block border border-yellow-600 px-10 py-3" type="password" name="" id="" placeholder="Enter Password" required />
                    <div className="block text-red-700">{error}</div>
                    <input className="bg-blue-300 text-base rounded px-1 py-1 mr-2 mt-2" type="submit" value="Register" />

                </form>
                <p className="text-2xl mt-10">Already have an account? <Link to="/login"> <span className="text-red-700 font-bold">Log In</span> </Link></p>

                <button onClick={handleGoogleSignIn} className="bg-yellow-700 text-white rounded-lg  px-5 py-3 my-5">Sign In</button>
            </div >
        </div >
    );
};

export default SignUp;