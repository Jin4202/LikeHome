import React from 'react'
import ButtonSearch from './ButtonSearch'
import DateBook from './DateBook'

import SearchAutoComplete from './SearchAutoComplete'
import Selection from './Selection'

function SearchFlight() {
    return (
        <div className='flex justify-center align-center text-slate-400'>
            <div className='flex w-2/3 justify-around p-3 rounded-full'>
                <div className='w-2/6  bg-sky-400/10 rounded-full shadow-lg shadow-lime-500/60 hover:bg-sky-500/30'>
                    <SearchAutoComplete/>
                </div>
                <div className='w-2/6 bg-sky-400/10 rounded-full shadow-lg shadow-lime-500/60 hover:bg-sky-500/30'>
                    <DateBook/>
                </div>
                <div className='w-1/6 bg-sky-400/10 rounded-full shadow-lg shadow-lime-500/60 hover:bg-sky-500/30'>
                    <Selection/>
                </div>
                <div className='w-1/7 bg-sky-400/10 rounded-full shadow-lg shadow-lime-500/60 hover:bg-sky-500/30 '>
                    <ButtonSearch/>
                </div>
            </div>
            </div>
    )
}

export default SearchFlight