import React from 'react';
import FireIcon from '../assets/FireIcon.svg'
import DeliveryIcon from '../assets/delivery.svg'
import SmileIcon from '../assets/smile-face.svg'
import SaleIcon from '../assets/sale.svg'
const HotDeals = () => {
    return (
<section className='mb-24 max-w-screen-2xl mx-auto px-12'>
    <div className='flex items-center justify-between flex-row flex-wrap '>
        <div className='space-y-2 flex flex-col items-start w-full lg:w-auto mr-12'>
            <h1 className='font-bold text-4xl text-heading-color sm:leading-snug text-start
                        sm:text-5xl'><span className='flex justify-start'>Hot <img src={FireIcon}/> </span>
                deals for you</h1>
            <p className='text-p-color font-normal text-lg text-start'>Explore our online store for exclusive <br /> furniture deals delivered directly to you.</p>
        </div>
        <div className='items-start justify-between flex flex-col sm:flex-row pt-6 '>
            <div className='space-y-2 flex flex-col items-start mr-12'>
                <img src={SaleIcon} className='opacity-80'/>
                <h2 className='font-bold text-xl text-heading-color-3
                            sm:text-2xl'>1.5% Cashback</h2>
                <p className='text-p-color font-normal text-lg text-start'>Shop with us and get rewarded <br /> with 1.5% cashback on your purchases.</p>
            </div>
            <div className='space-y-2 flex flex-col items-start mr-12'>
                <img src={DeliveryIcon} className='opacity-80'/>
                <h2 className='font-bold text-xl text-heading-color-3
                            sm:text-2xl'>7-Day Delivery</h2>
                <p className='text-p-color font-normal text-lg text-start'>Enjoy peace of mind <br /> with our fastest 7-day delivery.</p>
            </div>
            <div className='space-y-2 flex flex-col items-start'>
                <img src={SmileIcon} className='opacity-80'/>
                <h2 className='font-bold text-xl text-heading-color-3
                            sm:text-2xl'>Save Money</h2>
                <p className='text-p-color font-normal text-lg text-start'>Shop smart and save your <br /> money with our fair price policy</p>
            </div>
        </div>
    </div>
</section>

    );
};

export default HotDeals;