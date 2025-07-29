import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled ,  TbCircleNumber3Filled ,  TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import {  SlBadge } from "react-icons/sl";
import {  BsTruck } from "react-icons/bs";

const Process = () => {
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>


                <div className=' w-fit mr-auto '>
                    <Heading highlight="Our" Heading="Process" />
                </div>
            </div>
        </section>
    )
}

export default Process


const steps=[
{
    id: 1,
    number:<TbCircleNumber1Filled />,
    tittle:'Sourcing',
    para:" It is a long eastablised fact that a reader ",
    icon:<PiPlant />
},

{
    id: 2,
    number:<TbCircleNumber2Filled />,
    tittle:'Manufacturing',
    para:" It is a long eastablised fact that a reader ",
    icon:<PiFactory />
},
{
    id: 3,
    number:<TbCircleNumber3Filled />,
    tittle:'Quality Control',
    para:" It is a long eastablised fact that a reader ",
    icon:<SlBadge/>
},

{
    id: 4,
    number:<TbCircleNumber4Filled />,
    tittle:'Logistics',
    para:" It is a long eastablised fact that a reader ",
    icon:<BsTruck/>
},

]
