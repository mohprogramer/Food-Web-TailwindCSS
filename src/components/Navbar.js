import React, {useState} from 'react';
//React-icons
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import {TbTruckDelivery } from "react-icons/tb";
import {MdFavorite, MdHelp } from "react-icons/md";
import {FaWallet,FaUserFriends } from "react-icons/fa";

const Navbar = () => {

    const [nav, SetNav] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center' >
                <div className='cursor-pointer' onClick={() => SetNav(!nav)} >
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'  >
                    Best <span className='font-bold' >Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ' >
                    <p className='bg-black text-white rounded-full p-2' >Delivery</p>
                    <p className="p-2" >Pickup</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'  >
                <AiOutlineSearch size={25} />
                <input className='bg-transparent w-full p-2 focus:outline-none' type='text' placeholder='Search Foods' />
            </div>
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full' >
                <BsFillCartFill size={20} className='mr-2' /> cart
            </button>

            {
                nav && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' ></div>
            }
            
            <div className={nav ? 'bg-white fixed top-0 left-0 h-screen w-[300px] z-10 duration-300' : 'bg-white fixed top-0 left-[-100%] h-screen w-[300px] z-10 duration-300' } >
                <AiOutlineClose size={30} className='absolute top-4 right-4 cursor-pointer' onClick={() => SetNav(!nav)} />
                <h2 className='text-xl p-4' >
                    Best <span className='font-bold' >Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800' >
                    <li className='flex items-center py-4 text-xl' ><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                    <li className='flex items-center py-4 text-xl' ><MdFavorite size={25} className='mr-4' /> Favorites</li>
                    <li className='flex items-center py-4 text-xl' ><FaWallet size={25} className='mr-4' /> Wallet</li>
                    <li className='flex items-center py-4 text-xl' ><MdHelp size={25} className='mr-4' /> Helps</li>
                    <li className='flex items-center py-4 text-xl' ><AiFillTag size={25} className='mr-4' /> Promotions</li>
                    <li className='flex items-center py-4 text-xl' ><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                    <li className='flex items-center py-4 text-xl' ><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;