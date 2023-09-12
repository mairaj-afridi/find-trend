import React from 'react'
const Hero = () => {
  return (
    <section className='bg-black h-[800px] md:h-[900px]  gap-4 max-w-[1440px] m-auto w-full px-[2rem] sm:px-[3rem] md:px-[6rem] text-white'>
      <div className=' h-full  overflow-none pt-1 md:pt-24 gap-14 md:gap-24  flex  flex-col items-center '>
        <div className=' h-[357px] gap-4 text-white flex-col flex items-center justify-center '>
          <h1 className='font-extrabold leading-[120%] text-[30px] sm:text-[45px] text-center   md:text-[72px]'>Minimize your tabs.</h1>
          <h2 className='font-extrabold leading-[120%] text-[30px] sm:text-[45px] text-center md:text-[72px]'>Find the trends!</h2>
          <p className='text-[14px] sm:text-[18px] text-[#8B8B8B] leading-[150%]  text-center'>Don’t let your computer memories consumes all of those browser tabs.<br></br> Findtrend let you gathers all of your favorite website into one place.</p>

          <div className='flex gap-4  my-10 flex-row'>
          <div className=' bg-[#A8FF35] border-[1px] rounded-2xl text-black px-[24px] gap-10 py-[12px]'>
            <button className='text-[13px] sm:text-[18px] '>Get Started 🔥</button>
          </div>
          <div className='w-[99px]h-[69px]  flex flex-col items-start' >
          <h1 className='text-[11px] transform rotate-6 w-[100px] text-center eading-10'>All research start from here</h1>
          <img src='/Arrow 03.png' alt="logo"  className='w-[28.4px] h-[22px]  transform rotate-12   '/>
          </div>
          </div>

        </div>

        <div className='w-full   flex lg:flex-row  items-center justify-center flex-col   '>
          {/* <div className='bg-yellow-300 w-[348.648px] h-[93.5px]  '> */}
          <div className='bg-[#181818] flex items-center justify-center w-full lg:w-[280px] h-[60px]   transform -rotate-6 '>
            <div className='flex flex-row items-center justify-center gap-2 '>
          <img src='/image 96.png' alt="logo"  className='w-[30px] h-[30px]  transform rotate-12   '/>
            <h1 className='text-white text-[18px] transform text-center'>Cryptopunk - Search</h1>
            <div>
          <img src='/Group 1.png' alt="logo"  className='w-[15px] h-[15px]  transform rotate-12   '/>

            </div>
            </div>
          </div>


          {/* </div> */}
          {/* <div className='bg-yellow-300 w-[348.648px] h-[93.5px]  '> */}
          <div className='bg-[#181818] flex items-center justify-center w-full lg:w-[280px] h-[60px] mt-0 md:mt-16 transform md:rotate-2 -rotate-6'>
          <div className='flex flex-row items-center justify-center gap-2 '>
          <img src='/image 94.png' alt="logo"  className='w-[30px] h-[30px]  transform rotate-12   '/>
            <h1 className='text-whitetext-[18px] transform text-center'>Popular Design - Search</h1>
            <div>
          <img src='/Group 1.png' alt="logo"  className='w-[15px] h-[15px]  transform rotate-12   '/>

            </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className='bg-yellow-300 w-[348.648px] h-[93.5px]  '> */}
          <div className='bg-[#181818] flex items-center justify-center w-full lg:w-[280px] h-[60px]  transform md:-rotate-6 rotate-2'>
          <div className='flex flex-row items-center justify-center gap-2 '>
          <img src='/image 95.png' alt="logo"  className='w-[30px] h-[30px]  transform rotate-12   '/>
            <h1 className='ttext-white text-[18px] transform text-center'>Product Design - Search</h1>
            <div>
          <img src='/Group 1.png' alt="logo"  className='w-[15px] h-[15px]  transform rotate-12   '/>

            </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className='bg-yellow-300 w-[348.648px] h-[93.5px]  '> */}
          <div className='bg-[#181818] flex items-center justify-center w-full lg:w-[280px] h-[60px]  mt-0 md:mt-16 transform md:rotate-2 rotate-6'>
          <div className='flex flex-row items-center justify-center gap-2 '>
          <img src='/Rectangle 6.png' alt="logo"  className='w-[30px] h-[30px]  transform rotate-12   '/>
            <h1 className='text-white text-[18px] transform text-center'>Elon Musk - Search</h1>
            <div>
          <img src='/Group 1.png' alt="logo"  className='w-[15px] h-[15px]  transform  md:rotate-12   '/>

            </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      </section>
      
  )
}

export default Hero