import React from 'react'
import road from '../assets/road.png'
import { motion } from "framer-motion"

const Roadmap = () => {
  return (
    <div className='flex w-full h-full flex-col gap-10 bg-[#1A2156] py-6 px-12 items-center justify-center' id='ecosystem'>


<motion.h2 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
      hidden: { opacity: 0, x: -50 },
      visible: {opacity: 1, x: 0 }
  }}
className='relative md:text-[87px] text-[30px] font-bold text-gray-700 dark:text-gray-800'>
ROADMAP
<motion.h2 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
      hidden: { opacity: 0, x: -50 },
      visible: {opacity: 1, x: 0 }
  }}
className='absolute md:text-[60px] text-base font-display font-semibold text-white dark:text-white md:top-16 md:left-24 top-4 left-10'>
    ROADMAP
    </motion.h2>

</motion.h2>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {opacity: 1, y: 0 }
      }}
    className=' w-[400px] md:w-2/3 h-full flex items-center justify-center '>
   <img src={road} alt="spaceship" />
                    </motion.div>

</div>
  )
}

export default Roadmap