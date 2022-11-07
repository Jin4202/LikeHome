import React, { useContext, useState } from 'react'
import Link from "next/link";
import { getDataUser, signOutUser } from '../../firebaseConfig'
import { UserContext } from '../Context/userContext'

function Profile() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className='flex flex-col h-[700px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10'>
            <span className='text-white pt-5 pb-8 pl-16 font-bold tracking-widest text-[30px]'>Welcome back, [name]!</span>
            <hr></hr>
            <div className="flex flex-row justify-center align-center p-4 text-[20px]">
                <button className="flex flex-col justify-center align-center text-white px-4 text-center">
                    <p className="hover:scale-125">Profile</p>
                </button>
                <button className="flex flex-col justify-center align-center text-white px-4 text-center">
                    <p className="hover:scale-125"> <Link href="./reservations/"><a> Reservations </a></Link></p>
                </button>
                <button className="flex flex-col justify-center align-center text-white px-4 text-center">
                    <p className="hover:scale-125">Payment</p>
                </button>
                <button className="flex flex-col justify-center align-center text-white px-4 text-center"
                    onClick={signOutUser}>
                    <Link href="/">
                        <p className="hover:scale-125">Log Out</p>
                    </Link>
                </button>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between align-center pt-4">
                <span className=''></span>
                <button className="flex flex-col justify-center align-center text-white pl-4 text-center">
                    <p className="hover:scale-125">Edit</p>
                </button>
            </div>
            <div className="flex flex-row justify-left align-center">
                <div className="flex flex-col justify-left align-center p-7">
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>First name</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Last name</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Phone number</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Email</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Password</span>
                </div>
                <div className="flex flex-col justify-left align-center p-7">
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>[first name]</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>[last name]</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>[phone number]</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>[email]</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>[password]</span>
                </div>
            </div>
        </div>
    )
}

export default Profile