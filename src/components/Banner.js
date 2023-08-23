import React from 'react';
//Image
import image from '../assets/1.jpg'

const Banner = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4' >
            <div className='max-h-[500px] relative' >
                <div className='absolute text-gray-200 w-full h-full max-h-[500px] bg-black/40 flex flex-col justify-center ' >
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Food</span> Delivered</h1>
                </div>
                <img  className='w-full max-h-[500px] object-cover ' src={image} alt='/' />
            </div>
        </div>
    );
};

export default Banner;