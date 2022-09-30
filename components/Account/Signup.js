import React, { useContext, useState } from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import SignupContext from '../Context/SignupContext';


function Signup() {
    const {setSignup} = useContext(SignupContext)
    const [Required, setRequired] = useState({
        emailRequired: false,
        passWordRequired: false,
    })
    let copyRequire = { ...Required };

    const handleRequire = (e) => {
        (e === 'email') ? copyRequire.emailRequired = true : copyRequire.emailRequired = false;
        (e === 'password') ? copyRequire.passWordRequired = true : copyRequire.passWordRequired = false;
        setRequired(Required => ({
            ...copyRequire
        }))
    }
    const LoginForm = () =>{
        setSignup(false)
    }
    return (
        <div className='absolute backdrop-blur-md bg-white/30 mx-auto top-[-200px] border-4 border-slate-200 rounded-[50px] w-[500px] h-[800px] text-center ml-10'>
            <div className='text-black font-bold text-[40px] pt-10 tracking-widest'>Sign up</div>
            <div className='text-black font-bold text-[20px] pt-5 tracking-wider'></div>
            <div className='flex flex-col h-full w-full p-10 mt-5'>
                <div className='flex w-[400px] h-[50px] rounded-full border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c' onClick={() => handleRequire('email')}>
                    <input className='rounded-l-full pl-10 h-full w-full outline-none' placeholder='Email address'></input>
                    <EmailOutlinedIcon className='mr-5' />
                </div>
                {(Required.emailRequired) ? <span className='text-left text-rose-900 mt-2'>Please fill your Email</span> : <></>}
                <div className='flex w-[400px] h-[50px] rounded-full border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c mt-4'>
                    <input className='rounded-l-full pl-10 h-full w-full outline-none' placeholder='Phone number'></input>
                    <ContactPhoneOutlinedIcon className='mr-5' />
                </div>
                <div className='flex w-[400px] h-[50px] rounded-full border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c mt-4'>
                    <input className='rounded-full pl-10 h-full w-full outline-none' placeholder='First name'></input>
                </div>
                <div className='flex w-[400px] h-[50px] rounded-full border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c mt-4'>
                    <input className='rounded-full pl-10 h-full w-full outline-none' placeholder='Last name'></input>
                </div>

                <div className='flex w-[400px] h-[50px] rounded-full mt-4 border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c' onClick={() => handleRequire('password')} >
                    <input className='rounded-l-full pl-10 h-full w-full outline-none' placeholder='Password'></input>
                    <LockOutlinedIcon className='mr-5' />
                </div>
                {(Required.passWordRequired) ? <span className='text-left text-rose-900 mt-2'>Please fill your Password</span> : <></>}
                <div className='flex w-[400px] h-[50px] rounded-full mt-4 border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c'>
                    <input className='rounded-l-full pl-10 h-full w-full outline-none' placeholder='Confirm new password'></input>
                    <LockOutlinedIcon className='mr-5' />
                </div>
                <button className='w-[400px] h-[50px] rounded-full mt-4 mb-4 text-[20px] bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 font-bold'>Sign up</button>
                <button onClick={LoginForm} className="text-sky-900 underline">You have already a LikeHome account?</button>

            </div>
        </div>
    )
}

export default Signup