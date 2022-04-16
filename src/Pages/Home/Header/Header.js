import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
const Header = () => {
    return (
        <div>
            <nav className="bg-gray-200  text-2xl font-medium ">
                <Link to="/home">
                    <img src={logo} alt="" />
                </Link>
                <div className="mb-10 text-center pb-7">
                    <Link className="mx-10 lg:inline block" to="/home">Home</Link>
                    <Link className="mx-10 lg:inline block" to="/services">Services</Link>
                    <Link className="mx-10 lg:inline block" to="/doctors">Doctors</Link>
                    <Link className="mx-10 lg:inline block" to="/shop">Drug Shop</Link>
                    <Link className="mx-10 lg:inline block" to="/about">About Clinic</Link>
                    <Link className="mx-10 lg:inline block" to="/contact">Contact Us</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;