import React, { useState } from 'react'


function Selection() {
    const [value, setValues] = useState("")
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className='h-full w-full'>

            <select className="flex form-select appearance-none
      block
      w-full
      h-full
      text-center
      font-normal
      text-white-700
      bg-transparent
      border border-solid border-gray-300
      rounded-full
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example ">
                <option selected>Rooms</option>
                <option value="1">1 room</option>
                <option value="2">2 rooms</option>
                <option value="3">3+ rooms</option>
            </select>

        </div>
    )
}

export default Selection