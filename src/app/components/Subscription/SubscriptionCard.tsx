import React from 'react'
import { BsCheck } from "react-icons/bs";

interface Props {
    title: string,
    subStitle: string,
    price: string,
    list: string[]

}

const SubscriptionCard = ({ title, subStitle, price, list }: Props) => {
    return (
        <section className='flex items-center justify-center'>
            <div className={`flex flex-col gap-2  p-[1rem] sm:p-[2rem] h-[600px]   w-[300px] sm:w-[340px] ${title === 'Regular' ? 'bg-[#A8FF35] ' : 'bg-[#FAFAFA] '}  text-black rounded-2xl`}>
                <h1 className='text-[32px] sm:text-[36px] leading-9'>{title}</h1>
                <p className='text-[18px]'>{subStitle}</p>
                <div className='w-full h-[1px] mt-4 bg-black '></div>
                <div className='w-full h-[64px] flex flex-row gap-2 items-end   mt-4 '>
                    <h1 className='text-[60px] sm:text-[64px] '>${price}</h1>
                    <p className='text-[18px] mb-6 '>/Month</p>
                </div>
                <div className='flex flex-col gap-6 items-start justify-center w-full'>
                    {list.map((item, index) => {
                        return <div key={index} className='flex items-start gap-2'>
                            <BsCheck className="text-[26px] text-black " />
                            <h2 className='text-[18px]'>{item}</h2>
                        </div>
                    })}
                    {/* ........................>>>> button */}
                        <button className={`${title === 'Regular' ? 'bg-black mt-[104px]' :
                            title === 'Personal' ? 'bg-[#A8FF35] mt-[155px]' :  'bg-[#A8FF35]' // Default color for unknown titles
                            } ml-9 border-[1px] rounded-[29px] text-white px-[20px] sm:px-[32px] py-[14px] sm:py-[16px]`}>
                            <h3 className='text-[18px] font-bold'>Start Free Trial</h3>
                        </button>
                </div>
            </div>
        </section>
    )
}

export default SubscriptionCard


