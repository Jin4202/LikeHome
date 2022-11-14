import React, { useContext, useState, useEffect } from "react";

import Link from "next/link";
import { getDataUser, signOutUser } from '../../firebaseConfig'
import Signup from '../Account/Signup';

function Book (props) {
    console.log(props)
    return (
        <div className='flex flex-col h-[auto] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10'>
            <span className='text-center text-white pt-5 pb-8 pl-16 font-bold tracking-widest text-[30px]'>BOOK</span>
            <hr></hr>
        
            <div className="flex flex-row justify-between align-center pt-4">
                <span className=''></span>
                <button className="flex justify-center align-center text-white pl-4 text-center"> 
                    <p className="hover:scale-125"> Book a new reservation</p>
                </button>
            </div>
            
            <div className="flex flex-col justify-left align-center p-1">
                    <span className='text-center text-white pl-20 font-bold tracking-widest text-[16px] p-4'>"TEMP BOOKING PAGE"</span>
            </div>
            
            <div className="flex flex-row justify-left align-center">
                <div className="flex flex-col justify-left align-center p-7">
                    <img src='./public/main-image/AC Hotel SJ.jpeg' className=" w-[300px] h-[250px]"></img>
                    <span className='text-white pl-0 font-bold tracking-widest text-[16px] p-0'>AC Hotel San Jose</span>
                    <span className='text-white pl-0 font-bold tracking-widest text-[16px] p-0'>Address: 1234 king st.,</span>
                    <span className='text-white pl-0 font-bold tracking-widest text-[16px] p-0'>Listing Description: 2 bedroom suite</span>
                </div>
                <div className="flex flex-col justify-left align-center">
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Booking information:</span>
                    <span className='text-white pl-20 tracking-widest text-[16px]'>Name: [First Last] </span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Check-in: [Check-in date]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Check-out: [Check-out date]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Days Staying: [Count days]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Room: [Room information] </span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Average pay per day: [price/days] </span>
                    <span className=' text-white pt-20 pb-8 pl-20 font-bold tracking-widest text-[15px]'>Total Price: [price*days]</span>
                </div>
            </div>           

            <div className="pt-10 text-center text-white font-bold text-[20px]">            
                <button type='button' className="border rounded-[5px]" > Book </button>
            </div>

        </div>
        
    )
}

export default Book