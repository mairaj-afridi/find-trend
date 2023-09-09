import React from 'react'

const images =[
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
    <section className='bg-[#FAFAFA] min-h-[800px] h-full  flex flex-col pt-  gap-6 m-auto w-full px-[2rem] sm:px-[3rem] md:px-[6rem] text-white'>
     <h1 className='text-[30px] text-center font-bold md:text-[45px] lg:text-[60px] text-black pt-10 '>All platform connect to Findtrend</h1>
     <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6  items-start justify-center'>

       {images.map((imageUrl, index) =>
        <div key={index} className='p-7 flex items-center justify-center rounded-lg bg-blue-100'>
        <img src={imageUrl} alt={`Image ${index}`} className='w-[110px] sm:w-[60px] h-[24px] sm:h-[60px]' />     
        </div>
       )}
       
     </div>
      </section>
  )
}

export default Platform