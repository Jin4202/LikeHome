import { query } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import db from "../../firebaseConfig";
import { useEffect, useState, useContext } from "react";
import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import NavBarBottom from "../Header/NavBarBottom";
import HotelTwoToneIcon from "@mui/icons-material/HotelTwoTone";
import ApartmentTwoToneIcon from "@mui/icons-material/ApartmentTwoTone";
import HouseTwoToneIcon from "@mui/icons-material/HouseTwoTone";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import StarRateTwoToneIcon from "@mui/icons-material/StarRateTwoTone";
import Book from "../Reservations/Book";
import { UserContext } from "../Context/userContext";
import Link from "next/link";
import { useRouter } from 'next/router'

function HotelList(props) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const router = useRouter()



  const [data, setData] = useState([]);
  const [filterPrice, setFilterPrice] = useState("Price");
  const [filter, setFilter] = useState([""]);
  const [value, loading, error] = useDocument(
    //"hotelByDestination" / "hotels"
    doc(db, "hotels", props.condition),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  
  useEffect(() => {
    if (loading) {
      console.log("loading....");
    } else {
      // setData(value.data().data)
      //filterType(value.data().data);
      filterType(value.data().listHotels);
    }
  }, [loading, filter, filterPrice]);

  function filterType(getValue) {
    let temp = getValue;
    // Filter By Type of Properties such as : Hotel, Apartment.....
    if (filter.length > 1) {
      temp = temp.filter(filterByProperty);
    }
    //Filter By Price of Properties such as: Low to High , High to Low..
    if (filterPrice != "Price") {
      temp = mergeSort(temp, filterPrice);
    }

    // Filter By Rating of Properties such as : Hotel, Apartment.....
    setData(temp);
  }

  function filterByProperty(property) {
    for (let i = 1; i < filter.length; i++) {
      if (property.spaceType == filter[i]) {
        return true;
      }
    }
    return false;
  }

  const filterValue = (e, type) => {
    e.preventDefault();

    let tempStyle = document.getElementById(type);
    let temp = filter;
    if (!temp.includes(type)) {
      setFilter([...temp, type]);
      tempStyle.classList.add("text-yellow-400");
    } else {
      temp.splice(temp.indexOf(type), 1);
      setFilter(temp);
      tempStyle.classList.remove("text-yellow-400");
      if (temp.length == 1) {
        setFilter([""]);
      }
    }
  };
  const priceConvert = (priceTemp) => {
    let temp = priceTemp.price.split("$");
    return Math.floor(temp[1].split(",").join("") / 30);
  };

  const mergeSort = (nums) => {
    if (nums.length < 2) return nums;
    var mid = Math.floor(nums.length / 2);
    var left = nums.slice(0, mid);
    var right = nums.slice(mid);

    function merge(left, right) {
      var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
      while (l < lLen && r < rLen) {
        if (
          priceConvert(left[l]) < priceConvert(right[r]) &&
          filterPrice == "Low"
        ) {
          result.push(left[l++]);
        } else if (
          priceConvert(left[l]) > priceConvert(right[r]) &&
          filterPrice == "High"
        ) {
          result.push(left[l++]);
        } else {
          result.push(right[r++]);
        }
      }
      return result.concat(left.slice(l)).concat(right.slice(r));
    }

    return merge(mergeSort(left), mergeSort(right));
  };

  const priceFilter = (e, temp) => {
    e.preventDefault();
    let visibleToggle = document.getElementById("price");
    let visibleStyle = document.getElementById("priceStyle");

    if (temp == "Price") {
      if (visibleToggle.classList.contains("hidden")) {
        visibleToggle.classList.remove("hidden");
        visibleStyle.classList.add("text-yellow-400");
      } else {
        visibleToggle.classList.add("hidden");
        visibleStyle.classList.remove("text-yellow-400");
      }
      setFilterPrice("Price");
    }
    if (temp == "Low") {
      setFilterPrice("Low");
      visibleToggle.classList.add("hidden");
    }
    if (temp == "High") {
      setFilterPrice("High");
      visibleToggle.classList.add("hidden");
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center align-center sticky top-[95px] bg-slate-900/40 p-2">
        <NavBarBottom />
        <div className="grid md:grid-rows-2 grid-flow-col xs:gap-2 xs:p-1 sm:gap-4 sm:p-2 md:gap-10 md:p-6 text-white font-bold">
          <div className="xs:hidden sm:flex row-span-2 align-center items-center justify-center text-md font-bold tracking-wide">
            Filter:
          </div>
          <div
            className="flex flex-col row-span-2 align-center items-center justify-center cursor-pointer"
            onClick={(event) => filterValue(event, "Hotel room")}
            id="Hotel room"
          >
            <HotelTwoToneIcon />
            <span>Hotel</span>
          </div>
          <div
            className="flex flex-col row-span-2 align-center items-center justify-center cursor-pointer"
            onClick={(event) => filterValue(event, "Apartment")}
            id="Apartment"
          >
            <ApartmentTwoToneIcon />
            <span>Apartment</span>
          </div>
          <div
            className="flex flex-col row-span-2 align-center items-center justify-center cursor-pointer"
            onClick={(event) => filterValue(event, "Guest")}
            id="Guest"
          >
            <HouseTwoToneIcon />
            <span>Guest</span>
          </div>
          <div className="flex flex-col row-span-2 align-center items-center justify-center cursor-pointer">
            <div
              className="flex flex-col items-center"
              onClick={(event) => priceFilter(event, "Price")}
              id="priceStyle"
            >
              <AttachMoneyTwoToneIcon />
              <span>{filterPrice}</span>
            </div>
            <div className="absolute bottom-0 hidden" id="price">
              <div className="flex flex-row w-[100px] justify-between p-1">
                <div onClick={(event) => priceFilter(event, "Low")}>Low</div>
                <div onClick={(event) => priceFilter(event, "High")}>High</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col row-span-2 align-center items-center justify-center">
            <StarRateTwoToneIcon />
            <span>Rating</span>
          </div>
        </div>
      </div>

      {loading ? (
        <></>
      ) : (
        <div className="w-3/4 mx-auto mt-[100px] justify-center">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 overflow-hidden">
            {data.map((getData) => (
              <div
                className="flex mx-auto md:h-[400px] md:w-[300px] sm:h-[400px] sm:w-[250px] mb-5"
                key={getData.id}
              >
                <PropertyCard key={getData.id} keyVal={getData} />{" "}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelList;
