import React from 'react'
import Navbar from './Navbar'
import third from '../assets/third.png'


const Hero = () => {
  return (
    <div>
          <div className="h-[600px]" style={{
        backgroundImage: `url(${third})`,
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

                {/* <button type="button" className="border-gradient text-white border font-medium rounded-lg text-sm px-4 py-4 text-center mr-3 hover:bg-white hover:text-blue-950 hover:border-black duration-200 font-display">
                  Swap 
                </button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero