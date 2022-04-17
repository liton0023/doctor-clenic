import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className="bg-gray-200  text-2xl font-medium ">
                <Link to="/home">
                    <img src={logo} alt="" />
                </Link>
                <div className="mb-10 text-center pb-7">
                    <Link className="mx-10 lg:inline block" to="/home">Home</Link>
                    <Link className="mx-10 lg:inline block" to="/setservices">Services</Link>
                    <Link className="mx-10 lg:inline block" to="/blogs">Blogs</Link>
                    <Link className="mx-10 lg:inline block" to="/shop">Drug Shop</Link>
                    <Link className="mx-10 lg:inline block" to="/about">About</Link>
                    <Link className="mx-10 lg:inline block" to="/contact">Contact Us</Link>
                    {user?.email ?
                        <button onClick={handleSignOut} className="bg-blue-300 text-base rounded px-1 py-1 mr-2">Log Out</button> :
                        <Link className="mx-10 lg:inline block" to="/login">Log In</Link>}
                    <Link to="" className="text-red-700"> {user?.displayName}</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;