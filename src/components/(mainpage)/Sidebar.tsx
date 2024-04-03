"use client"
import { AiFillFilter } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoClipboardOutline } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const pathName = usePathname()
  return (
    <nav className='h-screen flex flex-col justify-between items-center p-8 px-10'>
      <div>
        <p className="text-6xl"><AiFillFilter/></p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Link href={"/inventory"} className="group px-4 p-3 hover:bg-yellow-300 rounded-lg transition-colors duration-500 ease-in-out cursor-pointer">
          <AiOutlineHome className="text-3xl group-hover:text-black"/>
        </Link>
        <Link href={"/stock"} className="group px-4 p-3 hover:bg-yellow-300 rounded-lg transition-colors duration-500 ease-in-out cursor-pointer">
          <IoClipboardOutline className="text-3xl group-hover:text-black"/>
        </Link>
        <Link href={"/orders"} className="group px-4 p-3 hover:bg-yellow-300 rounded-lg transition-colors duration-500 ease-in-out cursor-pointer">
          <LuBaggageClaim className="text-3xl group-hover:text-black"/>
        </Link>
        <Link href={"/calendar"} className="group px-4 p-3 hover:bg-yellow-300 rounded-lg transition-colors duration-500 ease-in-out cursor-pointer">
          <IoCalendarClearOutline className="text-3xl group-hover:text-black"/>
        </Link>
        <Link href={"/settings"} className="group px-4 p-3 hover:bg-yellow-300 rounded-lg transition-colors duration-500 ease-in-out cursor-pointer">
          <IoIosSettings className="text-3xl group-hover:text-black"/>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-10 pb-5">
        <div>
          <IoNotificationsOutline className="text-4xl "/>
        </div>
        <div>
          <Image src={"/person1.jpg"} alt=""  width={50} height={50} className="rounded-lg"/>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar