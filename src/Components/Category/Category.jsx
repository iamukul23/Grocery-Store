import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'

const Category = () => {
    const renderCards = category.map(card => {
        return (
            <div className='flex-1 basis-[300px]' key={card.id}>
                <div className='w-full min-h-[30vh] relative'>
                    <img src={card.image} className='absolute bottom-0' />
                </div>
                <div className='bg-zinc-100 pt-17 pb-8 rounded-xl -mb-10'>
                    <h3 className='text-zinc-800 text-xl font-bold'>{card.tittle}</h3>
                    <p className='text-zinc-600  mt-3 mb-9'>{card.description}</p>
                    <Button content="See All" />
                </div>
            </div>
        )
    })
    return (
        <div>
            <section>
                <div className=' max-w-[1400] max-auto px-10 py-20'>
                    <Heading highlight=" Shop" Heading="By Category" />
                    {/* card */}
                    <div className='flex gap-10 mt-15 '>
                        {renderCards}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Category
const category = [{
    id: 1,
    tittle: 'Fruits & Veggies',
    description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    image: FruitsCat
},
{
    id: 2,
    tittle: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    image: DairyCat
},
{
    id: 3,
    tittle: 'Meat & Seafood ',
    description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more..',
    image: FruitsCat
},
]

