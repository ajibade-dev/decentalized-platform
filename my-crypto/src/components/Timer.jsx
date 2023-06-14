import React, {useState, useEffect} from 'react'

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000) 
    }, [time])


    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24)

        return (
            <div className='md:w-[759px] w-[340px] h-[160px] md:h-[261px] bg-gradient-to-b from-blue-900 to-blue-950 md:rounded-3xl rounded-xl flex flex-col gap-3 md:pt-[40px] pt-[20px] mt-[300px] md:mt-0 items-center justify-center'>
                <div className='flex flex-row gap-3 mx-24'>
                     {/* div holding number and word */}
                <div className='flex flex-col gap-2 items-center'>
                    {/* for the number  1*/}
                    <div className='px-2 py-2 rounded-md bg-[#4A49B7] md:w-[85px] md:h-[85px] items-center justify-center flex'>
                        <h1 className='font-display md:text-[38.71px] text-white'>
                        {days}
                        </h1>
                    </div>
                    <h4 className='font-display text-base md:text-[19px] text-white'>Days</h4>
                </div>
 
                {/* for the colon 1 */}
                <h1 className='text-white font-display text-[27px] flex justify-center'>:</h1>

                     {/* div holding number and word */}
                <div className='flex flex-col gap-2 items-center'>
                    {/* for the number  2*/}
                    <div className='px-2 py-2 rounded-md bg-[#4A49B7] md:w-[85px] md:h-[85px] items-center justify-center flex'>
                        <h1 className='font-display md:text-[38.71px] text-white'>
                        {hours}
                        </h1>
                    </div>
                    <h4 className='font-display text-base text-white md:text-[19px]'>Hours</h4>
                </div>

                {/* for the colon 2 */}
                <h1 className='text-white font-display text-[27px] flex justify-center'>:</h1>
               
                     {/* div holding number and word */}
                     <div className='flex flex-col gap-2 items-center'>
                    {/* for the number  3*/}
                    <div className='px-2 py-2 rounded-md bg-[#4A49B7] md:w-[85px] md:h-[85px] items-center justify-center flex'>
                        <h1 className='font-display md:text-[38.71px] text-white'>
                        {minutes}
                        </h1>
                    </div>
                    <h4 className='font-display text-base text-white md:text-[19px]'>Minutes</h4>
                </div>

                {/* for the colon 3 */}
                <h1 className='text-white font-display text-[27px] flex justify-center'>:</h1>



                     {/* div holding number and word */}
                     <div className='flex flex-col gap-2 items-center'>
                    {/* for the number  4*/}
                    <div className='px-2 py-2 rounded-md bg-[#4A49B7] md:w-[85px] md:h-[85px] items-center justify-center flex'>
                        <h1 className='font-display md:text-[38.71px] text-white'>
                        {seconds}
                        </h1>
                    </div>
                    <h4 className='font-display text-base text-white md:text-[19px]'>Seconds</h4>
                </div>
                
                </div>
                
               
            
            </div>
            
        )
    }

  return (
    <div>{getFormattedTime(time)}</div>
  )
}

export default Timer