import React from 'react'
import curve from '../assets/curve.png'
import shiba from '../assets/shiba.png'
import side from '../assets/side image.png'
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className='flex flex-col w-full h-full '>

          <div className='h-full w-full flex flex-col md:flex-row px-6 py-12 bg-[#1A2156] gap-10 md:gap-0'>
            <div className='flex flex-col w-full mx-auto md:mx-20 gap-3 justify-center'>
                {/* div holdiing shiba and text on the side */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: {opacity: 1, x: 0 }
                  }}
                className='flex flex-row gap-3 mx-auto md:mx-0 justify-center'
                >
                    {/* shiba div */}
                <div className='w-40 h-30 flex items-center justify-center'>
                  <img src={shiba} alt="shiba" />
                  </div>
                  
                  {/* text div */}
                  <div className='flex flex-col w-full justify-center'
                  >
                    <h1 className='font-extrabold font-display md:text-[50px] text-3xl text-[#393E65]'>Revolutionary</h1>

                    <div className='flex flex-row mt-5'>
                        <h2 className='font-display font-bold text-sm md:text-[40px] text-white'>Space shiba <span className='text-[#218CEC]'>Ecosystem</span></h2>
                       

                    </div>

                  </div>
                </motion.div>

                {/* div to hold the small text at the bottom */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {opacity: 1, y: 0 }
                  }}
                className='w-[400px] md:w-[600px] '>
                    <p className='text-slate-400 font-medium text-sm md:text-[25px] leading-9'>
                        $SPACESHIBA is a meme coin that strives to merge humor, community and blockchain technology to create a novel experience for cryptocurrency enthusiasts. By building on the Ethereum blockchain, $SPACESHIBA benefits from
                    </p>
                </motion.div>

            </div>

            {/* div holding the side image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {opacity: 1, x: 0 }
              }}
            className='w-[80%] h-[80%] flex items-center justify-center mx-auto md:mr-20'>
                  <img src={side} alt="shiba" />
                  </motion.div>
            </div>        
    </div>
  )
}

export default About