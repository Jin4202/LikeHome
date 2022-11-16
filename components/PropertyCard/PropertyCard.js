import StarIcon from "@mui/icons-material/Star";
import React, { useContext } from "react";
import { useRouter } from 'next/router'
import { UserContext } from "../Context/userContext";
import { HotelContext } from "../Context/hotelContext";

function PropertyCard(props) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { currentHotel, setCurrentHotel } = useContext(HotelContext);
  const router = useRouter()

  let temp = props.keyVal.price.split("$");
  const price = Math.floor(temp[1].split(",").join("") / 30);

  const handleClick = () => {

    if(currentUser) {
      setCurrentHotel(props.keyVal);
      console.log(currentHotel);
      router.push( `../booking/${props.keyVal.id}`)
    } else {
      router.push('../account')
    }
  };
  return (
    <div className="">
      <div className="thumb-item ">
        <img
          src={props.keyVal.images[0]}
          className=" initial w-[300px] h-[250px] object-cover rounded-[25px]"
        ></img>
        <div className="thumb-item__info ">
          {currentUser ? (
            <button
              type="button"
              className="flex flex-col justify-center align-center text-white px-4 text-center"
              onClick={handleClick}
            >
              {" "}
              Book?{" "}
            </button>
          ) : (
            <button
              type="button"
              className="flex flex-col justify-center align-center text-white px-4 text-center"
              onClick={handleClick}
            >
              {" "}
              Sign in?{" "}
            </button>
          )}
        </div>
      </div>

      <div>
        <span className="text-lg font-bold mt-3">
          {props.keyVal.publicAddress}
        </span>
      </div>

      <div className="flex flex-row">
        <span className=" flex text-md justify-center items-center align-center text-gray-500">
          {props.keyVal.avgRating}{" "}
          <StarIcon
            className="text-yellow-400"
            color="inherit"
            fontSize="small"
          />{" "}
          ({props.keyVal.reviewsCount} reviews)
        </span>
      </div>

      <div>
        <span className="text-sm text-gray-500">{`$` + price + `/night`}</span>
      </div>

      <div>
        <span className="text-sm text-gray-500">
          {props.keyVal.listingName}
        </span>
      </div>
    </div>

    //* <span>Property type: {props.keyVal.spaceType}</span>
    //  <span>Star: {props.keyVal.starRating}</span>
    //  <span>Reviews: {props.keyVal.reviewsCount}</span>  */
  );
}

export default PropertyCard;
