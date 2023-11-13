import React from 'react'
import spaceship from '../assets/spaceship.png'
import line from '../assets/line.png'
import spacebunny from '../assets/spacebunny.png'
import spacedog from '../assets/spacedog.png'
import { motion } from "framer-motion"

const Card = () => {
  return (
    <div className='w-full h-full flex flex-col md:flex-row gap-10 md:gap-8 bg-[#1A2156] px-6 py-12 flex-wrap items-center' id='community'>

      <div className='flex flex-col md:flex-row gap-10 mx-auto  md:flex-wrap lg:flex-nowrap items-center'>

          {/*Card 1  */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {opacity: 1, y: 0 }
            }}
          className='md:h-[457px] h-full max-w-[308px] md:max-w-[408px] rounded-lg bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center mt-20'>
                {/* spaceship */}
            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={spaceship} alt="spaceship" />
                  </div>
                  {/* text */}
                  <h2 className='text-[30px] font-bold font-display text-slate-400 mt-[-60px]'>Market</h2>
                  <div className='mt-4 flex items-center justify-center'>
                  <img src={line} alt="spaceship" />
                  </div>
                  <div className='flex items-center justify-center mt-3 px-8'>
                    <p className='md:text-normal text-[22px] text-slate-400 font-display leading-6 md:leading-10'>
                    $SPACESHIBA will focus on getting listed on various centralized and decentralized exchanges. This will increase accessibility and liquidity for
                    </p>
                  </div>
            </motion.div>


          
             

               {/*Card 2  */}
               <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.3, duration: 0.6 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {opacity: 1, y: 0 }
                }}
               className=' md:h-[457px] h-full max-w-[308px] md:max-w-[408px] rounded-lg bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center mt-20'>
                {/* spaceship */}
            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={spacebunny} alt="spaceship" />
                  </div>
                  {/* text */}
                  <h2 className='text-[30px] font-bold font-display text-slate-400 mt-[-60px]'>Community</h2>
                  <div className='mt-4 flex items-center justify-center'>
                  <img src={line} alt="spaceship" />
                  </div>
                  <div className='flex items-center justify-center mt-3 px-8'>
                    <p className='md:text-normal text-[22px] text-slate-400 font-display leading-6 md:leading-10'>
                        The project will actively engage with the community through social media platforms such as Twitter and Telegram. These platforms will serve as channels for
                    </p>
                  </div>
            </motion.div>

               {/*Card 3  */}
               <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay:0.6, duration: 0.6 }}
               variants={{
                   hidden: { opacity: 0, y: 50 },
                   visible: {opacity: 1, y: 0 }
               }}
               className='h-full md:h-[457px] max-w-[308px] md:max-w-[408px] rounded-lg bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center mt-20'>
                {/* spaceship */}
            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={spacedog} alt="spaceship" />
                  </div>
                  {/* text */}
                  <h2 className='text-[30px] font-bold  font-display text-slate-400 mt-[-60px]'>Security</h2>
                  <div className='mt-4 flex items-center justify-center'>
                  <img src={line} alt="spaceship" />
                  </div>
                  <div className='flex items-center justify-center mt-3 px-8 mx-auto'>
                    <p className='md:text-normal text-[22px] text-slate-400 font-display leading-6 md:leading-10 items-center justify-center flex'>
                        We attach great importance to the security of the users and investors. Contract will be verified and renounced before launch. Team will do everything to make sure your money is safe.
                    </p>
                  </div>
            </motion.div>
        
      </div>
     
    </div>
  )
}

export default Card