import Navbar from '@/components/(mainpage)/Navbar'
import Sidebar from '@/components/(mainpage)/Sidebar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className='w-full flex flex-row overflow-hidden h-screen'>
        <Sidebar/>
        <div className='w-full'>
            <Navbar/>
            {props.children}
        </div>
    </div>
  )
}

export default Layout