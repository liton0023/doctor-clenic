import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl'>Blogs</h1>
            <div className='grid lg:grid-cols-3'>
                <div className=''>
                    <p className='text-justify border-solid border-4 text-xl border-light-blue-500 mx-4 my-4'>
                        Authentication: <br />
                        1.  Authentication verifies who the user is. <br />
                        2.Authentication works through passwords, one-time pins, biometric information, and other  information provided or entered by the user. <br />
                        3.Authentication is the first step of a good identity and access management process. <br />
                        4.Authentication is visible to and partially changeable by the user. <br />
                    </p>
                    <p className='text-xl text-justify border-solid border-4 border-light-blue-500 mx-4 my-4'>
                        Authorization: <br />
                        1.Authorization determines what resources a user can access. <br />
                        2.Authorization works through settings that are implemented and maintained by the organization. <br />
                        3.Authorization always takes place after authentication. <br />
                        4.Authorization isn’t visible to or changeable by the user.
                    </p>
                </div>
                <div className='text-xl text-justify border-solid border-4 border-light-blue-500 mx-4 my-4'>
                    <h1> Why using firebase?</h1>
                    <p >
                        1.Analytics <br />
                        2.Remote Config <br />
                        3.Database <br />
                        4.Cloud Messaging <br />
                        5.Authentication <br />
                    </p> <br />
                    <h1>implement authentication</h1> <br />
                    <h1>Email/Password</h1>
                    <h1>Google</h1>
                    <h1>Facebook</h1>
                    <h1>Play Games</h1>
                    <h1>Phone</h1>
                    <h1>Game Center</h1>
                    <h1>Apple</h1>
                    <h1>GitHub</h1>
                    <h1>Yahoo</h1>
                    <h1>Microsoft</h1>
                    <h1>Anonymous</h1>
                    <h1>Twitter</h1>
                </div>
                <div className='text-xl text-justify border-solid border-4 border-light-blue-500 mx-4 my-4'>
                    <h1>What other services does firebase provide other than authentication</h1> <br />
                    <h1>1. Parse</h1>
                    <h1>2. Back4App</h1>
                    <h1>3. AWS Amplify</h1>
                    <h1>4. Kuzzle</h1>
                    <h1>5. Couchbase</h1>
                    <h1>6. NativeScript</h1>
                    <h1>7. RxDB</h1>
                    <h1>8. Flutter</h1>
                    <h1>9. LoopBack</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;