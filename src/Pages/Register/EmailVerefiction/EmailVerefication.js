import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const EmailVerefication = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

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
        <div>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >Verify email   </button>
        </div>
    );
};

export default EmailVerefication;