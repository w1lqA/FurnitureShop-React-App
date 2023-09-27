import React, { useState } from 'react';

    const ProductsHeader = ({productCards, modifiedProductCards, setModifiedProductCards, togglerState}) => {
    const [selectedSort, setSelectedSort] = useState('all')

    const handleSortSelection = (inputValue) => {
        console.log(inputValue);
        setSelectedSort(inputValue);
        if (inputValue === 'all') {
            setModifiedProductCards(productCards) 
        } else {
            const filteredCards = [...productCards].filter(productCard => productCard.id === inputValue)
            setModifiedProductCards(filteredCards)
        }
    }
    return (
        <header className='flex flex-col justify-center self-end lg:self-center items-center mb-12'>
            <div className={`w-full ${togglerState===false ? 'hidden' : 'flex'} lg:flex justify-end pt-6 my border-r border-black animate-slideDown
                            lg:animate-none lg:order-1 lg:w-auto lg:my-0 lg:py-0 lg:border-0`}>
                <ul className={`list-none flex flex-col items-end font-medium text-lg pr-3
                                lg:space-x-8 lg:flex-row lg:items-center lg:pr-0`}>
                    <li className='block'>
                        <button onClick={() => handleSortSelection('all')} className={selectedSort === 'all' ? 'text-heading-color-3 hover:text-p-color' : 'text-p-color-disabled hover:text-p-color'}>All</button>
                    </li>
                    <li className='block'>
                        <button onClick={() => handleSortSelection('beds')} className={selectedSort === 'beds' ? 'text-heading-color-3 hover:text-p-color' : 'text-p-color-disabled hover:text-p-color'}>Beds</button>
                    </li>
                    <li className='block'>
                        <button onClick={() => handleSortSelection('sofas')} className={selectedSort === 'sofas' ? 'text-heading-color-3 hover:text-p-color' : 'text-p-color-disabled hover:text-p-color'}>Sofas</button>
                    </li>
                    <li className='block'>
                        <button onClick={() => handleSortSelection('chairs')} className={selectedSort === 'chairs' ? 'text-heading-color-3 hover:text-p-color' : 'text-p-color-disabled hover:text-p-color'}>Chairs</button>
                    </li>
                    <li className='block'>
                        <button onClick={() => handleSortSelection('lights')} className={selectedSort === 'lights' ? 'text-heading-color-3 hover:text-p-color' : 'text-p-color-disabled hover:text-p-color'}>Lights</button>
                    </li>
                </ul>
            </div>  
        </header>
    );
};

export default ProductsHeader;