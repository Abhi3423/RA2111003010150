import React from 'react'
import axios from 'axios'
import {HOST} from '../../shared/const/const'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {

    // async function getStartdata() {
    //   let res = await axios.get(`${HOST}/categories`)
    //   console.log(res?.data)
    // }
    // getStartdata()

  }, [])

  return (
    <div className='w-[100%] h-[100%] flex justify-center'>
      
    </div>
  )
}

export default Home
