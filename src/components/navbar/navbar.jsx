import React, { useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-scroll';

const Navbar = () => {
    let Links =[
        {name:"MUSIC VIDEOS", link:"/"},
        {name:"COVER ARTS", link:"/"},
        {name:"ABOUT ME", link:"/"},
        {name:"CONTACT", link:"/"}
      ];
let [open, setOpen] =useState(false);

    return (
        <div className={`absolute border-solid border border-x-transparent border-t-transparent border-b-neutral-700 w-full top-0 left-0 z-10`}>
            <div className='items-center justify-between bg-transparent md:px-7 px-7 h-13 py-6'>
    {/*LOGO HERE*/}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <h2 className='text-neutral-700 font-Helvetica'>CRISWALLS</h2>
                </div>
    {/*ICON HERE*/}
                <div onClick={()=>setOpen(!open)} className='absolute right-14 top-6 cursor-pointer w-7 h-7 py-0'>
                    <div className='absolute right-20 top-0.5'>
                        <Link className='text-neutral-700 font-Helvetica font-bold'>WORKS</Link>
                    </div>
                    {
                        open ? <XMarkIcon className='text-neutral-700'/> : <Bars2Icon className='text-neutral-700 font-bold'/>
                    }
                </div>
    {/*LINKS HERE*/}
                <ul  className={`z-10 md:z-10 absolute left-0 top-20 bg-transparent p-4 pr-8 text-right transition-transform duration-500 ease-in-out ${open ? 'md:right-80 right-36 transform md:translate-x-72 translate-x-full' : 'md:right-80 right-36 transform md:translate-x-full translate-x-28'}`}>
                {
                    Links.map((link) => (
                        <li key={link.href} className='md:ml-8 md:my-5 my-5 font-Helvetica font-semibold'>
                            <a href={link.link}className='text-neutral-800 hover:text-neutral-500 duration-500'>{link.name}</a>
                        </li>))
                }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

{/*
<button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>


                <ul  className={`z-10 md:pb-0 pb-0 pr-8 absolute md:absolute bg-transparent md:z-10 left-0 w-full md:w-full md:pl-9 pl-9 transition-all duration-00 ease-in ${open ? 'text-right pt-6 top-14 pr-10' : 'text-right top-[-490px]'}`}>
*/}