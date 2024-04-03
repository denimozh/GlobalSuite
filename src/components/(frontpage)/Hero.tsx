import React from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Button from '../global/Button';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-14 font-semibold pt-5'>
        <p className='text-7xl font-bold'>Unlock Insights, Drive <RoughNotation type={'highlight'} color={'#D78100'} show={true}>Success</RoughNotation></p>
        <p className='text-3xl'>Empower your descisions with <RoughNotation type={'underline'} color={'#F5ED31'} show={true}>Real-Time Analytics</RoughNotation> and Tracking</p>
        <div className='pt-10'>
            <button className="inline-flex h-[80px] w-[350px] text-2xl animate-shimmer items-center justify-center rounded-md border bg-[linear-gradient(110deg,#000103,45%,#FF934F,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors ">
                Get Started Now
            </button>
        </div>
    </div>
  )
}

      

export default Hero