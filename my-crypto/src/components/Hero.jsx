import React from 'react'
import Navbar from './Navbar'
import third2 from '../assets/third2.png'
import shiba from '../assets/shiba.png'
import curve from '../assets/curve.png'


const Hero = () => {
  return (
  
  <div className='bg-[#1A2156] w-full h-full relative'>
          <div className="h-[650px] md:h-[1200px] pb-10 md:pb-20 pt-20" style={{
        backgroundImage: `url(${third2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
            <Navbar />
            <div className='flex flex-col mx-auto justify-center items-center mt-24 w-full gap-7 md:p-0 px-2'>
                <div className='w-[100%] md:mx-0 md:w-1/2'>
                <div className='text-white text-2xl md:text-4xl font-display font-bold text-center'> Unlock the Future of Finance with our Revolutionary Crypto Platform</div>
                </div>

               <div className='w-[100%] md:mx-0 md:w-1/2'>
               <div className='text-slate-200 font-display font-sm text-sm md:text-base text-center'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>
                </div> 

                <div className='flex-col md:flex-row mx-auto justify-center items-center'>

                <button type="button" className="text-white bg-gradient-to-r from-orange-200 to-purple-400 rounded-lg md:px-10 md:py-4 px-6 py-2  text-center mr-3 hover:bg-white hover:text-blue-950 hover:border-black duration-200 font-display">How to Buy</button>
                
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative md:px-10 md:py-4 px-6 py-2  transition-all ease-in duration-7 bg-slate-900 rounded-md group-hover:bg-opacity-0 font-display">
                    Whitepaper
                </span></button>
                </div>

                {/* Image of the dog */}
                <div className='mx-auto flex justify-center items-center md:mt-10 mt-0'>
                  <div className='md:w-[25%] h-60 w-40 mt-[-30px] md:mt-0'>
                  <img src={shiba} alt="shiba" />
                  </div>
                
                </div>
            </div>
        </div>

        <div className='w-full h-full -mt-16 md:mt-[10px]'>
                  <img src={curve} alt="curve" className='md:-mt-[200px] w-[150%]'/>
                  </div>
        </div>
  )
}

export default Hero