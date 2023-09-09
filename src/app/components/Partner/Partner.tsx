import React from 'react'



const images = [
    '/Partner/image1.png',
    '/Partner/image2.png',
    '/Partner/image3.png',
    '/Partner/image4.png',
    '/Partner/image5.png',
    '/Partner/image6.png',
    '/Partner/image7.png',
    '/Partner/image8.png',
    '/Partner/image9.png',
    '/Partner/image10.png',
    '/Partner/image11.png',
    '/Partner/image12.png',
    '/Partner/image13.png',
    '/Partner/image14.png',
    '/Partner/image15.png',
    '/Partner/image16.png',
    
    // Add more image URLs here
];

const Partner = () => {
    return (
        <section className='bg-[#A8FF35] py-12 flex items-center justify-center gap-4 max-w-[1440px] m-auto w-full px-[2rem] sm:px-[3rem] md:px-[6rem] text-white'>
            <div className='h-full w-full gap-8  flex flex-col items-center '>
                <h1 className='text-[30px] text-center sm:text-[40px] md:text-[54px] text-black font-bold'>Findtrend make +1000 Startup grow</h1>
                <div className='gap-4 items-center justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {images.map((imageUrl, index) => (
                        <div key={index} className='px-6 h-[110px] bg-[#F5F5F5] flex items-center justify-center'>
                            <img src={imageUrl} alt={`Image ${index}`} className='w-[110px] sm:w-[190px] h-[24px] sm:h-[40px]' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partner