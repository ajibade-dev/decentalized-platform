import React from 'react'
import third3 from '../assets/third3.jpeg'
import rotate from '../assets/rotate.png'
import Timer from './Timer'
import Clipboard from './Clipboard'
import { motion } from "framer-motion"

const Metrics = () => {
  return (
    // the background image
    <div className='w-full md:h-[1000px] h-[600px] flex items-center justify-center px-10 md:py-24 flex-col gap-10' style={{
        backgroundImage: `url(${third3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

        <Timer duration={15 * 24 * 60 * 60 * 1000} />
        <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {opacity: 1, x: 0 }
            }}
        className='relative md:text-[87px] text-[30px] font-bold text-gray-700 mt-[10px] md:mt-10'>
            PRESALE
        <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {opacity: 1, x: 0 }
            }}
        className='absolute md:text-[60px] text-base font-display font-semibold text-white md:top-16 md:left-16 top-4 left-10'>
            PRESALE
            </motion.h2>

</motion.h2>

        <Clipboard />
        {/* the div holding the inner containers */}
        <div className='flex flex-col md:flex-row px-12 py-12 w-full  md:w-[1023px] bg-gradient-to-b from-blue-900 to-blue-950 gap-12 md:gap-32 items-center justify-around md:items-start rounded-xl'>
            {/* div for the side image */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1,duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 }
                }}
            className='md:w-60 md:h-25 w-40 h-25 flex'>
                  <img src={rotate} alt="rotate" />
                  </motion.div>

                  {/* div for the writing on the side */}
                  
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {opacity: 1, x: 0 }
                    }}
                  className='flex flex-col gap-5'>
                    <h2 className='font-display font-semibold md:text-[40px] text-white text-2xl'>Space Shiba<span className='text-blue-500'> Metrics</span></h2>

                    {/* div for the listing */}
                    <div className='flex flex-row gap-10 items-center justify-center'>
                        <div className='flex flex-col gap-3 md:w-[259px] w-2/3'>
                            <p className='font-display text-gray-500 md:text-[22px]'>Supply</p>
                            <p className='font-display text-gray-500 md:text-[22px]'>Presale Price</p>
                            <p className='font-display text-gray-500 md:text-[22px]'>Listing Price</p>
                        </div>

                        <div className='flex flex-col gap-3 md:justify-center'>
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
                    </motion.div>
                  </div>
        </div>

  )
}

export default Metrics