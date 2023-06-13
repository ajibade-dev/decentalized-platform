import React from 'react'
import third2 from '../assets/third2.png'
import unicorn from '../assets/unicorn.png'
import smiley from '../assets/smiley.png'
import dex from '../assets/dex.png'

const ListMetrics = () => {
  return (
    // div holding all together
    <div className='flex flex-col items-center h-full w-full gap-4 bg-[#1A2156] px-8 py-8'>
        {/* <div className='w-full h-full flex items-center justify-center'>
                  <img src={third2} alt="spaceship" />
                  </div> */}
                  {/* Div holding the top title and the images  */}
                  <div className='flex flex-col gap-12 w-full h-full items-center justify-center'>
                        <h3 className='flex justify-center mx-auto items-center text-slate-500 font-display text-4xl'>
                            Listed On
                        </h3>
                        {/* div holding the images and text */}
                        <div className='flex flex-col items-center md:flex-row gap-20 md:gap-16 md:mx-0 justify-center'>
                            {/* div holding the card */}

                            {/* Card 1 */}
                        <div className='flex flex-col items-center gap-2'>
                            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={smiley} alt="spaceship" />

                  </div>
                  <h3 className='flex text-white font-display text-xl'>
                            Pinksale(presale)
                        </h3>
                        </div>

                        {/* Card 2 */}

                        <div className='flex flex-col items-center gap-2'>
                            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={dex} alt="spaceship" />

                  </div>
                  <h3 className='flex text-white font-display text-xl pt-10'>
                            Dextools(After Launch)
                        </h3>
                        </div>

                        {/* Card 3 */}

                        <div className='flex flex-col items-center gap-2 -mt-6'>
                            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={unicorn} alt="spaceship" />

                  </div>
                  <h3 className='flex text-white font-display text-xl'>
                            Uniswap (After Launch)
                        </h3>
                        </div>

                        </div>
                  </div>
    </div>
  )
}

export default ListMetrics