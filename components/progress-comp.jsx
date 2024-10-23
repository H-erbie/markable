import React from 'react'
import logo from '@/public/logo1.png'
import {

 Plus

} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
const ProgressComp = () => {
  return (
<div className='p-5 bg-white h-max rounded-xl w-full shadow-lg'>
        <div className="flex mb-5 border-b pb-2 justify-between">
            <p className="font-bold">Personal Progress</p>
            <Link href='#' className='hover:underline text-sm'>Show all</Link>
        </div>
    <div className="flex flex-col justify-center item-center gap-y-3">
        {[0,1,2].map((progress, index)=> (
            <div className="w-[90%] p-3 flex gap-x-3 items-center border-[0.1px] rounded-xl overflow-hidden" key={index}>
            <div className="relative ">
            <Image className="rounded-[100%]" width={50} height={50}  src={logo} alt='border pic'
                
            />                    <button className="p-3 hover:opacity-70 w-[50px] absolute top-0 left-0 rounded-[100%] backdrop-brightness-50 "><Plus className='text-white'/></button>
</div>
<div >
    <p className="text-sm mb-2">Are your parents living?</p>
            <div className={'w-16 h-3 rounded-xl text-[12px] text-center text-white  bg-green-950'}> 7</div></div>
</div>
        ))}

    </div>

    <p className='mt-2 ml-auto w-max'> <Link href='#' className='hover:underline text-sm'>Go to board</Link></p>

    </div>  )
}

export default ProgressComp