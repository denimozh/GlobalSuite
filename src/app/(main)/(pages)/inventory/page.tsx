import React from 'react'
import { GiSettingsKnobs } from "react-icons/gi";

type Props = {}

const InventoryPage = () => {
  return (
    <div className='flex flex-col w-full pt-4'>
      <section className='w-full'>
        <div className='grid grid-cols-3 grid-rows-2 gap-1 '>
          <div className='bg-[#F5ED31] h-[300px] rounded-[30px]'>
            <div className='flex flex-row justify-between p-4 '>
              <p className='text-black text-2xl font-medium'>Orders</p>
              <div className='bg-[#E9E02F] p-3 rounded-full'>
                <p className='text-3xl text-black'><GiSettingsKnobs/></p>
              </div>
            </div>
          </div>
          <div className='bg-[#FF934F] h-[300px] rounded-[30px]'>
            <p>Stock</p>
          </div>
          <div className='row-span-2 bg-[#3B3B3B] rounded-[30px]' >
            <p>Reorders</p>
          </div>
          <div className='col-span-2 bg-[#F5ED31] rounded-[30px]'>
            <p>Logistics</p>
          </div>
        </div>
      </section>
      <section className='w-full'>

      </section>
    </div>
  )
}

export default InventoryPage