import React from 'react';
import HeaderImage from '../assets/header-bg.png'
import DotsImg from '../assets/dots.svg'

const Home = () => {
    return (
    <section id='home' className='flex items-center justify-center mb-24'>
        <div className='absolute mx-3 xs:mx-0 mb-[12rem] p-8 xs:mb-[24rem] sm:mb-[30rem] xs:mr-0 lg:mb-0 lg:mr-[32rem] xlg:mr-[40rem] xl:mr-[48rem] 2xl:mr-[64rem] flex items-start flex-col space-y-6 md:p-12 backdrop-blur-xl rounded-sm bg-white/30 animate-slideBR'>
            {/* <img src={DotsImg} className='absolute scale-90 rotate-90 
                                        mr-[26rem] mb-28
                                        sm:mr-[32rem] sm:mb-24
                                        lg:mb-[26rem] lg:mr-44 lg:scale-100'/> */}
            <h1 className='font-bold text-3xl xs:text-4xl sm:text-5xl leading-tight sm:leading-tight text-heading-color'>
                We Help You<br/>
                Create Modern <br/>
                Interiors<br/>
            </h1>
            <p className='text-p-color font-normal text-base xs:text-lg sm:text-xl'>
                We will help you to make an elegant<br/>
                and luxurious interior designed by<br/>
                professional interior designer.<br/>
            </p>
        </div>
        <div className='place-self-center my-auto max-w-[600px] mt-44 sm:mt-64 lg:mt-0
                        sm:max-w-screen-sm 
                        md:max-w-[800px] 
                        lg:col-span-10  
                        xl:max-w-screen-xl'>
            <img src={HeaderImage} className=' rounded-sm'/>
        </div>
    </section>
    );
};

export default Home;



// import React from 'react';
// import HeaderImage from '../assets/header-bg.png'
// import DotsImg from '../assets/dots.svg'

// const Welcome = () => {
//     return (
//     <section className='grid mx-auto pb-24
//                         lg:grid-cols-12'>
//         <div className='place-self-center my-auto flex justify-center items-center mt-36 mb-24 
//                         md:mt-40
//                         lg:col-span-4 lg:justify-start lg:items-center lg:my-0 lg:pr-40 
//                         xl:pr-52'>
//             <div className='absolute backdrop-blur-xl bg-white/10 flex justify-center items-center flex-col space-y-6 p-8 animate-slideBR
//                             md:p-12
//                             2xl:left-72'>
//                 <img src={DotsImg} className='absolute scale-90
//                                             mr-[26rem] mb-28
//                                             sm:mr-[32rem] sm:mb-24
//                                             lg:mb-[28rem] lg:mr-44 lg:scale-100'/>
//                 <h1 className='font-black text-4xl text-heading-color
//                             sm:text-5xl sm:leading-snug'>
//                     We Help You<br/>
//                     Make Modern<br/>
//                     Interior<br/>
//                 </h1>
//                 <p className='text-p-color font-normal text-lg self-start
//                             sm:text-xl'>
//                     We will help you to make an elegant<br/>
//                     and luxurious interior designed by<br/>
//                     professional interior designer.<br/>
//                 </p>
//             </div>
//         </div>
//         <div className='place-self-start my-auto 
//                         lg:col-span-8'>
//                         {/* place-self-center my-auto max-w-[400px] 
//                         sm:max-w-screen-sm 
//                         md:max-w-[800px] 
//                         lg:col-span-10  
//                         xl:max-w-screen-xl'> */}
//             <img src={HeaderImage}/>
//         </div>
        
//     </section>
//     );
// };

// export default Welcome;

// import React from 'react';
// import HeaderImage from '../assets/header-bg.png'
// import DotsImg from '../assets/dots.svg'

// const Home = () => {
//     return (
//     <section id='home' className='grid mx-auto mb-24 max-w-screen-2xl
//                         lg:grid-cols-12'>
//         <div className='place-self-start lg:my-auto flex justify-center items-center mt-32
//                         lg:col-span-5'>
//             <div className='absolute backdrop-blur-xl rounded-sm bg-gray-100/30 flex justify-center items-center flex-col space-y-6 p-10 animate-slideBR'>
//                 <img src={DotsImg} className='absolute scale-90
//                                             mr-[26rem] mb-28
//                                             sm:mr-[32rem] sm:mb-24
//                                             lg:mb-[28rem] lg:mr-44 lg:scale-100'/>
//                 <h1 className='font-bold text-5xl text-heading-color'>
//                     We Help You<br/>
//                     Create Modern <br/>
//                     Interiors<br/>
//                 </h1>
//                 <p className='text-p-color font-normal text-xl self-start'>
//                     We will help you to make an elegant<br/>
//                     and luxurious interior designed by<br/>
//                     professional interior designer.<br/>
//                 </p>
//             </div>
//         </div>
//         <div className='place-self-start mt-48 my-auto md:mt-0
//                         lg:col-span-7'>
//             <img src={HeaderImage} className=' rounded-sm'/>
//         </div>
        
//     </section>
//     );
// };

// export default Home;



// import React from 'react';
// import HeaderImage from '../assets/header-bg.png'
// import DotsImg from '../assets/dots.svg'

// const Welcome = () => {
//     return (
//     <section className='grid mx-auto pb-24
//                         lg:grid-cols-12'>
//         <div className='place-self-center my-auto flex justify-center items-center mt-36 mb-24 
//                         md:mt-40
//                         lg:col-span-4 lg:justify-start lg:items-center lg:my-0 lg:pr-40 
//                         xl:pr-52'>
//             <div className='absolute backdrop-blur-xl bg-white/10 flex justify-center items-center flex-col space-y-6 p-8 animate-slideBR
//                             md:p-12
//                             2xl:left-72'>
//                 <img src={DotsImg} className='absolute scale-90
//                                             mr-[26rem] mb-28
//                                             sm:mr-[32rem] sm:mb-24
//                                             lg:mb-[28rem] lg:mr-44 lg:scale-100'/>
//                 <h1 className='font-black text-4xl text-heading-color
//                             sm:text-5xl sm:leading-snug'>
//                     We Help You<br/>
//                     Make Modern<br/>
//                     Interior<br/>
//                 </h1>
//                 <p className='text-p-color font-normal text-lg self-start
//                             sm:text-xl'>
//                     We will help you to make an elegant<br/>
//                     and luxurious interior designed by<br/>
//                     professional interior designer.<br/>
//                 </p>
//             </div>
//         </div>
//         <div className='place-self-start my-auto 
//                         lg:col-span-8'>
//                         {/* place-self-center my-auto max-w-[400px] 
//                         sm:max-w-screen-sm 
//                         md:max-w-[800px] 
//                         lg:col-span-10  
//                         xl:max-w-screen-xl'> */}
//             <img src={HeaderImage}/>
//         </div>
        
//     </section>
//     );
// };

// export default Welcome;