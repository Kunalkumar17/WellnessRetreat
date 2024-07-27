import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-6 z-10 w-full my-4 backdrop-blur-sm bg-green-100 border-y-2 border-black shadow-md sticky top-0 '>
        <nav className='flex flex-1 items-center justify-around max-container'>
                <a href='/' className='flex flex-1 items-center'>
                    <img src={headerLogo}  alt='Logo' width={60} height={15}/>
                    <h1 className='text-[25px]'>Wellness Retreats</h1>
                </a>
            <ul className=' flex-1 flex justify-center gap-16  max-lg:hidden'>
                {navLinks.map((item) =>( 
                    <li key={item.label}>
                        <a href={item.href} className='font-medium pb-5 leading-normal text-slate-black hover:border-b-2 border-spacing-9 border-black'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                    <img src={hamburger} alt='Hamburger' height={25} width={25} className='hidden max-lg:block'/>
            </div>
        </nav>
    </header>
  )
}

export default Nav 