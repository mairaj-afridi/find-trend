import React from 'react'

const Newtabs = () => {
    return (
        <section className='bg-[#A8FF35] h-[642px] flex flex-col items-center justify-center  m-auto w-full  text-white'>
            <div className='gap-11 flex flex-col  ' >
                <h1 className='text-[36px] md:text-[64px] font-bold text-center text-black '>Open new tabs is sh*t</h1>
                <div className='flex flex-col-reverse md:flex-row text-black items-center gap-0 sm:gap-4 justify-center'>
                    <div className='w-[100px] h-[69px] text-black  flex flex-col items-start -ml-10 sm:-ml-96    md:ml-0  justify-start md:items-end' >
                        <img src='/Arrow 6.png' alt="arrow" className='w-[28.4px] h-[34.4px]   ' />
                        <h1 className='text-[14px] transform rotate-6  text-center '>All research start from here</h1>
                    </div>

                    <div className=' h-[110px] w-[330px] sm:w-[501px] flex flex-row items-center justify-center sm:h-[202px] border-[3px] rounded-3xl bg-white  '>
                        <div className=' bg-black w-[271px] h-[55px] sm:w-[341.226px] flex items-center justify-center sm:h-[82px] text-white '>
                            <div className='flex flex-row items-center justify-center gap-6 '>
                                <img src='/Group 16.png' alt="logo" className='w-[30px] h-[30px]  transform rotate-12   ' />
                                <h1 className='text-white text-[18px] transform text-center'>Elon Musk - Search</h1>
                                <div>
                                    <img src='/Group 1.png' alt="cross" className='w-[15px] h-[15px]  transform  md:rotate-12   ' />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[99px]h-[69px] -mr-70 sm:-mr-96    md:mr-0 flex flex-col items-start' >
                        <h1 className='text-[14px] transform rotate-6 w-[100px] text-center '>You just need one tab now</h1>
                        <img src='/Arrow 4.png' alt="arrow" className='w-[28.4px] h-[34.4px]    ' />
                    </div>
                </div>
                <p className='text-black text-[14px] p-6 sm:text-[18px] text-center items-center'>A solution for your browser tabs and don’t make your device get slower over time. Get <br></br> ease and faster to discover a trend with just one tab.</p>
            </div>

        </section>
    )
}

export default Newtabs