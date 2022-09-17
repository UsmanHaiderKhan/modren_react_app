import React from 'react';
import {quotes} from '../assets'

const FeedBackCard = ({content,title,name,img}) => (
    <div className='flex justify-between flex-col py-12 px-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-15 mr-0 feedback-card '>
      <img src={quotes} className='w-[42px] h-[27px] object-contain' alt="" />
       <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
        {content}
       </p>
      <div className='flex flex-row'>
        <img src={img}  alt={name} className="w-[48px] h-[48px] rounded-full"/>
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] text-white leading-[32px] '>{name}</h4>
          <p className='font-poppins font-normal text-normal text-[16px] text-dimWhite leading-[24px]'>{title}</p>
        </div>
      </div>
    </div>
  )

export default FeedBackCard