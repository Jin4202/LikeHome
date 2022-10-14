
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
import { collection, getDocs } from "firebase/firestore"

function index() {

  /*
    function searchHotelsAt
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
    function parse_searchDestination_data
    Create a map based on the data gathered by searchHotelsAt
  */
  const parse_searchDestination_data = (data) => {
    let dataset = new Map();
    for (let destination of data.data) {
      dataset.set(destination.display_name, destination);
    }
    return dataset;
  };

  /*
    function searchHotelProperties
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
  };

  /*
    function storeData
    Add a document. (https://firebase.google.com/docs/firestore/manage-data/add-data)
    Parameters
    fb_collection: string, collection name
    fb_document: string, document name
    data: javascript object
  */
  const storeData = async(fb_collection, fb_document, data) => {
    await setDoc(doc(db, fb_collection, fb_document), data);
  };

  // Utility function for formatting strings. Whitespace in the fetch_address should be %20.
  const formattedCityName = (name) => name?.replace(/\s/g, '%20');

  /*
    function store_destination_data
    Search destinations and store them.
    Parameters
    cityName: name of city
    input_country: string, country name
    key: X-RapidAPI-Key
    fb_collection: name of firebase collection
  */
  const store_destination_data = async (cityName, input_country, key, fb_collection) => {
    let input_city = formattedCityName(cityName);
    let data = await searchHotelsAt(input_city, input_country, key);
    let dataset = parse_searchDestination_data(data);
    let keys = dataset.keys();
    for(let destination_name of keys) {
      await storeData(fb_collection, destination_name, dataset.get(destination_name));
    }
  };

  /*
    function get_hotelArgument
    
  */
  const get_hotelArgument = async (collection_name) => {
    let argumentSet = [];
    const querySnapshot = await getDocs(collection(db, collection_name));
    querySnapshot.forEach((doc) => {
      argumentSet.push([doc.data().id, doc.data().display_name]);
    });
    return argumentSet;
  };

  /*
    function store_hotel_data
    Search hotels and store them.
    Parameters
    fb_dst_collection: destination collection that has id and display_name
    key: X-RapidAPI-Key
    fb_hotel_collection: name of target destination to store
  */
  const store_hotel_data = async (fb_dst_collection, key, fb_hotel_collection) => {
    //placeholders
    let hotelArguments = await get_hotelArgument(fb_dst_collection);
    let id = hotelArguments[3][0];
    let displayName = hotelArguments[3][1];

    let data = await searchHotelProperties(id, displayName, key);
    await storeData(fb_hotel_collection, id, data);
    /*
    for (let ids of id_array) {
      let id = ids[0];
      let displayName = ids[1];
      console.log(id, displayName);
      let data = await searchHotelProperties(id, displayName, key);
      //await storeData(fb_hotel_collection, id, data);
    }*/
  };

  // Usage
  /* Require
    fb_collection: firebase collection name
    targetCities: array of cities to search
    input_country: name of country. Usually 'USA'
    key: X-RapidAPI-Key
  */
  //const targetCities = ['Adirondacks', 'Manhattan', 'Black Hills', 'Chicago', 'Rocks National Lakeshore'];
  const city = 'Adirondacks';
  const input_country = 'USA';
  const key = '';
  const fb_dst_collection = 'destinations';
  const fb_hotel_collection = 'hotelByDestination';
  useEffect(() => {
    //store_destination_data(city, input_country, key, fb_dst_collection);
    //store_hotel_data(fb_dst_collection, key, fb_hotel_collection);
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
