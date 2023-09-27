import React from 'react';
import Microsoft from '../assets/Microsoft.svg'
import Entrepreneur from '../assets/Entrepreneur.svg'
import Fortune from '../assets/Fortune.svg'
import BusinessWeb from '../assets/BusinessWeb.svg'
import Mashable from '../assets/Mashable.svg'


const TrustedCompanies = () => {
    return (
        <div className='mb-24'>
            <div className='bg-secondary-gray py-12 flex justify-center text-center flex-col items-center space-y-12'>
                <h2 className='text-heading-color-2 text-lg sm:text-xl tracking-widest font-medium'>TRUSTED BY OVER 1K+ COMPANIES</h2>
                <div className='flex flex-row justify-center items-center flex-wrap'>
                    <img src={Microsoft} className='p-6'/>
                    <img src={Entrepreneur} className='p-6'/>
                    <img src={Fortune} className='p-6'/>
                    <img src={BusinessWeb} className='p-6'/>
                    <img src={Mashable} className='p-6'/>
                </div>
                {/* <div className='grid grid-rows-2 grid-cols-6 lg:grid-rows-1 lg:grid-cols-5 gap-6 lg:gap-12 items-center justify-items-center'>
                    <img src={Microsoft} className='col-span-2 lg:col-span-1'/>
                    <img src={Entrepreneur} className='col-span-2 lg:col-span-1'/>
                    <img src={Fortune} className='col-span-2 lg:col-span-1'/>
                    <img src={BusinessWeb} className='col-span-3 lg:col-span-1'/>
                    <img src={Mashable} className='col-span-3 lg:col-span-1'/>
                </div> */}
            </div>
        </div>
    );
};

export default TrustedCompanies;