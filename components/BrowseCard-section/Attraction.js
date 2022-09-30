import React from 'react'

function Attraction(props) {
    const getList = props.list;
    return (
        <div className='flex flex-col w-3/4 mx-auto justify-center text-center mt-10 mb-10  overflow-hidden'>
            <span className='text-[30px] tracking-wider mt-5 p-4 font-bold'>{getList.header}</span>
            <span className='w-1/5 border border-black mx-auto mb-10'></span>
            <div className='grid md:grid-cols-6 gap-10 text-white text-2xl font-bold tracking-wider overflow-hidden'>
                <div className="col-span-3 h-[300px] object-contain
        bg-[url('https://deih43ym53wif.cloudfront.net/large_whiteface-mountain-adirondacks-new-york-shutterstock_189286796.jpg_29261f6c38.jpg')] object-cover">Adirondacks, New York State</div>
                <div className="col-span-3 h-[300px] object-cover bg-[url('https://deih43ym53wif.cloudfront.net/large_empire-state-building-new-york-usa-shutterstock_139761958_5dc7d40033.jpeg')] 
        bg-cover">Manhattan, New York City</div>
                <div className="md:col-span-2 sm:col-span-3 h-[300px] object-cover bg-yellow-400 bg-[url('https://deih43ym53wif.cloudfront.net/large_south%20dakota_shutterstock_167361335_1235323e3c.jpeg')] 
        bg-cover" >Black Hills, South Dakota</div>
                <div className="md:col-span-2 sm:col-span-3 h-[300px] object-cover bg-yellow-400 bg-[url('https://deih43ym53wif.cloudfront.net/large_chicago-shutterstock_160991363_bc0818a78b.jpeg')] 
        bg-cover">Chicago</div>
                <div className="md:col-span-2 sm:col-span-3 h-[300px] object-cover bg-yellow-400 bg-[url('https://deih43ym53wif.cloudfront.net/large_rocks-national-lake-shore-michigan-shutterstock_415643428.jpg_f183efb64a.jpg')] 
        bg-cover">Rocks National Lakeshore, Michigan</div>

            </div>
        </div>
    )
}

export default Attraction