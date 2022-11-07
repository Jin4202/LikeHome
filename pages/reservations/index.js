import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ProfileReservations from '../../components/Reservations/profileReservations'

function index() {
    return (
        <div className='md:overflow-visible'>
            <Layout>
                <ProfileReservations />
            </Layout>
        </div>
    )
}


export default index