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
        <nav className='z-10 absolute w-screen border border-solid border-x-transparent border-t-transparent border-b-gray-800'>
            <div className='flex items-center justify-between bg-transparent md:pl-9 md:pr-16 px-6 h-13 py-6'>
                <div className='font-bold md:text-2xl text-xl cursor-pointer flex items-center gap-1'>
                    <h2 className=' text-gray-800 font-Helvetica'>CRISWALLS</h2>
                </div>
                <div className=' flex flex-row items-center gap-x-10'>
                    <Link to="#" className=' text-gray-900 font-semibold md:text-base text-sm cursor-pointer hover:text-gray-500 duration-300'>W O R K S</Link>
                    { open 
                    ?
                    <button className='' onClick={toggleButton}>
                        <XMarkIcon className=' text-gray-800 w-6 h-auto' />
                    </button>
                    :
                    <button className='' onClick={toggleButton}>
                        <Bars2Icon className=' text-gray-800 w-6 h-auto' /> 
                    </button>
                    }
                    
                </div>
                <ul className={`fixed top-20 p-4 px-7 md:pr-14 text-right duration-200 ease-in ${open ? 'right-0' : 'md:right-[-250px] right-[-190px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.href} className='md:ml-8 md:my-5 my-4 font-Helvetica md:text-base text-sm'>
                                <a href={link.link}className='text-black hover:text-gray-500 duration-300'>{link.name}</a>
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