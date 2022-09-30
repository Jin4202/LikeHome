import React from 'react'

function ButtonSearch() {
    return (
        <div className="flex justify-center h-full w-full">
            <button type="button" className="inline-block rounded-full border border-slate-300 h-full w-full px-5 text-slate-400 font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out">Search</button>
        </div>
    )
}

export default ButtonSearch