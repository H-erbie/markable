import React from 'react'
import logo from '@/public/logo1.png'
import {

 Plus

} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const BoardComp = () => {
  return (
    <div className='p-5 h-max bg-white rounded-xl w-full shadow-lg'>
        <div className="flex mb-5 border-b pb-2 justify-between">
            <p className="font-bold">Boards</p>
            <Link href='#' className='hover:underline text-sm'>Show all</Link>
        </div>
    <div className="flex item-center gap-x-3">
        {[0,1,2].map((board, index)=> (
            <div className="w-20 rounded-[100%] overflow-hidden" key={index}>
            <Image className="rounded-[100%]" src={logo} alt='border pic'
                
            /></div>
        ))}
                    <button className="p-3 rounded-[100%] hover:bg-blue-400 bg-blue-500"><Plus className='text-white'/></button>

    </div>
    </div>
  )
}

export default BoardComp