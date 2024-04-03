import React from 'react'

type Props = { children: React.ReactNode }

const layout = ({ children }: Props) => {
  return (
    <div className='pb-20 h-screen overflow-scroll'>
        {children}
    </div>
  )
}

export default layout