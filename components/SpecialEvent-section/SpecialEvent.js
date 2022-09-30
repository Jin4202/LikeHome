import React, { useEffect, useState } from 'react'

function SpecialEvent() {
    const specialEvent = {
        EventName: ["EnchantMagic", "New Years San Francisco 2022-2023"],
        EventDescription: ["The World's Largest Christmas Light Maze and Village", 'San Francisco is one of the best places to celebrate New Year\'s Eve'],
        EventTicket: ["TICKETS ON SALE SEPTEMBER 15! OPENS EVERYWHERE NOVEMBER 25.", 'THIS YEAR, NEW YEAR\'s Eve falls on a Saturday night'],
        EventStory: ["Escape to an incredible illuminated winter wonderland. Experience a world of adventure featuring over 4 million sparkling lights creating an immersive walk-thru, story-themed maze. Discover our charming Village offering ice-skating, live entertainment, dining, holiday shopping, Santa & Mrs. Claus, and much more. Enchant is a spectacular annual event produced on the playing fields of major league sports stadiums and iconic outdoor spaces. Make plans to bring family and friends to Enchant for your most memorable, fun, and heartwarming evening of the Christmas season. A world of Christmas wonder awaits!",
            'You\'ll find plenty of activities on New Year\'s Day too. You can head out on a special New Year\'s Day cruise, visit a few of the famous San Francisco attractions, or lay low watching some great college football games'],
        EventLocationTitle: ["Lighting Up These Cities in 2022", "Lighting Up SanFrancisco"],
        EventLocationDescription: ["Join us in one of our 8 host cities. Tickets go on sale on September 15. Opens everywhere November 25.", 'New Year’s Eve Fireworks in SF'],
        EventLocation: [[['Washington, DC', 'Nationals Park'], ['St. Petersburg, FL', 'Tropicana Field'], ['Nashville, TN', 'First Horizon Ballpark'], ['Dallas, TX', 'Fair Park'],
        ['Las Vegas, NV', 'Las Vegas Ballpark'], ['Scottsdale, AZ', 'Salt River Fields'], ['Sacramento, CA', 'Sutter Health Park'], ['San Jose, CA', 'PayPal Park']
        ], [['Sanfrancisco, CA', 'SF Bay Bridge']]],
        DiscountWithLikeHome: 15,
        EventImageSrc: [['https://assets.website-files.com/6050de48515a7e672665ffff/622c056a7de970f45acdf800_2019-11-23_EnchantDC-5D4A0448_16.png',], ['https://images.rove.me/w_740,q_85/x4vinvbcawgluuztqmsu/san-francisco-new-years-eve-fireworks.jpg',]]
    }

    return (
        <div className='flex flex-col w-full justify-center align-center text-center overflow-auto'>
            <span className='text-[30px] tracking-wider mt-5 p-4 font-bold'>EVENTS</span>
            <span className='w-1/5 border border-black mx-auto mb-10 border-dotted'></span>
            <div className='flex lg:flex-row sm:flex-col sm:justify-center lg:w-[1000px] sm:w-[350px] h-[300px] lg:h-[300px] sm:h-[500px] mx-auto  border border-slate-900 rounded-xl mb-5 bg-slate-300/30 overflow-auto'>
                <img src='https://assets.website-files.com/6050de48515a7e672665ffff/622c056a7de970f45acdf800_2019-11-23_EnchantDC-5D4A0448_16.png' className='h-[300px] lg:w-1/3 sm:w-full object-cover'></img>
                <div className='flex flex-col lg:w-2/3 sm:1/3 h-[300px]'>
                    <span className='font-Sacramento text-2xl font-bold tracking-widest p-2'>{specialEvent.EventName[0]}</span>
                    <span className='font-Sacramento text-lg text-center p-2'>{specialEvent.EventDescription}</span>
                    <span className='font-bold text-xl text-left p-2'>Location: </span>
                    <div className='grid grid-cols-2 text-left px-10'>
                        {specialEvent.EventLocation[0].map((location) => <div key={location[0]} className='text-stone-400'><span className='text-emerald-500'>{location[0]}</span> at {location[1]}</div>)}
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row sm:flex-col sm:justify-center lg:w-[1000px] sm:w-[350px] h-[300px] lg:h-[300px] sm:h-[500px] mx-auto  border border-slate-900 rounded-xl mb-5 bg-slate-300/30 overflow-auto'>
                <img src='https://images.rove.me/w_740,q_85/x4vinvbcawgluuztqmsu/san-francisco-new-years-eve-fireworks.jpg' className='h-[300px] lg:w-1/3 sm:w-full object-cover'></img>
                <div className='flex flex-col lg:w-2/3 sm:1/3 h-[300px]'>
                    <span className='font-Sacramento text-2xl font-bold tracking-widest p-2'>{specialEvent.EventName[1]}</span>
                    <span className='font-Sacramento text-lg text-center p-2'>{specialEvent.EventDescription}</span>
                    <span className='font-bold text-xl text-left p-2'>Location: </span>
                    <div className='grid grid-cols-2 text-left px-10'>
                        {specialEvent.EventLocation[1].map((location) => <div key={location[1]} className='text-stone-400'><span className='text-emerald-500'>{location[1]}</span> at {location[1]}</div>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SpecialEvent