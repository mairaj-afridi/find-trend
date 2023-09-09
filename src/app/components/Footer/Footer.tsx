import React from "react";
import Link from 'next/link';

const Footer = () => {

  const x = [1, 2, 3, 4, 5].map((el) => el * 2);
  console.log(x);




  return (
    <section className='text-black bg-white pt-6 items-center justify-center h-[84px] m-auto w-full px-[2rem] sm:px-[3rem] md:px-[6rem]'>
      <div className=' flex items-center justify-between '>
        <div className='flex gap-6 items-center '>
          <img src='/Footer/FooterLogo.png' alt="logo" />
          <h1 className='text-[24px] text-black '>Findtrend</h1>
        </div>

        <ul className='lg:flex hidden items-center gap-8 font-semibold '>
          
        {links.map((item, index) => {
              return (
                <li className="capitalize" key={index}>
                  <Link href={item.href} >
                    {item.name}
                  </Link>
                </li>
              );
            })}

        </ul>



      </div>
    </section>
  )
}


const links = [
  {
    name: "Privacy Policy",
    href: "privacy",
  },
  {
    name: "Terms and Conditions",
    href: "terms",
  },
  {
    name: "Contact Us",
    href: "contact",
  },
  {
    name: "Careers",
    href: "Careers",
  }
];
export default Footer