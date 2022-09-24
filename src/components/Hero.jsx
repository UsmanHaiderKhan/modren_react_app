import React from 'react';
import style from '../style';
import {robot,discount} from '../assets';
import GetStarted from './GetStarted'
import styles from '../style';

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${style.paddingY}`}>
     <div className={`flex-1  ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
        <p className={`${style.paragraph} ml-2`}>
        <span className='text-white '>20%</span>
          Discount for {' '}<span className='text-white '>1 Month</span>Account.
        </p>
      </div>
      <div className='flex flex-row justify-between item-center w-full'>
         <h1 className='flex-1 font-poppins font-semibold ss:text-[60px] ss:leading-[90px] leading-[65px] text-[45px] text-white'>The Next 
         <br className='sm:block hidden'/> {" "} <span className='text-gradient'>Generation</span> {" "} Payment Method</h1>
        
         <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
         </div>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.
      </p>
     </div>
     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="Robotics image" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
     </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero