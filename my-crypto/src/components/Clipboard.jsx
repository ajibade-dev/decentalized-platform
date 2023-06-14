import React, {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Clipboard = () => {

    const [value, setValue] = useState('');
    const [copied, setCopied] = useState(false)
  return (
    <div className='flex flex-row gap-5 bg-[#36358F] md:w-2/3 w-[400px] h-[113px] py-4 rounded-2xl'>
        <center className='flex flex-row items-center justify-between px-10 md:gap-[400px] gap-10'>
            <div className='flex flex-col'>
                <h4 className='text-white font-display mr-4'>Token Contact Address</h4>
            <input type="text" 
            value="0xf412af62269a0b3................."
            onChange={({ target: {value}}) => setValue(value)}
            className='bg-[#36358F] rounded-md flex items-center justify-center text-white font-display'

 />
            </div>
  
<div class>
<CopyToClipboard text={value}
onCopy={() => setCopied(true)}
>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative md:px-6 md:py-4 px-4 py-2  transition-all ease-in duration-7 bg-[#36358F] rounded-md group-hover:bg-opacity-0 font-display">
                    Copy to Clipboard
                </span></button>
</CopyToClipboard>
</div>


{copied ? <span>Copied</span> : null}
  </center>

    </div>
  )
}

export default Clipboard