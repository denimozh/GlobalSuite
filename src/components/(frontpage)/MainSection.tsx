import React from 'react'
import { MacbookScrollDemo } from './MacBook-Animation'
import { InfiniteMovingCards } from './infinite-moving-cards'
import { clients } from '@/lib/constant'
import Hero from './Hero'
import Navbar from './Navbar'

const MainSection = () => {
  return (
    <div className="flex flex-col w-full items-center ">
            <div className=" w-full flex flex-col inset-0 repeat-infinite h-fit [background:radial-gradient(125%_125%_at_50%_10%,#060606_35%,#223_100%)]">
             <div className="h-[22rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] rounded-b-full pb-16">
                <div className="flex flex-col gap-24">
                    <Navbar/>
                    <Hero/>
                </div>
              </div>
              <div className="flex justify-center">
                <InfiniteMovingCards
                    className="pt-96"
                    items={clients}
                    direction="right"
                    speed="slow"
                />
              </div>
              <div className="pb-36">
                <MacbookScrollDemo/>
              </div>
            </div>
          </div>
  )
}

export default MainSection