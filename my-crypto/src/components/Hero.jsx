import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
          <div class="h-[600px] bg-gradient-to-r from-purple-600 to-blue-600">
            <Navbar />
            <div className='flex flex-col mx-auto justify-center items-center mt-10 md:w-1/2 w-full gap-7 md:p-0 px-5'>
                <div className='text-white text-3xl font-display font-bold text-center'> A Decentralized Meme Token that evolved into a galactic ecosystem</div>

                <div className='text-gray-700 font-display font-sm text-center'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>
            </div>
        </div>
    </div>
  )
}

export default Hero