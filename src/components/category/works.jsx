import React from 'react';
import { data } from '../data/data';

const Works = () => {

    const styleGrid = 'bg-neutral-200 border-solid border-2 rounded-sm border-gray-300 p-2 flex flex-col items-center justify-center';
    
    return (
        <div className='max-w-7xl mx-auto mt-24'>
            <div className='grid md:grid-cols-4 auto-rows-[18.75rem] gap-4 my-10 mx-6'>
                {data.map((item, i) => (
                    <div key={i} className={`${styleGrid} ${i=== 0 || i === 4 || i === 6 || i=== 7 ? 'md:col-span-2' : ''}`}>
                        <img src={item.img} alt={item.title} className='w-full h-full object-cover'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works