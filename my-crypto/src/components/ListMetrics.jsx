import React from 'react'
import third2 from '../assets/third2.png'
import unicorn from '../assets/unicorn.png'
import smiley from '../assets/smiley.png'
import dex from '../assets/dex.png'
import { motion } from "framer-motion"

const ListMetrics = () => {
  return (
    // div holding all together
    <div className='flex flex-col items-center h-full w-full gap-4 bg-[#1A2156] px-8 py-8'>
        {/* <div className='w-full h-full flex items-center justify-center'>
                  <img src={third2} alt="spaceship" />
                  </div> */}
                  {/* Div holding the top title and the images  */}
                  <div className='flex flex-col gap-12 w-full h-full items-center justify-center -mt-20 md:-mt-0'>
                  <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {opacity: 1, x: 0 }
                    }}
                  className='relative md:text-[87px] text-[30px] font-bold text-gray-700 mt-32 md:mt-0'>
                    LISTED ON
                    <motion.h2 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {opacity: 1, x: 0 }
                        }}
                    className='absolute md:text-[60px] text-base font-display font-semibold text-white md:top-16 md:left-24 top-4 left-10'>
                        LISTED ON
                        </motion.h2>

                    </motion.h2>
                        {/* div holding the images and text */}
                        <div className='flex flex-col items-center md:flex-row gap-20 md:gap-16 md:mx-0 justify-center'>
                            {/* div holding the card */}

                            {/* Card 1 */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: {opacity: 1, x: 0 }
                            }}
                        className='flex flex-col items-center gap-2'>
                            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={smiley} alt="spaceship" />

                  </div>
                  <h3 className='flex text-white font-display text-xl'>
                            Pinksale(presale)
                        </h3>
                        </motion.div>

                        {/* Card 2 */}

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: {opacity: 1, x: 0 }
                            }}
                        className='flex flex-col items-center gap-2'>
                            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={dex} alt="spaceship" />

                  </div>
                  <h3 className='flex text-white font-display text-xl pt-10'>
                            Dextools(After Launch)
                        </h3>
                        </motion.div>

                        {/* Card 3 */}

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay:0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: {opacity: 1, x: 0 }
                            }}
                        className='flex flex-col items-center gap-2 -mt-6'>
                            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={unicorn} alt="spaceship" />

                  </div>
                  <h3 className='flex text-white font-display text-xl'>
                            Uniswap (After Launch)
                        </h3>
                        </motion.div>

                        </div>
                  </div>
    </div>
  )
}

export default ListMetrics