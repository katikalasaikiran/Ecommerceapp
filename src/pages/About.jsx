import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>At [Brand Name], we believe fashion is more than just clothing—it's an expression of individuality. Our journey began in [Year], driven by a passion for creating high-quality, stylish, and sustainable clothing that empowers people to express themselves confidently."</p>
<p>Our mission is to offer timeless, elegant, and comfortable clothing that speaks to the unique style of every individual. We are committed to sustainability and ethical practices, ensuring that every piece is crafted with care for both the environment and the communities we work with."</p>
<b className='text-gray-800'>Our Mission</b>
<p>Our mission is to offer timeless, elegant, and comfortable clothing that speaks to the unique style of every individual. We are committed to sustainability and ethical practices, ensuring that every piece is crafted with care for both the environment and the communities we work with."</p>
</div>
      </div>
      
    </div>
  )
}

export default About