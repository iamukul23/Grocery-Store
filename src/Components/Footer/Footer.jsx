import React from 'react'
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";

const Footer = () => {
  return (
  <footer className='bg-zinc-100 py-20'>
    <div className=' flex flex-wrap max-w-[1400vh] mx-auto px-10'>
        <div className='flex-1basis [300px'>
        <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>
        <p className='text-zinc-600 mt-6 max-w-[350px]'>It is a long established fact that a reader will be distracted by the readableI</p>
        <p className='text-zinc-800 mt-6'>
            2025 &Copy; All Rights Reserved 
            </p> 
    </div>
    <ul className='flex-1'>
        <li>
            <h5 className='text-zinc-800 text-2xl font-bold'>Company </h5>
        </li>
        <li className='mt-6'>
            <a href="#" className=' text-zinc-800  hover:text-orange-500'>About</a>
        </li>
        <li className='mt-6'>
            <a href="#" className= ' text-zinc-800 hover:text-orange-500'>FAQ'S</a>
        </li>
    </ul>



     <ul className='flex-1'>
        <li>
            <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
        </li>
        <li className='mt-6'>
            <a href="#" className=' text-zinc-800  hover:text-orange-500'>Support Center</a>
        </li>
        <li className='mt-6'>
            <a href="#" className= ' text-zinc-800 hover:text-orange-500'>Feedback</a>
        </li>
                <li className='mt-6'>
            <a href="#" className= ' text-zinc-800 hover:text-orange-500'>Contact Us</a>
        </li>
    </ul>
    <div>
        <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
        <p className='mt-6 text-zinc-600'>Lorem ipsum dolor sit amet. <br />
        Lorem, ipsum dolor.
        </p>
        <div className=' flex p-1 rounded-lg mt-6 bg-white'>
            <input type="email" name='email' id='email' autoComplete='off' placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none' />
           

            <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl cursor-pointer'>
            <IoIosArrowForward />
            </button>
            
        </div>
    </div>
    </div>
  </footer>
  )
}

export default Footer
