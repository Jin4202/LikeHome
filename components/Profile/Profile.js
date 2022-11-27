import React, { useContext, useState } from 'react';
import Link from 'next/link';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import { getDataUser, signInAuthUserWithEmailAndPassword, signOutUser, updateFirstname, updateLastname,
        updatePhone, deleteAccount } from '../../firebaseConfig';
import { UserContext } from '../Context/userContext';

function Profile() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ editFirstname, setEditFirstname ] = useState(false);
    const [ editLastname, setEditLastname ] = useState(false);
    const [ editPhone, setEditPhone ] = useState(false);
    
    var pwdLen = currentUser.pwd.length;
    var pwdHidden = currentUser.pwd.charAt(0);
    for (var i = 1; i < pwdLen; i++) {
        pwdHidden += '*';
    }

    var welcome = "Welcome back, " + currentUser.firstname + "!";
    var welcomeDefault = "Welcome back!";

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };

    const editFirstnameHandler = async() => {
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(currentUser.email, currentUser.pwd);
            if (editFirstname) {
                if (currentUser.firstname != firstname && firstname != "") {
                    await updateFirstname(user, firstname);
                }
                const data = await getDataUser(user);
                setCurrentUser(data);
            }
            setEditFirstname(!editFirstname);
        } catch (error) {
            console.log(error);
        }
    }

    const editLastnameHandler = async() => {
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(currentUser.email, currentUser.pwd);
            if (editLastname) {
                if (currentUser.lastname != lastname && lastname != "") {
                    await updateLastname(user, lastname);
                }
                const data = await getDataUser(user);
                setCurrentUser(data);
            }
            setEditLastname(!editLastname);
        } catch (error) {
            console.log(error);
        }
    }

    const editPhoneHandler = async() => {
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(currentUser.email, currentUser.pwd);
            if (editPhone) {
                if (currentUser.phone != phone && phone != "") {
                    await updatePhone(user, phone);
                }
                const data = await getDataUser(user);
                setCurrentUser(data);
            }
            setEditPhone(!editPhone);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteHandler = async() => {
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(currentUser.email, currentUser.pwd);
            await deleteAccount(user);
            setCurrentUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col h-[700px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10'>
            <span className='text-white pt-5 pb-8 pl-16 font-bold tracking-widest text-[30px]'>
                {currentUser.firstname ? (welcome) : (welcomeDefault)}
            </span>
            <hr></hr>
            <div className="flex flex-row justify-center align-center p-4 text-[20px]">
                <button className="flex flex-col justify-center align-center text-white px-4 underline text-center">
                    <p className="hover:scale-125">Profile</p>
                </button>
                <button className="flex flex-col justify-center align-center text-white px-4 text-center">
                    <p className="hover:scale-125"> <Link href="./reservations/"><a> Reservations </a></Link></p>
                </button>
                <button className="flex flex-col justify-center align-center text-white px-4 text-center">
                    <p className="hover:scale-125">Payment</p>
                </button>
                <button className="flex flex-col justify-center align-center text-white px-4 text-center"
                    onClick={signOutHandler}>
                    <Link href="/">
                        <p className="hover:scale-125">Log Out</p>
                    </Link>
                </button>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-left align-center">
                <div className="flex flex-col justify-left align-center p-7">
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>First name</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Last name</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Phone number</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Email</span>
                    <span className='text-white pl-20 font-bold tracking-widest text-[16px] p-4'>Password</span>
                </div>
                <div className='flex flex-col justify-left align-center p-7'>
                    <div className='flex flex-row'>
                        {editFirstname ? (
                            <div className="flex w-[300px] h-[50px] rounded-full ml-20 border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c">
                                <input
                                className="rounded-l-full pl-10 h-full w-full outline-none"
                                type="text"
                                defaultValue={currentUser.firstname}
                                placeholder="Enter new firstname"
                                onChange={(e) => setFirstname(e.target.value)}
                                />
                                <BadgeOutlinedIcon className="mr-5" />
                            </div>
                        ) : (
                            <span className='text-white pl-20 tracking-widest text-[16px] p-4'>
                            {currentUser.firstname ? currentUser.firstname : "first name not found"}</span>
                        )}
                        <button className='flex flex-col justify-center align-center text-white p-4 text-center hover:scale-125'
                        onClick={editFirstnameHandler}>
                            <EditOutlinedIcon />
                        </button>
                    </div>
                    <div className='flex flex-row'>
                        {editLastname ? (
                            <div className="flex w-[300px] h-[50px] rounded-full ml-20 border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c">
                            <input
                            className="rounded-l-full pl-10 h-full w-full outline-none"
                            type="text"
                            defaultValue={currentUser.lastname}
                            placeholder="Enter new lastname"
                            onChange={(e) => setLastname(e.target.value)}
                            />
                            <BadgeOutlinedIcon className="mr-5" />
                        </div>
                        ) : (
                            <span className='text-white pl-20 tracking-widest text-[16px] p-4'>
                            {currentUser.lastname ? currentUser.lastname : "last name not found"}</span>
                        )}
                        <button className='flex flex-col justify-center align-center text-white p-4 text-center hover:scale-125'
                        onClick={editLastnameHandler}>
                            <EditOutlinedIcon />
                        </button>
                    </div>
                    <div className='flex flex-row'>
                        {editPhone ? (
                            <div className="flex w-[300px] h-[50px] rounded-full ml-20 border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c">
                                <input
                                className="rounded-l-full pl-10 h-full w-full outline-none"
                                type="text"
                                defaultValue={currentUser.phone}
                                placeholder="Enter new phone number"
                                onChange={(e) => setPhone(e.target.value)}
                                />
                                <ContactPhoneOutlinedIcon className="mr-5" />
                            </div>
                        ) : (
                            <span className='text-white pl-20 tracking-widest text-[16px] p-4'>
                            {currentUser.phone ? currentUser.phone : "phone number not found"}</span>
                        )}
                        <button className='flex flex-col justify-center align-center text-white p-4 text-center hover:scale-125'
                        onClick={editPhoneHandler}>
                            <EditOutlinedIcon />
                        </button>
                    </div>
                    <div className='flex flex-row'>
                        <span className='text-white pl-20 tracking-widest text-[16px] p-4'>
                            {currentUser.email}</span>
                    </div>
                    <div className='flex flex-row'>
                        <span className='text-white pl-20 tracking-widest text-[16px] p-4'>
                            {pwdHidden}</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between pt-28'>
                <div></div>
                <div>
                    <button className='flex flex-col justify-center align-center text-white text-center hover:scale-125'
                        onClick={deleteHandler}>
                        <Link href="/">
                            Delete account
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile