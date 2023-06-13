import React from 'react'
import third2 from '../assets/third2.png'
import rotate from '../assets/rotate.png'
const Metrics = () => {
  return (
    // the background image
    <div className='w-full h-[800px] flex items-center justify-center px-10 mx-auto py-10 md:py-20' style={{
        backgroundImage: `url(${third2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* the div holding the inner containers */}
        <div className='flex flex-col md:flex-row px-12 py-6 w-full md:w-2/3 bg-gradient-to-b from-blue-900 to-blue-950 gap-12 md:gap-32 items-center md:items-start rounded-lg'>
            {/* div for the side image */}
            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={rotate} alt="rotate" />
                  </div>

                  {/* div for the writing on the side */}
                  <div className='flex flex-col gap-5'>
                    <h2 className='font-display font-semibold text-3xl text-white'>Space Shiba <span className='text-blue-500'>Metrics</span></h2>
                    {/* div for the listing */}
                    <div className='flex flex-row gap-20'>
                        <div className='flex flex-col gap-3'>
                            <p className='font-display text-gray-500'>Supply</p>
                            <p className='font-display text-gray-500'>Presale Price</p>
                            <p className='font-display text-gray-500'>Listing Price</p>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h4 className='font-display text-xl text-white'>
                                1 Trillion $SPCSHIB
                            </h4>
                            <h4 className='font-display text-xl text-white'>
                                0.00002980
                            </h4>
                            <h4 className='font-display text-xl text-white'>
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