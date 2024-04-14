"use client"
import MapInv from "@/components/(mainpage)/(grid)/Map/Map";
import { PieChart } from "@/components/(mainpage)/(grid)/PieChart";
import * as d3 from "d3";

import React from 'react'
import { GiSettingsKnobs } from "react-icons/gi";

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

const piData = [
  {id:1, name:"In Stock", value:100, color:"bg-[#cc4e00]"},
  {id:2, name:"Out of Stock", value:90, color:"bg-[#662700]"},
  {id:3, name:"Low Stock", value:20, color:"bg-[#993b00]"},
  {id:4, name:"Dead Stock", value:50, color:"bg-[#000]"}
]

const InventoryPage = () => {
  const mapIsReadyCallback = (map: any) => {
    console.log(map);
  }

  return (
    <div className='flex flex-col w-full pt-4'>
      <section className='w-full'>
        <div className='grid grid-cols-3 grid-rows-2 gap-1'>
          <div className='bg-[#F5ED31] h-[300px] rounded-[30px] flex flex-col justify-between shadow-2xl '>
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
          <div className='bg-[#FF934F] h-[300px] rounded-[30px] p-4 overflow-hidden'>
            <div className="flex flex-row justify-between">
              <p className='text-black text-3xl font-medium'>Stock</p>
              <div className='bg-[#9e6643] p-3 rounded-full'>
                  <p className='text-3xl text-black'><GiSettingsKnobs/></p>
              </div> 
            </div>
            <div>
              <PieChart data={piData} width={400} height={400} />
            </div>
          </div>
          <div className='row-span-2 bg-[#3B3B3B] rounded-[30px]' >
            <div className="flex flex-col">
              <div>
                <p>Reorders</p>
              </div>
            </div>
          </div>
          <div className='col-span-2 bg-[#2F2A26] rounded-[30px]'>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <p className="text-3xl pl-7 pt-4">Logistics</p>
                    <p className="text-white text-xl pl-7 pt-4">Delivery is Delayed</p>
                  </div>
                  <div className="flex flex-row">
                    
                  </div>
                </div>
                <MapInv mapIsReadyCallback={mapIsReadyCallback}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full'>

      </section>
    </div>
  )
}

export default InventoryPage