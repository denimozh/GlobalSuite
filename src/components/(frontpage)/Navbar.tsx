import React from 'react'
import Button from '../global/Button'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center pt-10'>
      <div className=''>
        <p className='text-3xl font-bold text-[#FF934F]'>GlobalSuite</p>
      </div>
      <div className='pl-32 flex flex-row font-semibold gap-14 text-lg items-center'>
        <p>Product</p>
        <p>Solutions</p>
        <p>Pricing</p>
      </div>
      <div className='flex flex-row gap-10 font-semibold text-lg justify-center text-center items-center'>
        <Button text="Log In" mainColour='bg-[#FF934F]' hoverColour='hover:bg-[#F5ED31]' textColour='text-white' textSize='text-xl' width='w-[120px]' height='h-[60px]' hoverTextColour='hover:text-black'/>
        <Button text="Sign In" mainColour='bg-[#F5ED31]' hoverColour='hover:bg-[#FF934F]' textColour='text-black' textSize='text-xl' width='w-[120px]' height='h-[60px]' hoverTextColour='hover:text-white'/>
      </div>
    </div>
  )
}

export default Navbar