import React from 'react'
import token from '../assets/token.png'
const Tokenomics = () => {
  return (
    <div className='flex w-full h-full flex-col gap-10 bg-[#1A2156] py-6 px-12 items-center justify-center'>

<h2 className='relative md:text-[87px] text-[30px] font-bold text-gray-700 mt-[300px] md:mt-10'>
TOKENOMICS
<h2 className='absolute md:text-[60px] text-base font-display font-semibold text-white md:top-16 md:left-24 top-4 left-10'>
    TOKENOMICS
    </h2>

</h2>

            <div className=' w-[400px] md:w-2/3 h-full flex items-center justify-center'>
           <img src={token} alt="spaceship"/>
               </div>

    </div>
  )
}

export default Tokenomics