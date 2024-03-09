import React from 'react';
import { Parallax } from "react-parallax"
import img  from '../../assets/khea.png'
import { data } from '../data/data';

const Main = () => {
    const styleGrid = 'flex flex-col items-center justify-center';

  return (
    <div>
        <div>
            <Parallax strength={300} blur={{min:-100, max: 70}} bgImage={img} bgImageStyle={{objectFit: 'cover'}}>
                <div className='h-screen'/>
            </Parallax>
        </div>

        <div className='max-w-screen mx-auto mt-24'>
            <div className='grid md:grid-cols-4 auto-rows-[18.75rem] gap-0'>
                {data.map((item, i) => (
                    <div key={i} className={`${styleGrid} ${i=== 0 || i === 4 || i === 6 || i=== 7 ? 'md:col-span-2' : ''}`}>
                        <img src={item.img} alt={item.title} className='w-full h-full object-cover hover:opacity-50 transition-opacity duration-300'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Main;
