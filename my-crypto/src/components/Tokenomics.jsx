import React from 'react'
import token from '../assets/token.png'
const Tokenomics = () => {
  return (
    <div className='flex w-full h-full flex-col gap-10 bg-[#1A2156] py-6 px-12 items-center justify-center'>

            <h2 className='text-3xl font-display font-semibold text-white'>
            TOKENOMICS
            </h2>

            <div className=' w-[400px] md:w-2/3 h-full flex items-center justify-center'>
           <img src={token} alt="spaceship"/>
               </div>

    </div>
  )
}

export default Tokenomics