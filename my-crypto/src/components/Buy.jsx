import React from 'react'
import shiba from '../assets/shiba.png'
import together1 from '../assets/together1.png'
import together from '../assets/together.png'
import eth from '../assets/eth.png'
import metamask from '../assets/metamask.png'
import illustration from '../assets/illustration.png'


const Buy = () => {
  return (
    <div className='flex w-full h-full flex-col-reverse md:flex-row gap-5 px-8 md:py-24 py-12 bg-[#1A2156] items-center' id='buy'>

{/*  to hold the sections i.e the containers for the cards */}
    <div className='flex flex-col gap-10 w-full md:w-2/3 px-2 md:px-12 mx-10'>

        {/* div holding the shiba and text */}
        <div className='flex flex-row gap-3 w-full md:w-[500px]'>
            {/* for the shiba image */}
        <div className='md:h-[137px] md:w-[129px] w-[80px] h-[50px] flex items-center justify-center'>
           <img src={shiba} alt="shiba" />
         </div>
            {/* for the text by the side */}
            <div className='flex flex-col md:gap-6 justify-center'>
                <h3 className='font-display text-2xl md:text-[50px] font-semibold text-gray-600'>Buy</h3>

                <h2 className='font-display text-xl md:text-[50px] font-semibold text-white'>How To Buy</h2>
            </div>

        </div>
            {/* div for the cards */}
            {/* card 1 */}
        <div className='w-full h-full bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col px-4 py-8 rounded-lg gap-3'>

            {/* for the upper part of the div */}
            <div className='flex flex-row items-center gap-3 md:w-[381px]'>
                <h1 className='font-display text-2xl font-semibold text-white md:text-[30px]'>01</h1>
                <div className=' w-[60px] h-[50px] flex items-center justify-center'>
           <img src={metamask} alt="shiba" />
         </div>
         <h1 className='font-display text-xl md:text-[30px] font-semibold text-white'>Create metamask</h1>
            </div>

            {/* for the lower part of the div */}
            <div className='flex flex-row items-center'>
                <p className='text-slate-400 text-sm md:text-[25px] md:leading-8 font-display'>
                    Create a metamask wallet using either a desktop computer or an IOS/Android Mobile device. That will allow you to buy, sell, and receive $SPCSHIB in presale and after the launch.
                </p>
            </div>
        </div>

            {/* card 2 */}
            <div className='w-full h-full bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col px-4 py-8 rounded-lg gap-3'>

        {/* for the upper part of the div */}
        <div className='flex flex-row items-center gap-3 md:w-[381px]'>
            <h1 className='font-display text-2xl font-semibold text-white md:text-[26px]'>02</h1>
            <div className=' w-[30px] h-[25px] flex items-center justify-center'>
        <img src={eth} alt="shiba" />
        </div>
        <h1 className='font-display text-xl font-semibold text-white md:text-[26px]'>Send $ETH TO Metamask</h1>
        </div>

        {/* for the lower part of the div */}
        <div className='flex flex-row items-center'>
            <p className='text-slate-400 text-sm font-display md:text-[25px] md:leading-8'>
               You can buy $ETH directly on Metamask or transfer it to your Metamask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use  the ERC-20 network when transfering ETH
            </p>
</div>
</div>

            {/* card 3 */}
        <div className='w-full h-full bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col px-4 py-8 rounded-lg gap-3'>

                {/* for the upper part of the div */}
                <div className='flex flex-row items-center gap-3 md:w-[381px]'>
                    <h1 className='font-display text-2xl font-semibold text-white md:text-[25px]'>03</h1>
                    <div className=' w-[60px] h-[50px] flex items-center justify-center'>
                <img src={together} alt="shiba" />
                </div>
                <h1 className='font-display text-xl font-semibold text-white md:text-[25px]'>Connect to Pinksale/Uniswap</h1>
                </div>

                {/* for the lower part of the div */}
                <div className='flex flex-row items-center'>
                    <p className='text-slate-400 text-sm font-display md:text-[25px] md:leading-8'>
                        Access your wallet to Pinksale and after launch to Uniswap by clicking "Connect to Wallet" and selecting MetaMask.
                    </p>
                </div>
                </div>


                    {/* div for the cards */}
            {/* card 4 */}
        <div className='w-full h-full bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col px-4 py-8 rounded-lg gap-3'>

                {/* for the upper part of the div */}
                <div className='flex flex-row items-center gap-3'>
                    <h1 className='font-display text-2xl font-semibold text-white md:text-[25px]'>04</h1>
                    <div className=' w-[60px] h-[50px] flex items-center justify-center'>
                <img src={together1} alt="shiba" />
                </div>
                <h1 className='font-display text-xl font-semibold text-white md:text-[25px]'>Swap $ETH for $SPCSHIB</h1>
                </div>

                {/* for the lower part of the div */}
                <div className='flex flex-row items-center'>
                    <p className='text-slate-400 text-sm font-display md:text-[25px] md:leading-8'>
                       You can start swapping as soon as you have $ETH available. Press "Select a token" and enter the token address or search directly through the links from twitter or telegram.
                    </p>
</div>
</div>
    </div>

    {/* for the big image on the side */}

    <div className='w-full h-full mx-auto flex justify-center items-center'>


<div className=' w-full h-full flex items-center justify-center mx-auto'>
           <img src={illustration} alt="shiba" />
         </div>
    </div>

    
    </div>
  )
}

export default Buy