import React from 'react'

interface Props {
    title: string,
    subStitle: string,
    price: string,
    list: []
}

const SubscriptionCard = ({ title, subStitle, price, list }: Props) => {
    return (
        <div className='flex flex-col gap-2  p-[1rem] sm:p-[2rem] h-[640px] items-start  w-[300px] sm:w-[340px]  bg-[#FAFAFA] text-black rounded-2xl'>
            <h1 className='text-[32px] sm:text-[36px] leading-9'>{title}</h1>
            <p className='text-[18px]'>{subStitle}</p>
            <div className='w-full h-[1px] mt-4 bg-black '></div>
            <div className='w-[136px] h-[64px] flex flex-row gap-2 items-end justify-center  mt-4 '>
                <h1 className='text-[60px] sm:text-[64px] '>${price}</h1>
                <p className='text-[18px] mb-6 '>/Month</p>
            </div>

            <div className='flex flex-col gap-6 items-start justify-center w-full'>
                {list.map((item, index) => {
                    return <div key={index} className='flex items-start gap-2'>
                        <img src='/Platform/Frame 29.png' alt="logo" className='w-[28.4px] h-[22px]' />
                        <h2 className='text-[18px]'>{item}</h2>
                    </div>
                })}
                {/* ........................>>>> button */}
                <div className='bg-[#A8FF35] border-[1px] rounded-[29px] mt-44  ml-10 text-white px-[20px] sm:px-[32px] py-[14px] sm:py-[16px]'>
                    <h3 className='text-[18px] font-bold'>Start Free Trial</h3>
                </div>
            </div>


        </div>
    )
}

export default SubscriptionCard