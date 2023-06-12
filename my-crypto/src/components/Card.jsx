import React from 'react'
import spaceship from '../assets/spaceship.png'
import line from '../assets/line.png'
import spacebunny from '../assets/spacebunny.png'
import spacedog from '../assets/spacedog.png'

const Card = () => {
  return (
    <div className='w-full h-[1700px] flex flex-col md:flex-row gap-24 md:gap-8 bg-[#1A2156] px-6 py-12 items-center'>
            {/*Card 1  */}
            <div className='h-[350px] w-3/4 md:w-1/3 rounded-lg bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center'>
                {/* spaceship */}
            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={spaceship} alt="spaceship" />
                  </div>
                  {/* text */}
                  <h2 className='text-3xl font-normal font-display text-slate-400 mt-[-60px]'>Market</h2>
                  <div className='mt-4 flex items-center justify-center'>
                  <img src={line} alt="spaceship" />
                  </div>
                  <div className='flex items-center justify-center mt-3 px-8'>
                    <p className='text-normal text-slate-400 font-display leading-8'>
                        $$SPACESHIBA will focus on getting listed on various centralized and decentralized exchanges. This will increase accesibility and liquidity for
                    </p>
                  </div>
            </div>

               {/*Card 2  */}
               <div className='h-[350px] w-3/4 md:w-1/3 rounded-lg bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center mt-20'>
                {/* spaceship */}
            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={spacebunny} alt="spaceship" />
                  </div>
                  {/* text */}
                  <h2 className='text-3xl font-normal font-display text-slate-400 mt-[-60px]'>Community</h2>
                  <div className='mt-4 flex items-center justify-center'>
                  <img src={line} alt="spaceship" />
                  </div>
                  <div className='flex items-center justify-center mt-3 px-8'>
                    <p className='text-normal text-slate-400 font-display leading-8'>
                        The project will actively engage with the community through social media platforms such as Twitter and Telegram. These platforms will serve as channels for
                    </p>
                  </div>
            </div>

               {/*Card 3  */}
               <div className='h-[350px] w-3/4 md:w-1/3 rounded-lg bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center mt-20'>
                {/* spaceship */}
            <div className='w-60 h-25 flex items-center justify-center'>
                  <img src={spacedog} alt="spaceship" />
                  </div>
                  {/* text */}
                  <h2 className='text-3xl font-normal font-display text-slate-400 mt-[-60px]'>Security</h2>
                  <div className='mt-4 flex items-center justify-center'>
                  <img src={line} alt="spaceship" />
                  </div>
                  <div className='flex items-center justify-center mt-3 px-8'>
                    <p className='text-normal text-slate-400 font-display leading-8'>
                        We attach great importance to the security of the users and investors. Contract will be verified and renounced before launch. Team will do everything to make sure your money is safe.
                    </p>
                  </div>
            </div>
    </div>
  )
}

export default Card