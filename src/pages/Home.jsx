import React from 'react'
import Hero from '../components/Hero'
import Latestcollection from '../components/Latestcollection'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import NewsLetterSlot from '../components/NewsLetterSlot'



const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <BestSeller/>
      <Ourpolicy/>
      <NewsLetterSlot/>
    </div>
  )
}

export default Home