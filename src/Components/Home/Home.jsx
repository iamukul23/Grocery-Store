import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import values from '../Values/Valuess'
import Valuess from '../Values/Valuess'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category/>
       <Valuess/>
       <Products/>
       <Discount/>
    </div>
  )
}

export default Home
