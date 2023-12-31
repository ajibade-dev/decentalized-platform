import React, {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { motion } from 'framer-motion';

const Clipboard = () => {

    const [value, setValue] = useState('');
    const [copied, setCopied] = useState(false)
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    variants={{
        hidden: { opacity: 0, x: -50 },
        visible: {opacity: 1, x: 0 }
    }}
    className='flex flex-row gap-5 bg-[#36358F] md:w-[700px] w-[400px] h-[113px] py-4 rounded-2xl'>
        <center className='flex flex-row items-center justify-between px-10 md:w-full gap-12'>
            <div className='flex flex-col items-center'>
                <h4 className='text-white font-display md:-ml-10 -ml-10'>Token Contact Address</h4>
            <h4 
            value="0xf412af62269a0b3................."
            onChange={({ target: {value}}) => setValue(value)}
            className='bg-[#36358F] flex items-center justify-center text-white font-display'

 >0xf412af62269a0b3.................</h4>
            </div>
  
<div class>
<CopyToClipboard text="0xf412af62269a0b3................."
onCopy={() => setCopied(true)}
>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-2 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-300">
                <span class="relative md:px-6 md:py-4 px-2 py-2 transition-all ease-in duration-7 bg-[#36358F] rounded-md group-hover:bg-opacity-0 font-display ">
                    Copy to Clipboard
                </span></button>
</CopyToClipboard>
</div>


{copied ? <span className='text-white font-display text-base m-0'>Copied</span> : null}
  </center>

    </motion.div>
  )
}

export default Clipboard