import React, { useState } from 'react';

//Data
import { data } from '../data/data';
//Components
import Card from './Card';

const Foods = () => {

    const [food ,setFood] = useState(data)

   const filterFood = (category) => {
    setFood(
        data.filter(item => {
            return item.category === category
        })
    )
   }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12' >
            <h1 className='text-orange-600 font-bold text-4xl text-center' >Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between' >
                 <div>
                    <p className='font-bold text-gray-700' >Filter Type</p>
                    <div className='flex justify-between flex-wrap' >
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => setFood(data)}>All</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterFood("burger")} >Burgers</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterFood("pizza")} >Pizza</button>
                    </div>
                 </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4' >
                {
                    food.map(item => <Card key={item.id} data={item} />)
                }
            </div>
        </div>
    );
};

export default Foods;