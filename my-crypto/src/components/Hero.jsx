import React from 'react'
import Navbar from './Navbar'
import third2 from '../assets/third2.png'
import shiba from '../assets/shiba.png'



const Hero = () => {
  return (
  
  
          <div className="h-[800px] pb-10 md:pb-96" style={{
        backgroundImage: `url(${third2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
            <Navbar />
            <div className='flex flex-col mx-auto justify-center items-center mt-10 w-full gap-7 md:p-0 px-2'>
                <div className='w-[100%] md:mx-0 md:w-1/2'>
                <div className='text-white text-4xl font-display font-bold text-center'> Unlock the Future of Finance with our Revolutionary Crypto Platform</div>
                </div>

               <div className='w-[100%] md:mx-0 md:w-1/2'>
               <div className='text-slate-200 font-display font-sm text-center'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>
                </div> 

                <div className='flex-col md:flex-row mx-auto justify-center items-center'>

                <button type="button" className="text-white bg-gradient-to-r from-orange-200 to-purple-400 rounded-lg px-8 py-4 text-center mr-3 hover:bg-white hover:text-blue-950 hover:border-black duration-200 font-display">How to Buy</button>
                
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-14 py-4 transition-all ease-in duration-7 bg-slate-900 rounded-md group-hover:bg-opacity-0 font-display">
                    Swap
                </span></button>
                </div>

                {/* Image of the dog */}
                <div className='mx-auto flex justify-center items-center'>
                  <div className='w-40 h-50 mt-[-20px]'>
                  <img src={shiba} alt="shiba" />
                  </div>
                
                </div>
            </div>
        </div>
  )
}

export default Hero