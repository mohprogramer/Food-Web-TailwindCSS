import React from 'react';

const Card = ({data}) => {

    const {image,price,name} = data

    return (
            <div className='border shadow-lg rounded-lg hover:scale-105 duration-300  ' >
                <img className='w-full h-[200px] object-cover rounded-t-lg' src={image} alt={name} />
                <div className='flex justify-between px-2 py-4' >
                    <p className='font-bold' >{name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-full ' >{price}</span>
                    </p>
                </div>
            </div>
    );
};

export default Card;