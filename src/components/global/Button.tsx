import React from 'react'

type Props = {
   text:string,
   mainColour:string,
   hoverColour:string,
   textColour:string,
   textSize: string,
   width: string,
   height: string,
   hoverTextColour: string
}

const Button = (props: Props) => {
  return (
    <div className={`${props.width} ${props.height} ${props.mainColour} ${props.hoverColour} ${props.textColour} ${props.hoverTextColour} flex items-center justify-center rounded-sm transition-colors duration-500 ease-in-out cursor-pointer`}>
        <p className={`text-center ${props.textSize}`}>{props.text}</p>
    </div>
  )
}

export default Button