import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavBarTop from '../Header/NavBarTop'
import React, { useContext } from 'react'
import StyleContext from '../Context/StyleContext'

function Layout({ children }) {
    return (
            <div className='flex flex-col'>
                <div className='sticky top-0 left-0 w-full z-10 overflow-hidden'><NavBarTop /></div>
                <div className=''>
                    {children}
                </div>

            </div>
    )
}

export default Layout