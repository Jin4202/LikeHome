import React from 'react'

function PropertyType(props) {
    const getList = props.list;
    return (
        <div className='flex flex-col w-3/4 mx-auto justify-center text-center mt-10 mb-10'>
            <span className='text-[30px] tracking-wider mt-5 p-4 font-bold'>{getList.header}</span>
            <span className='w-1/5 border border-black mx-auto mb-10'></span>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 w-full place-content-center'>
                {
                    getList.title.map((title, i) =>
                        <div key={title} className="relative overflow-hidden w-[230px] h-[300px] mb-5 rounded-xl text-white hover:animate-bounce">
                            <img className="absolute top-0 left-0 w-full h-full border border-slate-300  object-cover" src={getList.img[i]} alt="Sunset in the mountains" />
                            <div className='absolute top-0 left-0 w-full h-full bg-slate-800/20'>
                                <div className='flex flex-col justify-end h-full w-full p-5'>
                                    <span className='text-2xl font-bold'>{title}</span>
                                    <span>{getList.description[i]} listings</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default PropertyType