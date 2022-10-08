
import BrowseProperties from '../components/BrowseCard-section/BrowseProperties'
import Header from '../components/Header/Header'
import Layout from '../components/Layout/Layout'
import RewardCard from '../components/Reward-section/RewardCard'
import SpecialEvent from '../components/SpecialEvent-section/SpecialEvent'
import TravelNotice from '../components/TravelNotice-section/Travelnotice'
import { store } from '../components/Store/store'
import { Provider } from 'react-redux'

import React, { useState, useEffect } from 'react'
import db from '../firebaseConfig'
import { doc, setDoc } from "firebase/firestore"

function index() {

  /*
    We don't want to use this function every time we run the project. You spend requests from RapidAPI.
    Parameters examples
    input_city 'Los%20Angeles'     [* %20 == encoded white space]
    input_country: 'USA'
    key: X-RapidAPI-Key
    Return
      response object that is Promise object
  */
  const searchHotelsAt = (input_city, input_country, key) => {
    const fetch_address = `https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query=${input_city}&country=${input_country}`;

    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': `${key}`,
    		'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    	}
    };
    let res = fetch(fetch_address, options);
    return res.then(response => response.json());
  };

  /*
    We don't want to use this function every time we run the project. You spend requests from RapidAPI.
    Parameters examples
    id: id from extracted data at searchHotelsAt
    display_name: display_name from extracted data at searchHotelsAt
    key: X-RapidAPI-Key
    Return
      response object that is Promise object
  */
  const searchHotelProperties = (id, display_name, key) => {
    const fetch_address = `https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=${id}&display_name=${display_name}%2C%20IL&totalRecords=10`;
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': `${key}`,
    		'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    	}
    };
    let res = fetch(fetch_address, options);
    return res.then(response => response.json());
  }

  /*
    Add a document. (https://firebase.google.com/docs/firestore/manage-data/add-data)
    Parameters
    fb_collection: string, collection name
    fb_document: string, document name
    data: javascript object
  */
  const storeData = async(fb_collection, fb_document, data) => {
    await setDoc(doc(db, fb_collection, fb_document), data);
  };

  // Whitespace in the fetch_address should be %20. Helper function for formatting strings.
  const formattedCityName = (name) => name?.replace(/\s/g, '%20');

  /*
    Search hotels and store them.
    Parameters
    cityName: name of city
    input_country: string, country name
    key: X-RapidAPI-Key
  */
  const store_data = async (cityName, input_country, key, fb_collection) => {
      let input_city = formattedCityName(cityName);
      let data = await searchHotelsAt(input_city, input_country, key);
      let fb_document = cityName;
      await storeData(fb_collection, fb_document, data);
  };

  // Usage
  /* Require
    fb_collection: firebase collection name
    targetCities: array of cities to search
    input_country: name of country. Usually 'USA'
    key: X-RapidAPI-Key
  */
  //const targetCities = ['Adirondacks', 'Manhattan', 'Black Hills', 'Chicago', 'Rocks National Lakeshore'];
  const targetCities = ['Adirondacks'];
  const input_country = 'USA';
  const key = 'f789fcc07dmsh128cba791fdf78dp199409jsn1425b7896a3c';
  const fb_collection = 'cities';
  useEffect(() => {
    targetCities.forEach((city) => {
      //store_data(city, input_country, key, fb_collection);
      console.log("Completed.");
    });
  });

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
