import React from 'react'
import curve from '../assets/curve.png'
import shiba from '../assets/shiba.png'
import side from '../assets/side image.png'

const About = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='w-full h-full mt-[-80px]'>
                  <img src={curve} alt="curve" />
                  </div>

          <div className='h-full w-full flex flex-col md:flex-row px-6 py-12 bg-[#1A2156] gap-10 md:gap-0'>
            <div className='flex flex-col w-full mx-auto md:mx-10 gap-3 justify-center'>
                {/* div holdiing shiba and text on the side */}
                <div className='flex flex-row gap-3 mx-auto md:mx-0 justify-center'>
                    {/* shiba div */}
                <div className='w-40 h-30 flex items-center justify-center'>
                  <img src={shiba} alt="shiba" />
                  </div>
                  {/* text div */}
                  <div className='flex flex-col w-full justify-center'>
                    <h1 className='font-extrabold font-display text-4xl text-[#393E65]'>Revolutionary</h1>

                    <div className='flex flex-row'>
                        <h2 className='font-display font-bold text-sm md:text-xl text-white'>Space shiba <span className='text-[#218CEC]'>Ecosystem</span></h2>
                       

                    </div>

                  </div>
                </div>

                {/* div to hold the small text at the bottom */}
                <div className='w-full md:w-[600px] '>
                    <p className='text-slate-400 font-medium'>
                        $SPACESHIBA is a meme coin that strives to merge humor, community and blockchain technology to create a novel experience for cryptocurrency enthusiasts. By building on the Ethereum blockchain, $SPACESHIBA benefits from
                    </p>
                </div>

            </div>

            {/* div holding the side image */}
            <div className='w-[80%] h-[80%] flex items-center justify-center mx-auto'>
                  <img src={side} alt="shiba" />
                  </div>
            </div>        
    </div>
  )
}

export default About