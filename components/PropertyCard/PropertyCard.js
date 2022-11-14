import StarIcon from '@mui/icons-material/Star';
import React, { useContext } from "react";
import Link from 'next/link';
import { UserContext } from '../Context/userContext';



function PropertyCard(props) {
  const { currentUser } = useContext(UserContext);

  let temp = props.keyVal.price.split("$");
  const price = Math.floor(((temp[1].split(",")).join('') / 30));

  return (
    <div className=''>

      <div className='thumb-item ' >
        <img src={props.keyVal.images[0]} className=" initial w-[300px] h-[250px] object-cover rounded-[25px]"></img>  
          <div className='thumb-item__info '>
            <button className="flex flex-col justify-center align-center text-white px-4 text-center">
              {currentUser ? (
                <h2><Link href="../reservations/booking"><a> Book? </a></Link></h2> 
                 ) : (
                 <h2><Link href="../account"><a> Sign-in to book </a></Link></h2>  
                 ) }
            </button>
          </div>
      </div>

      <div>
        <span className='text-lg font-bold mt-3'>{props.keyVal.publicAddress}</span>
      </div>

      <div className='flex flex-row'>
        <span className=' flex text-md justify-center items-center align-center text-gray-500'>{props.keyVal.avgRating} <StarIcon className='text-yellow-400' color="inherit" fontSize="small" /> ({props.keyVal.reviewsCount} reviews)</span>
      </div>

      <div>
        <span className='text-sm text-gray-500'>{`$` + price + `/night`}</span>
      </div>

      <div> 
        <span className='text-sm text-gray-500'>{props.keyVal.listingName}</span>
      </div>
      
    </div>
    
     //* <span>Property type: {props.keyVal.spaceType}</span>
    //  <span>Star: {props.keyVal.starRating}</span>
    //  <span>Reviews: {props.keyVal.reviewsCount}</span>  */
  )
}

export default PropertyCard