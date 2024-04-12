import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from 'react-icons/lu';
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='flex-shrink-0 relative h-72 w-60 rounded-[60px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 fomst-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full '>
            <div className='flex items-center justify-between py-3 px-8 h-10 mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-8 h-8  bg-zinc-600 rounded-full flex items-center  justify-center'>
                    {data.close? <IoMdCloseCircle/> :  <LuDownload/> }
               
                </span>
             
            </div>
            {data.tag.isOpen && (
                 <div className={`tag w-full py-4 bg-blue-600 flex justify-center`}>
                 <h3 className='font-semibold'> {data.tag.tagTitle}</h3>
             </div>
            ) 
        }
           
        </div>
    </motion.div>
  )
}

export default Card