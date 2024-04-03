"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import StorageSelect from './(navbar)/StorageSelect'
import { IoIosSettings } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const pathname = usePathname()
  var name = pathname.substring(1);
  console.log(pathname);
  return (
    <div className='flex flex-row w-full justify-between items-center py-6 pr-10'>
      <div>
        <p className='text-7xl capitalize'>{name}</p>
      </div>
      <div className='pr-10'>
        <StorageSelect/>
      </div>
      <Sheet>
        <SheetTrigger className='group bg-gray-900 cursor-pointer p-3 rounded-lg border border-gray-100 shadow shadow-gray-300'>
          <p className='text-3xl'><IoIosSettings/></p>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Navbar