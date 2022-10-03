
import BrowseProperties from '../components/BrowseCard-section/BrowseProperties'
import Header from '../components/Header/Header'
import Layout from '../components/Layout/Layout'
import RewardCard from '../components/Reward-section/RewardCard'
import SpecialEvent from '../components/SpecialEvent-section/SpecialEvent'
import TravelNotice from '../components/TravelNotice-section/Travelnotice'
import { store } from '../components/Store/store'
import { Provider } from 'react-redux'

import React from 'react'

function index() {
  return (
    <div className='md:overflow-visible'>
      <Provider store={store} >
        <Layout>
          <Header />
           <TravelNotice />
          <BrowseProperties />
          <SpecialEvent />
          <RewardCard />
        </Layout>
      </Provider>
    </div>
  )
}

export default index
