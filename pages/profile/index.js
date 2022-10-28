import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Profile from '../../components/Profile/Profile'


function index() {
    return (
        <div className='md:overflow-visible'>
            <Layout>
                <Profile />
            </Layout>
        </div>
    )
}

export default index