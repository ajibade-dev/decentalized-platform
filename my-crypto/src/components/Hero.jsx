import React from 'react'
import Navbar from './Navbar'
import third2 from '../assets/third2.png'
import shiba from '../assets/shiba.png'
import curve from '../assets/curve.png'
import { motion } from "framer-motion"


const Hero = () => {
  return (
  
  <div className='bg-[#1A2156] w-full h-full' id='home'>
          <div className="h-[650px] md:h-[1200px] pb-10  pt-20" style={{
        backgroundImage: `url(${third2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
            <Navbar />
            <div className='flex flex-col mx-auto justify-center items-center md:mt-24 mt-12 w-full md:gap-7 gap-3 md:p-0 px-2'>
                <div className='w-[100%] md:mx-0 md:w-[875px] flex items-center justify-center'>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: {opacity: 1, x: 0 }
                  }}
                className='text-white text-2xl md:text-4xl font-display font-bold text-center'><h1 className='font-bold md:text-[45px] text-3xl'>
                A Decentralized Meme Token that evolved into a galactic ecosystem</h1>
                </motion.div>
                </div>

               <div className='w-[100%] md:mx-0 md:w-[1083px]'>
               <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 }
                }}
               className='text-slate-200 font-display md:text-base text-center'> <p className='md:text-[20px] md:leading-8 md:font-medium font-thin text-sm leading-2'>Welcome to $SPCSHIB, the ultimate meme token for the crypto community! $SPCSHIB is a fun and exciting way to participate in the world of cryptocurrency while also showing off your love for memes. With $SPCSHIB, you can enjoy all the benefits of a decentralized currency while also sharing laughs and good vibes with other investors</p>  </motion.div>
                </div> 

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 1.0 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {opacity: 1, y: 0 }
                  }}
                className='flex-col md:flex-row justify-center items-center'>

                <button type="button" className="text-white bg-gradient-to-r from-orange-200 to-purple-400 rounded-lg md:px-10 md:py-[20px] px-6 py-2  text-center mr-3 hover:bg-white hover:text-blue-950 hover:border-black duration-200 font-display md:text-[20px] text-base">How to Buy</button>
                
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative md:px-12 md:py-[20px] px-6 py-2 transition-all ease-in duration-7 bg-slate-900 rounded-md group-hover:bg-opacity-0 font-display md:text-[20px] text-base text-white">
                    Whitepaper
                </span></button>
                </motion.div>

                {/* Image of the dog */}
                <div className='mx-auto flex justify-center items-center md:mt-10 mt-0 z-10'>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {opacity: 1, x: 0 }
                    }}
                  className='md:w-[25%] h-60 w-40 mt-[-16px] md:mt-0'>
                  <img src={shiba} alt="shiba" />
                  </motion.div>
                
                </div>
            </div>
        </div>

        <div className='w-full h-full md:mt-20 -mt-14 lg:mt-[10px]'>
                  <img src={curve} alt="curve" className='md:-mt-[200px] md:w-[150%] w-full'/>
                  </div>
        </div>
  )
}

export default Hero