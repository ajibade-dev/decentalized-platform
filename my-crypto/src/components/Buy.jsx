import React from 'react'
import shiba from '../assets/shiba.png'
import together1 from '../assets/together1.png'
import together from '../assets/together.png'
import eth from '../assets/eth.png'
import metamask from '../assets/metamask.png'
import illustration from '../assets/illustration.png'
import { motion } from "framer-motion"




const Buy = () => {
  return (
    <div className='flex w-full h-full flex-col-reverse md:flex-row gap-5 px-8 md:py-24 py-12 bg-[#1A2156] items-center' id='buy'>

{/*  to hold the sections i.e the containers for the cards */}
    <div className='flex flex-col gap-10 w-full md:w-1/2 px-2 md:px-12'>

        {/* div holding the shiba and text */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {opacity: 1, x: 0 }
            }}
        className='flex flex-row gap-3 w-full md:w-[500px]'>
            {/* for the shiba image */}
        <div className='md:h-[137px] md:w-[129px] w-[80px] h-[50px] flex items-center justify-center'>
           <img src={shiba} alt="shiba" />
         </div>
            {/* for the text by the side */}
            <div className='flex flex-col md:gap-6 justify-center'>
                <h3 className='font-display text-2xl md:text-[50px] font-semibold text-gray-600'>Buy</h3>

                <h2 className='font-display text-xl md:text-[50px] font-semibold text-white'>How To Buy</h2>
            </div>

        </motion.div>
            {/* div for the cards */}
            {/* card 1 */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay:0.2, duration: 0.5 }}
           variants={{
               hidden: { opacity: 0, x: -50 },
               visible: {opacity: 1, x: 0 }
           }}
        className='w-full h-full md:max-w-[1000px] bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col px-4 py-8 rounded-lg gap-3'>

            {/* for the upper part of the div */}
            <div className='flex flex-row items-center gap-3 w-full'>
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
        </motion.div>

            {/* card 2 */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.4, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 }
                }}
            className='w-full h-full md:max-w-[1000px] bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col px-4 py-8 rounded-lg gap-3'>

        {/* for the upper part of the div */}
        <div className='flex flex-row items-center gap-3 w-full'>
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
</motion.div>

            {/* card 3 */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.6, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {opacity: 1, x: 0 }
            }}
        className='w-full h-full md:max-w-[1000px] bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col px-4 py-8 rounded-lg gap-3'>

                {/* for the upper part of the div */}
                <div className='flex flex-row items-center gap-3'>
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
                </motion.div>


                    {/* div for the cards */}
            {/* card 4 */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.8, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {opacity: 1, x: 0 }
            }}
        className='w-full h-full md:max-w-[1000px] bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col px-4 py-8 rounded-lg gap-3'>

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
</motion.div>
    </div>

    {/* for the big image on the side */}

    <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay:0.4, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {opacity: 1, x: 0 }
        }}
    className='w-full h-full md:w-1/2 mx-auto flex justify-center items-center'>


<div className=' w-full h-full flex items-center justify-center'>
           <img src={illustration} alt="shiba" />
         </div>
    </motion.div>

    
    </div>
  )
}

export default Buy