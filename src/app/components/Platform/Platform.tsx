import React from 'react'
import Tweet from './Tweet'

const images = [
    '/Platform/image1.png',
    '/Platform/image2.png',
    '/Platform/image3.png',
    '/Platform/image4.png',
    '/Platform/image5.png',
    '/Platform/image6.png',
    '/Platform/image7.png',
    '/Platform/image8.png',
]
const Platform = () => {
    return (
        <section className='bg-[#FAFAFA] min-h-[800px] h-full  items-center justify-center flex flex-col pt-10  gap-16  m-auto w-full px-[2rem] sm:px-[3rem] md:px-[6rem] text-white'>
            <h1 className='text-[30px] text-center font-bold md:text-[45px] lg:text-[60px] text-black pt-10 '>All platform connect to Findtrend</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6  items-start justify-center'>
                {images.map((imageUrl, index) =>
                    <div key={index} className= 'p-6 sm:p-7 flex items-center justify-center rounded-lg bg-blue-100'>
                        <img src={imageUrl} alt={`Image ${index}`} className='w-[50px] sm:w-[60px] h-[40px] sm:h-[60px]' />
                    </div>
                )}
            </div>


            <Tweet/>
            <div className=' bg-black border-[1px] rounded-2xl text-white px-[28px] sm:px-[32px] py-[14px] sm:py-[16px]'>
            <h3 className='text-[18px] font-bold '>View More Trend</h3>
          </div>
        </section>
    )
}

export default Platform