import React from 'react'
import { DataContext } from '../../shared/containers/provider';
import { useContext } from 'react';

const Product = () => {
  const { data } = useContext(DataContext);

  if (!data) return null;

  return (
    <div className='w-[100%] h-[100%] flex justify-center'>
      <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden">
        <div className="px-4 py-4">
          <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
          <p className="text-gray-700 mb-2">Price: ${data.price}</p>
          <p className="text-gray-700 mb-2">Rating: {data.rating}</p>
          <p className="text-gray-700 mb-2">Discount: {data.discount}%</p>
          <p className="text-gray-700 mb-2">Availability: {data.availability}</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product
