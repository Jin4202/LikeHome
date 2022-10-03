import React, { useState } from 'react'
import Account from '../../components/Account/Account'
import  StyleContext  from '../../components/Context/StyleContext'
import AccountLayout from '../../components/Layout/AccountLayout'

function index() {

    return (
       <Account/>
    )
}

index.getLayout = function getLayout(page) {
    const setStyle = "bg-slate-900 hover:bg-slate-900 hover:text-white"
    return (
        <>
            {/* <StyleContext.Provider value={{ setStyle }}> */}
                <AccountLayout>
                    {page}
                </AccountLayout>
            {/* </StyleContext.Provider> */}
        </>
    )
}

export default index