import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo1.png'
import {

 Plus, Filter, Edit

} from "lucide-react";
import { Input } from "./ui/input";
const TaskComp = () => {
  return (
    <div className='p-5 bg-white h-max rounded-xl w-full shadow-lg'>
    <div className="flex mb-5 gap-x-1 items-center border-b pb-2 justify-between">
        <p className="font-bold">Task</p>
        <Input
                            id="taks"
                            name="taks"
                            type="text"
                            required
                            autoComplete="off"
                            placeholder="Add your next task "
                            // value={search}
                            // onChange={handleChange}
                            className="h-9 w-3/4  focus:outline-gray-200 dark:border-zinc-700 dark:focus:outline-gray-300 "

                        />
        <button className="p-2 rounded-[100%] hover:bg-blue-400 bg-blue-500"><Filter className='text-white'/></button>
        </div>
<div className="flex flex-col item-center gap-y-3">
    {[0,1,2].map((board, index)=> (
        <p className="px-3 py-2 flex gap-x-3 items-center bg-gray-200 rounded-xl" key={index}>
       Lorem ipsum dolor, sit amet consectetur <Edit/> </p>
    ))}

</div>               
<p className='mt-2 ml-auto w-max'> <Link href='#' className='hover:underline text-sm'>Show all</Link></p>

</div>  )
}

export default TaskComp