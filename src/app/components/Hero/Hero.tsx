import React from 'react'
const Hero = () => {
  return (
    <section className='bg-black h-[900px]  gap-4 max-w-[1440px] m-auto w-full px-8 sm:px-[6rem] text-white'>
      <div className='bg-green-700 h-full  overflow-none pt-24 gap-28  flex  flex-col items-center '>
        <div className=' h-[357px] gap-4 text-white flex-col flex items-center justify-center '>
          <h1 className='font-extrabold leading-[120%] text-[45px] md:text-[72px]'>Minimize your tabs.</h1>
          <h2 className='font-extrabold leading-[120%] text-[45px] md:text-[72px]'>Find the trends!</h2>
          <p className='text-[18px] text-[#8B8B8B] leading-[150%] text-center'>Don’t let your computer memories consumes all of those browser tabs. Findtrend let you gathers all of your favorite website into one place.</p>

          <div className='flex gap-4  flex-row'>
          <div className=' bg-[#A8FF35] border-[1px] rounded-2xl text-black px-[24px] gap-10 py-[12px]'>
            <h3 className='text-[18px] '>Get Started 🔥</h3>
          </div>
          <div className='w-[99px]h-[69px]  flex flex-col items-start' >
          <h1 className='text-[11px] transform rotate-6 w-[100px] text-center eading-10'>All research start from here</h1>
          <img src='/Arrow 03.png' alt="logo"  className='w-[28.4px] h-[22px]  transform rotate-12   '/>
          </div>
          </div>


        </div>


        <div className='w-full  flex md:flex-row-reverse  flex-col bg-slate-300   '>
          {/* <div className='bg-yellow-300 w-[348.648px] h-[93.5px]  '> */}
          <div className='bg-yellow-100 w-full sm:w-[280px] h-[60px] mt-10 transform -rotate-6 md:rotate-2  '>ff</div>
          {/* </div> */}
          {/* <div className='bg-yellow-300 w-[348.648px] h-[93.5px]  '> */}
          <div className='bg-yellow-100 w-full sm:w-[280px] h-[60px]   transform md:-rotate-6 rotate-2    '>ff</div>
          {/* </div> */}
          {/* <div className='bg-yellow-300 w-[348.648px] h-[93.5px]  '> */}
          <div className='bg-yellow-100 w-full sm:w-[280px] h-[60px]  mt-10 transform -rotate-6 md:rotate-2 '>ff</div>
          {/* </div> */}
          {/* <div className='bg-yellow-300 w-[348.648px] h-[93.5px]  '> */}
          <div className='bg-yellow-100 w-full sm:w-[280px] h-[60px] transform md:-rotate-6 rotate-2     '>ff</div>
          {/* </div> */}
        </div>
      </div>
      </section>
  )
}

export default Hero