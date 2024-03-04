import React from 'react';
import { Parallax } from "react-parallax"
import img  from '../../assets/khea.png'
import { data } from '../data/data';

const Main = () => {
    const styleGrid = 'bg-neutral-200 border-solid border-2 rounded-sm border-gray-300 p-2 flex flex-col items-center justify-center';

  return (
    <div>
        <div>
            <Parallax strength={300} blur={{min:-100, max: 70}} bgImage={img} bgImageStyle={{objectFit: 'cover'}}>
                <div className='h-screen'/>
            </Parallax>
        </div>

    {/*GRID, a las img poner object-fit:cover*/}
        <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-4 auto-rows-[18.75rem] gap-4 my-10 mx-6'>
                {data.map((item, i) => (
                    <div key={i} className={`${styleGrid} ${i=== 0 || i === 4 || i === 6 || i=== 7 ? 'md:col-span-2' : ''}`}>
                        <h2 className='text-xl text-gray-600'>{item.title}</h2>
                        <p className='font-bold text-2xl'>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Main;
