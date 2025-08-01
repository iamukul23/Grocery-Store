import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/Productlist'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']
    const [activeTab, setActiveTab] = useState("All");
    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(items => items.category === activeTab);
    const renderCards = filteredItems.slice(0, 8).map(product => {
        return (
            <Cards image={product.image} name={product.name} price={product.price} />
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Our" Heading="Products" />
                {/* Tabs */}
                <div className='flex gap-3 justify-center mt-10'>
                    {categories.map(Category => {
                        return (
                            <button key={Category} className={` px-5 py-2 text-lg rounded-lg cursor-pointer
                                 ${activeTab === Category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`
                            } onClick={() => setActiveTab(Category)}>
                                {Category}
                            </button>
                        )
                    })}
                    {/* Product Listing */}



                </div>
                <div className='grid grid-cols-4 gap-9 mt-20'>
                    {renderCards}
                </div>
                <div className='m-15 mx-auto w-fit'>
                    <Button content="View All" />
                </div>
            </div>
        </section>
    )
}

export default Products

