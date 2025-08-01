import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonials = () => {
  return (
    <section>
    <div className='max-w-[1400px] px-10 mx-auto py-20'>
      <Heading highlight=" Customers" Heading="Saying" />
      <div className=' flex justify-end py-5 gap-x-3' >
        <button className='text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b  hover:from-orange-400  hover:to-orange-500 hover:text-white cursor-pointer' >
    <IoIosArrowBack />
   </button>
   <button className='text-2xl  text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b  hover:from-orange-400  hover:to-orange-500 hover:text-white cursor-pointer' >
    <IoIosArrowForward />
   </button>

      </div>
    </div>

    </section>
  )
}

export default Testimonials

