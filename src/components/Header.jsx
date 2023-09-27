import React, { useState } from 'react';
import CartIcon from '../assets/cart.svg'
import MoreIcon from '../assets/menu.svg'
import CloseIcon from '../assets/close.svg'
const Header = () => {
    const [togglerState, setTogglerState] = useState(false)
    const handleToggle = (isToggled) => {
        setTogglerState(isToggled)
    }
    return (
        <header id='header'>
            <nav className='flex flex-wrap py-12 justify-between items-center px-6 xs:px-12 z-30 relative max-w-screen-2xl mx-auto
                            lg:pb-12'>
                <h1 className='flex flex-col justify-start'>
                    <a href='#' className='text-4xl font-bold text-heading-color font-noto-serif hover:text-heading-color/80'>furni.shop</a>
                </h1>
                <div className='flex flex-row items-center pl-2 space-x-3 justify-start
                            lg:order-2'>
                    <a href='#' className='hover:opacity-60 animate-scaleIn'>
                        <img src={CartIcon} className='w-6'/>
                    </a>
                    <button className='flex hover:opacity-60 lg:hidden justify-center items-center animate-scaleIn' onClick={() => togglerState === false ?  handleToggle(true) : handleToggle(false)}>
                        {togglerState === false
                        ? <img src={MoreIcon} className='w-6 pt-1'/>
                        : <img src={CloseIcon} className='w-6 pt-1'/>
                        }
                    </button>
                </div>
                <div className={`w-full ${togglerState===false ? 'hidden' : 'flex'} lg:flex justify-end pt-6 my border-r border-black animate-slideDown
                                lg:animate-none lg:order-1 lg:w-auto lg:my-0 lg:py-0 lg:border-0`}>
                    <ul className={`list-none flex flex-col items-end font-medium text-lg pr-6
                                    lg:space-x-8 lg:flex-row lg:items-center lg:pr-0`}>
                        <li className='block'>
                            <a href='#' className='hover:text-p-color'>Home</a>
                        </li>
                        <li className='block'>
                            <a href='#about' className='hover:text-p-color'>About</a>
                        </li>
                        <li className='block'>
                            <a href='#products' className='hover:text-p-color'>Products</a>
                        </li>
                        <li className='block'>
                            <a href='#contacts' className='hover:text-p-color'>Contacts</a>
                        </li>
                       
                    </ul>
                </div>   
            </nav>
        </header>
    );
};

export default Header;