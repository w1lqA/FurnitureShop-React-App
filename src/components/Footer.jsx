import React from 'react';
import FooterMedia from '../assets/footer-media.svg'

const Footer = () => {
    return (
        <section className='bg-heading-color md:px-24 px-12 py-24 font-montserrat'>
            <div className='flex flex-col max-w-screen-xl mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12'>
                    <h2 className='text-3xl lg:text-4xl font-medium leading-tight text-white mb-12 lg:mb-0 mr-0 lg:mr-6'>Build your dream <br className='lg:flex xl:hidden hidden'/> interior <br className='xl:flex hidden'/> with us!</h2>
                    <div className='flex flex-row text-lg font-medium'>
                        <button className='bg-white rounded-full text-heading-color hover:text-opacity-80 py-4 px-6 mr-6 shadow-sm'>
                            Get Started
                        </button>
                        <button className='bg-[#3A5F5F] rounded-full text-white hover:text-opacity-80 py-4 px-6 lg:px-8 shadow-sm'>
                            Contact Sales
                        </button>
                    </div>
                </div>
                <hr className='border-gray-200 w-full mb-12'/>
                <div className='flex flex-row flex-wrap self-stretch justify-between items-center'>
                    <div className='flex flex-col justify-center items-start mr-8 mb-12'>
                        <h1 href='#' className='text-3xl font-bold text-white mb-6'>furni.shop</h1>
                        <p className='text-gray-200 text-lg font-medium mb-6'>We help you create<br/> modern interiors</p>
                        <img src={FooterMedia} className='opacity-80 hover:opacity-70'/>
                    </div>
                    <ul className={`list-none flex text-lg leading-loose space-y-1 flex-col items-start justify-center text-white mr-8 mb-12`}>
                        <li className='block'>
                            <a href='#' className='hover:text-gray-200 font-semibold'>Home</a>
                        </li>
                        <li className='block'>
                            <a href='#about' className='hover:text-gray-300 text-gray-200 font-medium'>About</a>
                        </li>
                        <li className='block'>
                            <a href='#products' className='hover:text-gray-300 text-gray-200 font-medium'>Products</a>
                        </li>
                        <li className='block'>
                            <a href='#contacts' className='hover:text-gray-300 text-gray-200 font-medium'>Contacts</a>
                        </li>
                    </ul>
                    <ul className={`list-none flex text-lg leading-loose space-y-1 flex-col items-start justify-center text-white mr-8 mb-12`}>
                        <li className='block'>
                            <a href='#' className='hover:text-gray-200 font-semibold'>Resources</a>
                        </li>
                        <li className='block'>
                            <a href='#about' className='hover:text-gray-300 text-gray-200 font-medium'>Pricing</a>
                        </li>
                        <li className='block'>
                            <a href='#products' className='hover:text-gray-300 text-gray-200 font-medium'>FAQs</a>
                        </li>
                        <li className='block'>
                            <a href='#contacts' className='hover:text-gray-300 text-gray-200 font-medium'>Support</a>
                        </li>
                    </ul>
                    <ul className={`list-none flex text-lg leading-loose space-y-1 flex-col items-start justify-center text-white mr-8 mb-12`}>
                        <li className='block'>
                            <a href='#' className='hover:text-gray-200 font-semibold'>Services</a>
                        </li>
                        <li className='block'>
                            <a href='#about' className='hover:text-gray-300 text-gray-200  font-medium'>Press</a>
                        </li>
                        <li className='block'>
                            <a href='#products' className='hover:text-gray-300 text-gray-200  font-medium'>Delivery</a>
                        </li>
                        <li className='block'>
                            <a href='#contacts' className='hover:text-gray-300 text-gray-200 font-medium'>Blog</a>
                        </li>
                    </ul>
                    <ul className={`list-none flex text-lg leading-loose space-y-1 flex-col items-start justify-center text-white mb-12`}>
                        <li className='block'>
                            <a href='#' className='hover:text-gray-200 font-semibold'>Privacy Policy</a>
                        </li>
                        <li className='block'>
                            <a href='#about' className='hover:text-gray-300 text-gray-200 font-medium'>Security</a>
                        </li>
                        <li className='block'>
                            <a href='#products' className='hover:text-gray-300 text-gray-200 font-medium'>Cancelation Policy</a>
                        </li>
                        <li className='block'>
                            <a href='#contacts' className='hover:text-gray-300 text-gray-200 font-medium'>Partners</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;