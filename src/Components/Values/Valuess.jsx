import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling } from "react-icons/fa6";
import { FaShieldAlt } from 'react-icons/fa';
import Basket from '../../assets/basket-full-vegetables.png'
const Valuess = () => {

  const leftvalues = values.slice(0,2).map(item => {
    return (
      <div key={item.id} className='flex  flex-row-reverse items-center gap-9'>
        <div>
          <span className='justify-center items-center text-3xl text-white flex bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
        </div>
        <div >
          <h3 className='text-zinc-800 text-3xl font-bold'>{item.tittle}</h3>
          <p className='text-zinc-600 mt-2'>{item.Para}</p>

        </div>
      </div>
    )
  })

   const rightvalues = values.slice(2).map(item => {
    return (
      <div key={item.id} className='flex  items-center gap-7'>
        <div>
          <span className='justify-center items-center text-3xl text-white flex bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
        </div>
        <div >
          <h3 className='text-zinc-800 text-3xl font-bold'>{item.tittle}</h3>
          <p className='text-zinc-600 mt-2'>{item.Para}</p>

        </div>
      </div>
    )
  })
  return (
    <section>

      <div className='max-w-[1400vh] mx-auto px-10 py-20' >
        <Heading highlight=" Our " Heading="Values" />
        <div className='flex gap-5 mt-15'>
          {/* left value */}
          <div  className='min-h-100 flex flex-col justify-between'>
         {leftvalues}
          </div>
          <div className='w-1/2' >
            <img src={Basket} />
          </div >
          {/* Right Value */}
          <div  className='min-h-100 flex flex-col justify-between'>{rightvalues}</div>

        </div>
      </div>
    </section>
  )
}

export default Valuess
const values = [
  {
    id: 1,
    tittle: 'Trust',
    Para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaHeart />
  },
  {
    id: 2,
    tittle: 'Allways Fresh',
    Para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaLeaf />
  },
  {
    id: 3,
    tittle: 'Food saftey',
    Para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaShieldAlt/>
  },
  {
    id: 4,
    tittle: '100% Organic ',
    Para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaSeedling/>
  },

]