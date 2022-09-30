import React from 'react'


function Footer() {
  return (
    
<footer className="w-full mt-5 shadow md:px-6 md:py-8 bg-gradient-to-r from-indigo-800 to-indigo-900/70">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black font-Sacramento text-white tracking-widest">PropheT</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-lg sm:mb-0 text-white tracking-wider">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span className="block text-sm text-white sm:text-center  text-white tracking-wider">© 2022 <a href="#" className="hover:underline">Team PropheT™</a>. All Rights Reserved.
    </span>
</footer>

  )
}

export default Footer