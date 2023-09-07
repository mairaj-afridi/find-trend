import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <section className='bg-black text-white pt-4 items-center justify-center h-[84px] m-auto w-full px-20   sm:px-[6rem]'>
      <div className=' flex items-center justify-between '>
        <img src='/Logo.png' alt="logo" />
        <ul className='md:flex hidden items-center gap-8 font-semibold '>
          <li>About</li>
          <li>How it work</li>
          <li>Pricing</li>
          <li>Solution</li>
          <li>Features</li>
        </ul>
        <div className='md:flex hidden gap-8 text-center items-center justify-center '>
          <h4>Login</h4>
          <div className=' bg-white border-[1px] rounded-2xl text-black px-[32px] py-[8px]'>
            <h3 className='text-[18px] '>Register</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar