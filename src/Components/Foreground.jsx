import React, { useRef, useState } from 'react'
import Card from './Card'
import { useReducer } from 'react'


function Foreground() {
    const ref = useRef(null)
    const data= [
        {
        desc: "Lorem ipsum dolor sit amet consectetur.",
        fileSize: ".9mb",
        close: true,
        tag: {isOpen: true, tagTitle:"DownLoad Now", tagColor: "green"}
    }, {
        desc: "Lorem ipsum dolor sit amet consectetur.",
        fileSize: ".9mb",
        close: true,
        tag: {isOpen: false, tagTitle:"DownLoad Now", tagColor: "green"}
    }, {
        desc: "Lorem ipsum dolor sit amet consectetur.",
        fileSize: ".9mb",
        close: true,
        tag: {isOpen: true, tagTitle:"DownLoad Now", tagColor: "green"}
    }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap  p-5 '>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground