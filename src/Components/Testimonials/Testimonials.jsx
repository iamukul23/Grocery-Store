import React from 'react'
import Heading from '../Heading/Heading'
// import required modules
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import costumer1 from '../../assets/Customer1.jpg'
import costumer2 from '../../assets/Customer2.jpg'
import costumer3 from '../../assets/Customer3.jpg'
import costumer4 from '../../assets/Customer4.jpg'
import costumer5 from '../../assets/Customer5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
const Testimonials = () => {
  return (
    <section>
      <div className='max-w-[1400px] px-10 mx-auto py-20'>
        <Heading highlight=" Customers" Heading="Saying" />
        <div className=' flex justify-end py-5 mt-5 gap-x-3' >
          <button className='custom-prev  text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b  hover:from-orange-400  hover:to-orange-500 hover:text-white cursor-pointer' >
            <IoIosArrowBack />
          </button>
          <button className=' custom-next text-2xl  text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b  hover:from-orange-400  hover:to-orange-500 hover:text-white cursor-pointer' >
            <IoIosArrowForward />
          </button>

        </div>
        <Swiper navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} loop={true} breakpoints={{ 640: { slidesPerView: 1, spaceBetween: 20 }, 768: { slidesPerView: 20, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 20 } }} modules={[Navigation]} className="mySwiper">
          {
            review.map(item => {
              return (
                <SwiperSlide className='bg-zinc-100 rounded-xl p-8 '>
                  <div className='flex gap-5 items-center'>
                    <div className='w-16 h-16 rounded-full bg-amber-200 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                      <img src={item.image} className='w-full h-full ' />
                    </div>

                    <div >
                      <h5 className='text-xl font-bold'> {item.name} </h5>
                      <p className='text-zinc-600 '>{item.profession} </p>
                      <span className='flex text-yellow-400 mt-3 text-xl gap-1'>
                        {Array.from({ length: item.rating }, (_, index) => (
                          <FaStar />
                        ))}

                      </span >
                    </div>




                  </div>
                  <div className='mt-10 min-h-[15vh]'>
                    <p className='text-zinc-600 '>{item.para}</p>
                  </div>

                </SwiperSlide>
              )
            })
          }

        </Swiper>



      </div>

    </section>
  )
}

export default Testimonials


const review = [
  {
    id: 1,
    name: 'Sourav',
    profession: 'Food blogger ',
    rating: 3,
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eum a odio officiis quod laboriosam iste!',
    image: costumer1,

  },
  {
    id: 2,
    name: 'Sachin',
    profession: 'Dancer',
    rating: 3,
    para: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eum a odio officiis quod laboriosam iste!',
    image: costumer2,

  },
  {
    id: 3,
    name: 'Mukul',
    profession: ' Model ',
    rating: 4,
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eum a odio officiis quod laboriosam iste! ',
    image: costumer3,

  },
  {
    id: 4,
    name: 'Harshit',
    profession: ' Singer ',
    rating: 3,
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eum a odio officiis quod laboriosam iste! ',
    image: costumer4,

  },
  {
    id: 5,
    name: 'Kartik',
    profession: ' Dietien',
    rating: 4,
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eum a odio officiis quod laboriosam iste! ',
    imege: costumer5,
  },
]
