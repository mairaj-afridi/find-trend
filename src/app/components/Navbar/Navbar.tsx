import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <section className='bg-black text-white pt-4 items-center justify-center h-[84px] m-auto w-full px-[2rem] sm:px-[3rem] md:px-[6rem]'>
      <div className=' flex items-center justify-between '>
        <img src='/Logo.png' alt="logo" />
        <ul className='lg:flex hidden items-center gap-8 font-semibold '>
          {links.map((item, index) => {
             return (
              <li key={index}>
              <Link href={item.href}>
              {item.name}
            </Link>
            </li>

          );
   })}

        </ul>
        <div className='lg:flex hidden gap-8 text-center items-center justify-center '>
          <h4>Login</h4>
          <div className=' bg-white border-[1px] rounded-2xl text-black px-[32px] py-[8px]'>
            <button className='text-[18px] '>Register</button>
          </div>
        </div>
      </div>
    </section>
  )
}

const links = [
  {
    name: "About",
    href: "/"
  },
  {
    name: "How it work",
    href: "work"
  }, 
  {
    name: "Pricing",
    href: "pricing"
  },
   {
    name: "Solution",
    href: "solution"
  },
  , 
  {
    name: "Features",
    href: "features"
  }
]

export default Navbar