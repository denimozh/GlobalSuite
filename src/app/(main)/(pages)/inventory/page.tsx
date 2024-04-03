import React from 'react'
import { GiSettingsKnobs } from "react-icons/gi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props = {}

const data = [
  {
    name:"Overdue",
    value:"1",
    barH: "h-[30px]"
  },
  {
    name:"Returns",
    value:"3",
    barH: "h-[60px]"
  },
  {
    name:"In Progress",
    value:"14",
    barH: "h-[100px]"
  },
  {
    name:"Completed",
    value:"94",
    barH: "h-[150px]"
  }
]

const InventoryPage = () => {
  return (
    <div className='flex flex-col w-full pt-4'>
      <section className='w-full'>
        <div className='grid grid-cols-3 grid-rows-2 gap-1 '>
          <div className='bg-[#F5ED31] h-[300px] rounded-[30px] flex flex-col justify-between'>
            <div className='flex flex-row justify-between p-4 '>
              <p className='text-black text-2xl font-medium'>Orders</p>
              <div className='bg-[#E9E02F] p-3 rounded-full'>
                <p className='text-3xl text-black'><GiSettingsKnobs/></p>
              </div>      
            </div>
            <div className='flex flex-row gap-5 pl-8 h-full'>
                {data.map((bar) => (
                  <div key={bar.name} className='flex flex-col justify-end'>
                    <div className='flex flex-col'>
                      <p className='text-3xl text-black font-medium'>{bar.value}</p>
                      <p className='text-md text-black font-medium'>{bar.name}</p>
                    </div>
                    <div className={`bg-gradient-to-b from-gray-900 to-yellow-300 w-28 ${bar.barH} rounded-t-[20px] flex flex-col justify-end`}/>
                  </div>
                ))}
            </div>
          </div>
          <div className='bg-[#FF934F] h-[300px] rounded-[30px] p-4'>
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