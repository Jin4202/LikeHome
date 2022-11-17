
import { HotelContext } from "../Context/hotelContext";
import { UserContext } from "../Context/userContext";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc, getDoc, collection } from "firebase/firestore";
import db from "../../firebaseConfig";
import React, { useContext, useState, useEffect } from "react";

import { useRouter } from "next/router";
import { getHotel } from "../../firebaseConfig";

function Book(props) {
  const { currentHotel, setCurrentHotel } = useContext(HotelContext);
  const { currentUser } = useContext(UserContext);


  useEffect(async () => {
    const hotel = await getHotel(props.condition);
    setCurrentHotel(hotel);
  }, []);
  console.log(currentHotel);
  return (
    <>
      {!currentHotel ? (
        <></>
      ) : (
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
                    <span className='text-center text-white pl-20 font-bold tracking-widest text-[16px] p-4'>BOOKING</span>
            </div>
            
            <div className="flex flex-row justify-left align-center">
                <div className="flex flex-col justify-left align-center p-7">
                    <img src={currentHotel.images[0]} className=" w-[300px] h-[250px]"></img>
                    <span className='text-white pl-0 font-bold tracking-widest text-[16px] p-0'>{currentHotel.title}</span>
                    <span className='text-white pl-0 font-bold tracking-widest text-[16px] p-0'>Address: {currentHotel.publicAddress}</span>
                    <span className='text-white pl-0 font-bold tracking-widest text-[16px] p-0'>Listing Description: {currentHotel.beds} beds and {currentHotel.bathrooms} bathrooms
 </span>
                </div>
                <div className="flex flex-col justify-left align-center">
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Booking information:</span>
                    <span className='text-white pl-20 tracking-widest text-[16px]'>Name: </span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Check-in: [Check-in date]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Check-out: [Check-out date]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Days Staying: [Count days]</span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Room: [Room information] </span>
                    <span className='text-white pl-20 tracking-widest text-[16px] '>Average pay per day: {currentHotel.price} price/days </span>
                    <span className=' text-white pt-20 pb-8 pl-20 font-bold tracking-widest text-[15px]'>Total Price: [price*days]</span>
                </div>
            </div>           

            <div className="pt-10 text-center text-white font-bold text-[20px]">            
                <button type='button' className="border rounded-[5px]" > Book </button>
            </div>

        </div>
      )}
    </>
  );
}

export default Book;
