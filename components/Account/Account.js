import React, { useState } from 'react'
import SignupContext from '../Context/SignupContext';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Signup from './Signup';


function Account() {
    const [signUp, setSignup] = useState(false);
    const [forgotPass, setForgotpass] = useState(false);
    return (
        <div className='relative mx-auto'>
            <SignupContext.Provider value={{ signUp, setSignup, setForgotpass}}>
                {
                    (!forgotPass) ? ((signUp) ? <Signup /> : <Login />) : <ForgotPassword />
                    
                }
            </SignupContext.Provider>
        </div>
    )
}

export default Account