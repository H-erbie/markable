'use client'
import React, {useState} from 'react'
import {

    Home, Telescope, LayoutGrid, Search, Plus, ChevronDown

} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link'
import InputSearch from './input-search';


const BottomTab = () => {
    const [showSearch, setShowSearch] = useState(false)

    const bottomTabLinks = [<Home/>,<LayoutGrid/>, <Telescope/>, ]
  return (
    <div className='bottom-0 sm:bottom-5 lg:hidden flex-col sm:rounded-3xl gap-y-3 p-3 border-t bg-white fixed  w-full sm:w-[40%] sm:left-[30%] flex '>
                            <InputSearch showSearch={showSearch} setShowSearch={setShowSearch} comp='bottom-tab'/>

        <div className='justify-evenly  flex '>{bottomTabLinks.map((link,index) => {
            if (index === 1) return <DropdownMenu key={index}>
            <DropdownMenuTrigger  className="outline-none hover:bg-gray-200 p-3 font-medium focus:outline-none flex items-center gap-x-2   rounded-xl transition-all ">
                {link} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-2'>

                {[0, 1, 2, 3, 4].map((app, index) => (
                  
                        <DropdownMenuItem key={index} className=" pr-16 pl-2 hover:underline h-7 w-full text-start my-2 text-base py-0 ">
                        <Link href='#' key={index}>App{app}</Link>                                    </DropdownMenuItem>
                ))}

            </DropdownMenuContent>
        </DropdownMenu>

          return  <Link href='#' className='p-3 rounded-xl hover:bg-gray-200' key={index}>{link}</Link>
        })}
        <button onClick={()=>setShowSearch(true)} className='p-3 cursor-pointer hover:bg-gray-200 transition-all rounded-xl'><Search /></button>
        <button className="p-3 bg-red-500 lg:hidden hover:bg-red-400 rounded-[100%]"> <Plus className='text-white'/></button>
</div>
    </div>
  )
}

export default BottomTab