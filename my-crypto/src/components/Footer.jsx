import React from 'react'
import twit from '../assets/twit.png'
import face from '../assets/face.png'
import insta from '../assets/insta.png'

const Footer = () => {
  return (
    <>
    <div className='w-full h-full px-12 py-12 bg-[#1A2156] flex flex-row gap-5 justify-center border-t-2 border-[#0DB3E5]'>
    
    {/* for insta */}
    <a href="" className="flex items-center">

<div className=' w-[60px] h-[60px] flex items-center justify-center'>
            <img src={insta} alt="shiba" />
            </div>
</a>

{/* for facebook */}
<a href="" className="flex items-center">

<div className=' w-[60px] h-[60px] flex items-center justify-center'>
            <img src={face} alt="shiba" />
            </div>
</a>

{/* for twitter */}

<a href="" className="flex items-center">

<div className=' w-[60px] h-[60px] flex items-center justify-center'>
            <img src={twit} alt="shiba" />
            </div>
</a>

    </div>
    
    {/* for the little green bar down */}
    <div className='bg-[#0DB3E5] w-full h-full flex items-center justify-center px-3 py-3'>
        <h4 className='font-display text-normal text-black'>All Rights Reserved.</h4>
    </div>
    </>
  )
}

export default Footer