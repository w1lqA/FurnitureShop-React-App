import React from 'react';
import ClientImage from '../assets/client.png'
import ArrowL from '../assets/arrow-l.svg'
import ArrowR from '../assets/arrow-r.svg'

import Icon1 from '../assets/testimonials-icon-1.svg'
import Icon2 from '../assets/testimonials-icon-2.svg'
import Icon3 from '../assets/testimonials-icon-3.svg'
import Icon4 from '../assets/testimonials-icon-4.svg'

const Testimonials = () => {
    return (
        <section className='flex justify-center items-center mb-24'>
            <div className='bg-secondary-gray md:px-24 mx-12 px-12 py-12 flex flex-col justify-center items-center relative overflow-hidden rounded-2xl'>
                <div className='object-cover'>
                    <img src={Icon4} class="lg:-inset-32 xs:-inset-20 -inset-10 w-1/3 lg:w-auto absolute"/>
                </div>
                <div className='hidden lg:flex self-end justify-center items-center'>
                    <img src={Icon1} className='mt-32 mr-32 w-16 h-16 absolute bg-white rounded-full shadow-sm'/>
                </div>
                <div className='flex flex-col justify-center items-center mb-6'>
                    <h1 className='text-heading-color text-5xl leading-tight text-center font-bold mb-6'>Client reviews <br /></h1>
                    <p className='text-[#3A4F65] text-lg font-medium text-center'>File storage made easy – including powerful features <br /> you won’t find anywhere else. Whether you’re.</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:my-12'>

                    <div className='flex mr-0 mb-24 lg:mb-0 lg:mr-12'>
                        <div className='flex self-start justify-center'>
                            <img src={Icon2} className=' absolute w-16 h-16 bg-white rounded-full shadow-sm'/>
                        </div>
                        <div className='flex self-end justify-end'>
                            <img src={Icon3} className='absolute drop-shadow-md'/>
                        </div>
                        <img className='w-full h-full' src={ClientImage}/>

                    </div>
                    <div className='flex flex-col justify-center items-start space-y-6 lg:space-y-12'>
                        <h1 href='#' className='text-2xl font-bold text-heading-color font-noto-serif'>furni.shop</h1>
                        <p className='text-2xl text-[#5E7388] font-medium italic'>“File storage made easy – including <br /> powerful features you won’t find <br /> anywhere else. Whether you’re.”</p>
                        <div>
                            <h2 className='text-[#152137] font-semibold text-xl'>Larry Diamond</h2>
                            <p className='text-[#647383] font-medium text-base'>Chief Executive Officer</p>
                        </div>
                        <div className='flex flex-row'>
                            <button className='p-5 bg-white rounded-full shadow-sm mr-6 group'>
                                <img src={ArrowL} className='group-hover:opacity-75'/>
                            </button>
                            <button className='p-5 bg-white rounded-full shadow-sm group'>
                                <img src={ArrowR} className='group-hover:opacity-75'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;