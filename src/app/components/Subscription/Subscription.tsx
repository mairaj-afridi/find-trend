import React from 'react'
import SubscriptionCard from './SubscriptionCard'

const Subscription = () => {
  return (
    <section className='bg-black  h-full  pb-[80px]    items-center  flex flex-col    gap-14   sm:gap-16  m-auto w-full px-[2rem] sm:px-[3rem] md:px-[6rem] text-white'>

      <h1 className='text-[33px] text-center font-bold md:text-[45px] lg:text-[60px] text-white pt-10 '>Get your best deal</h1>
      <div className='flex flex-row  items-center gap-4 sm:gap-6 ' >
        <h2 className='text-[24px]'>Monthly</h2>
        <img src="/Platform/Switch.png" alt="" className='w-[70px] sm:w-[100%] h-[40px] sm:h-[100%]' />
        <h3 className='text-[24px] opacity-50 '>Monthly</h3>
        <div className='w-[99px]h-[69px] hidden sm:flex flex-col items-start' >
          <h1 className='text-[11px] transform rotate-6 w-[100px] text-center eading-10'>Save 10% per month</h1>
          <img src='/Arrow 03.png' alt="logo" className='w-[28.4px] h-[22px]  transform rotate-12   ' />
        </div>
      </div>
      {/*....................................card............................ */}
      <div className=' flex-row grid lg:grid-cols-2 items-center justify-center xl:grid-cols-3 gap-5 1 w-full h-full'>
        {pricingCardData.map((item, index) => {
          return <SubscriptionCard title={item.title} subStitle={item.subTitle} price={item.price} list={item.list} />
        })}


      </div>
    </section>
  )
}


const pricingCardData = [
  {
    title: "Personal",
    subTitle: "Special first packet for all",
    price: '8',
    list: ['Up to 5 page each group', 'Up to 10 group page', '5 Days group page saved']

  },
  {
    title: "Regular",
    subTitle: "Recommended for personal pro",
    price: '20',
    list: ['Up to 15 page each group', 'Download page up to 20', 'Up to 10 group page','15 Days group page saved']

  },
  {
    title: "Premium",
    subTitle: "Packet for Startup & Company",
    price: '48',
    list: ['Unlimited group pages', 'Unlimited download page', 'Unlimited page each group','Customize sorting group','Customize group page','30 Days group page saved']

  },
]

export default Subscription