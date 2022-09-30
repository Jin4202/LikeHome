import React, { useContext } from 'react'
import StyleContext from '../Context/StyleContext'
import Layout from './Layout'

export default function AccountLayout({ children }) {
    return (
        <div>
        <Layout/>
            <div className='flex flex-col h-fufll w-full'>
                <div className='flex flex-col h-[300px] justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <span className='text-white pl-20 font-bold tracking-widest text-[30px]'>Sign up for more promotions and benefits</span>
                    <span className='text-white ml-10 pl-20 font-bold tracking-widest text-[20px]'>Convinent, and Safe. Sign up now for more interestes with LikeHome</span>
                </div>
                {children}
            </div>
            </div>
    )
}
