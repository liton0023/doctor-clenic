import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';



const GetService = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch('servicedetails.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    useEffect(() => {
        const foundService = serviceDetails.find(service => service.id === service)
        setSingleService(foundService)
    }, [serviceDetails])

    console.log(singleService)


    return (
        <div className="lg:ml-10 mb-10">

            <div className="grid lg:grid-cols-2">
                <img src={singleService?.image} alt="" />
                <div>
                    <h2 className="font-bold text-3xl text-center text-blue-600  my-2">{singleService?.title}</h2>
                    <p className="text-justify pl-5 pr-2 pb-5 text-2xl">{singleService?.description} </p>
                    <p className="text-justify pl-5 pr-2 pb-10 text-xl">{singleService?.details}</p>
                    <h5 className="font-bold text-red-700 text-center text-2xl ">Trainer: {singleService?.person}</h5>
                    <h5 className="font-semibold text-center text-xl pt-3">Email: {singleService?.email}</h5>
                    <h5 className="font-semibold text-center text-xl pt-3 pb- 3">Contact: {singleService?.contact}</h5>
                </div>

            </div>

        </div>

    );
};

export default GetService;