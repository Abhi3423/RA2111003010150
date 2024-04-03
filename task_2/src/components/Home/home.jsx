import React from 'react'
import axios from 'axios'
import {HOST} from '../../shared/const/const'
import { useEffect } from 'react'
import ProductCard from '../../UI/productcard'

function Home() {

  
  useEffect(() => {

    // async function getStartdata() {
    //   let res = await axios.get(`${HOST}/categories`)
    //   console.log(res?.data)
    // }
    // getStartdata()

  }, [])

  const products = [
    { name: 'Product 1', price: 20, rating: 4.5, discount: 10, availability: 'In Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
    { name: 'Product 2', price: 30, rating: 4.2, discount: 15, availability: 'Out of Stock' },
  ];

  return (
    <div className='w-[100%] h-[100%] flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    </div>
  )
}

export default Home
