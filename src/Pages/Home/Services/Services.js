import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { image, title, description, price, person } = service;

    return (
        <div>
            <div className=" border-solid border-4 border-light-blue-500 mx-4 my-4 ">
                <div >
                    <img src={image} alt="" />
                    <h2 className="font-bold text-3xl text-center text-blue-600  my-2">{title}</h2>
                    <p className="text-justify pl-5 pr-2 font-normal">{description} </p>
                    <h5 className="font-bold text-red-700 text-center text-2xl ">Trainer: {person}</h5>
                    <h5 className="font-semibold text-center text-xl">Price: {price}$</h5>
                    <Link to="/getservice"><button className="bg-blue-700 text-white rounded-lg mt-3 lg:ml-44 ml-20  p-3 mb-3">Get This Service</button></Link>
                </div>
            </div>
        </div >

    );
};

export default Services;