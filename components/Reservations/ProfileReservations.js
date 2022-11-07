import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { getDataUser, signOutUser } from '../../firebaseConfig';
import { UserContext } from '../Context/userContext';
import { useRouter } from 'next/router';
import SignupContext from "../Context/SignupContext";




function ProfileReservations() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className='flex flex-col h-[auto] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10'>
            <span className='text-white pt-5 pb-8 pl-16 font-bold tracking-widest text-[30px]'> MY RESERVATIONS</span>
            <hr></hr>
            <div className=" flex flex-row justify-center align-center p-4 text-[20px]">
                <button className="flex flex-col justify-center align-center text-white px-4 text-center">
                    <p className="hover:scale-125"><Link href="./profile"><a> Profile </a></Link></p>
                </button>
                <button className="flex flex-col justify-center align-center text-white px-4 text-center">
                    <p className="hover:scale-125"><Link href="./reservations/"><a> Reservations </a></Link></p>
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
                <button className="flex justify-center align-center text-white pl-4 text-center"> 
                    <p className="hover:scale-125"> Book a new reservation</p>
                </button>
            </div>

            <div className="flex flex-row justify-left align-center">
                <div className="flex flex-col justify-left align-center p-7">
                    <img src="../ACHotelSJ.jpeg" className=" w-[3 00px] h-[250px]"></img>
                    <span className='text-white pl-0 tracking-widest text-[16px] p-0'>AC Hotel San Jose</span>
                    <span className='text-white pl-0 tracking-widest text-[16px] p-0'>Address: 1234 king st., San Jose</span>
                    <span className='text-white pl-0 tracking-widest text-[16px] p-0'>Listing Description: 2 bedroom suite</span>
                    
                </div>
                <div className="flex flex-col justify-left align-center pt-20">
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Booking information:</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Name: [First Last]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Check-in: [Check-in date]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Check-out: [Check-out date]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Days Staying: [Count days]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Room: [Room information] </span>
                
                </div>
                
            </div>
            <div className=" pt-10 pb-5 text-center text-white font-bold text-[15px]">            
               <button type='button' id='cancelReservation' className="border rounded-[5px]" > Cancel This Reservation </button>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-left align-center">
                <div className="flex flex-col justify-left align-center p-7">
                    <img src="public\states\Sanfrancisco.jpg" className=" w-[3 00px] h-[250px]"></img>
                    <span className='text-white pl-0 tracking-widest text-[16px] p-0'>SF Hotel</span>
                    <span className='text-white pl-0 tracking-widest text-[16px] p-0'>Address: 1234 king st., San Francisco</span>
                    <span className='text-white pl-0 tracking-widest text-[16px] p-0'>Listing Description: 1 bedroom</span>
                    
                </div>
                <div className="flex flex-col justify-left align-center pt-20">
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Booking information:</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Name: [First Last]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Check-in: [Check-in date]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Check-out: [Check-out date]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Days Staying: [Count days]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Room: [Room information] </span>
                
                </div>
                
            </div>
            <div className=" pt-10 pb-5 text-center text-white font-bold text-[15px]">            
               <button type='button' id='cancelReservation' className="border rounded-[5px]" > Cancel This Reservation </button>
            </div>
            <hr></hr>
            
        </div>
    )
}

export default ProfileReservations