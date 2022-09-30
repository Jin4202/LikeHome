import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SearchAutoComplete from '../Search-section/SearchAutoComplete';
import NavBarTop from './NavBarTop';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';


function NavBarBottom() {
  return (
    <div className="mx-auto sm:h-[100px] md:h-[50px] w-full justify-center align-center items-center text-center overflow-hidden">
    <div className='h-full sm:w-3/4 md:w-2/4 mx-auto bg-white'>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 border border-slate-900 h-full divide-x-[3px] sm:divide-y-[3px]'>
            <div className='flex h-full w-full justify-center items-center mr-2 ml-2 hover:shadow-xl'>
                <SearchIcon />
                <input className='h-full w-full outline-none mr-2 ml-2 text-center' placeholder='Search'></input>
            </div>
            <div className='flex h-full w-full justify-center items-center hover:shadow-xl'>
                <CalendarTodayIcon className='mr-3 ml-2' /> <span className='text-slate-400'>Dates</span>
            </div>
            <div className='flex h-full w-full justify-center items-center hover:shadow-xl'>
                <PersonIcon className='mr-3 ml-2' /><span className='text-slate-400'>Guests</span>
            </div>
            <div className='flex h-full w-full justify-center items-center hover:shadow-xl'>
                <SearchIcon />
            </div>
        </div>
    </div>
 </div>
  )
}

export default NavBarBottom