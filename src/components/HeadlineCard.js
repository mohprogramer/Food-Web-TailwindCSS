import React from 'react';
//Image
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'

const HeadlineCard = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6' >
            <div className='rounded-xl relative' >
                <div className='absolute h-full w-full bg-black/50 rounded-xl text-white' >
                    <p className='text-2xl font-bold px-2 pt-4' >Sun's Out, BOGO's Out</p>
                    <p className='px-2' >Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4' >Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src={img2} alt="/"/>
            </div>
            <div className='rounded-xl relative' >
                <div className='absolute h-full w-full bg-black/50 rounded-xl text-white' >
                    <p className='text-2xl font-bold px-2 pt-4' >New Restaurants</p>
                    <p className='px-2' >Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4' >Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src={img3} alt="/"/>
            </div>
            <div className='rounded-xl relative' >
                <div className='absolute h-full w-full bg-black/50 rounded-xl text-white' >
                    <p className='text-2xl font-bold px-2 pt-4' >We Deliver Desserts</p>
                    <p className='px-2' >Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4' >Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src={img4} alt="/"/>
            </div>
        </div>
    );
};

export default HeadlineCard;