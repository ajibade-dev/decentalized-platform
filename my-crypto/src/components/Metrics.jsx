import React from 'react'
import third3 from '../assets/third3.png'
import rotate from '../assets/rotate.png'
const Metrics = () => {
  return (
    // the background image
    <div className='w-full md:h-[800px] h-[600px] flex items-center justify-center px-10 md:py-20' style={{
        backgroundImage: `url(${third3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* the div holding the inner containers */}
        <div className='flex flex-col md:flex-row px-12 py-12 w-full md:w-2/3 bg-gradient-to-b from-blue-900 to-blue-950 gap-12 md:gap-32 items-center md:items-start rounded-xl'>
            {/* div for the side image */}
            <div className='md:w-60 md:h-25 w-40 h-25 flex'>
                  <img src={rotate} alt="rotate" />
                  </div>

                  {/* div for the writing on the side */}
                  
                  <div className='flex flex-col gap-5'>
                    <h2 className='font-display font-semibold md:text-3xl text-white text-2xl'>Space Shiba<span className='text-blue-500'> Metrics</span></h2>

                    {/* div for the listing */}
                    <div className='flex flex-row gap-10 items-center justify-center'>
                        <div className='flex flex-col gap-3 '>
                            <p className='font-display text-gray-500'>Supply</p>
                            <p className='font-display text-gray-500'>Presale Price</p>
                            <p className='font-display text-gray-500'>Listing Price</p>
                        </div>

                        <div className='flex flex-col gap-3 justify-center'>
                            <h4 className='font-display md:text-xl text-white'>
                                1 Trillion $SPCSHIB
                            </h4>
                            <h4 className='font-display md:text-xl text-white'>
                                0.00002980
                            </h4>
                            <h4 className='font-display md:text-xl text-white'>
                                0.00003260
                            </h4>
                        </div>

                         
                        </div>
                    </div>
                  </div>
        </div>

  )
}

export default Metrics