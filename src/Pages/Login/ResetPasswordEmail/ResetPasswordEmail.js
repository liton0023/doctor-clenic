import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ResetPasswordEmail = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }
    return (
        <div className="grid justify-items-center items-center">
            <label className="text-2xl" htmlFor="name">Email :</label>
            <input onBlur={handleEmailBlur} className="block border border-yellow-600 mb-2 px-10 py-3" type="email" name="" id="" placeholder="Enter Your Email" required />
            <button
                onClick={async () => {
                    await sendPasswordResetEmail(email);
                    alert('Sent email');
                }}
            >
                Reset password
            </button>
        </div>
    );
};

export default ResetPasswordEmail;