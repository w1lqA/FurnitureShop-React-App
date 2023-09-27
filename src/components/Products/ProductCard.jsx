import React from 'react';
import ShoppingCart from '../../assets/cart-white.svg'
const ProductCard = ({productCard}) => {
    return (
        <div className='bg-[#244D4D]/5 p-12 rounded-sm pb-52 text-[#3D3D3F] flex flex-col justify-center'>
            <button className='flex self-end absolute mb-48 group'>
                <div className='rounded-full bg-[#D6C4B8] p-4 w-12 group-hover:opacity-80'>
                    <img className='scale-150 fill-white transition-all duration-300 ease-in-out' src={ShoppingCart}/>
                </div>
            </button>
            <div className='flex flex-col justify-start items-start space-y-6'>
                <h2 className='text-3xl font-medium'>{productCard.cardTitle}</h2>
                <div className='flex flex-row space-x-6 justify-center items-center'>
                    <h3 className='text-lg'>{productCard.cardPrice}</h3>
                    <h3 className='text-base line-through text-p-color-disabled'>{productCard.cardPriceDisabled}</h3>
                </div>
                <div className='flex self-center justify-self-center
                                justify-center items-start'>
                    <img className='absolute mt-14 drop-shadow-[0_35px_35px_#00000030] transition-all duration-300 ease-in-out' src={productCard.productImage}/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;