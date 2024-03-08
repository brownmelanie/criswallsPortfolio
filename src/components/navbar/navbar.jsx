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


    let [open, setOpen] = useState(false);

    const toggleButton = () => {
        setOpen(!open)
    }

    return (
        <nav className='bg-stone-800'>
            <div className='flex items-center justify-between bg-transparent md:px-7 px-7 h-13 py-6'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <h2 className=' text-stone-50 font-Helvetica'>CRISWALLS</h2>
                </div>
                <div className=' flex flex-row items-center gap-x-5'>
                    <Link to="#" className=' text-stone-50 cursor-pointer hover:text-stone-400 duration-300'>W O R K S</Link>
                    { open 
                    ?
                    <button className='' onClick={toggleButton}>
                        <XMarkIcon className=' text-stone-50 w-6 h-auto' />
                    </button>
                    :
                    <button className='' onClick={toggleButton}>
                        <Bars2Icon className=' text-stone-50  w-6 h-auto' /> 
                    </button>
                    }
                    
                </div>
                <ul className={`bg-stone-800 absolute flex flex-col justify-end z-10 top-20 p-4 px-9 text-right rounded-b-md duration-150 ease-in ${open ? 'right-0' : ' right-[-199px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.href} className='md:ml-8 md:my-5 my-5 font-Helvetica font-semibold'>
                                <a href={link.link}className='text-neutral-800 hover:text-neutral-500 duration-300 text-stone-50'>{link.name}</a>
                            </li>))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

{/*
<button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>


                <ul  className={`z-10 md:pb-0 pb-0 pr-8 absolute md:absolute bg-transparent md:z-10 left-0 w-full md:w-full md:pl-9 pl-9 transition-all duration-00 ease-in ${open ? 'text-right pt-6 top-14 pr-10' : 'text-right top-[-490px]'}`}>
*/}