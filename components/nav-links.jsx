import React from 'react'
import Link from 'next/link'
import {

    ChevronDown,

} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const NavLinks = () => {

    const navlinks = [
        'Home', 'Apps', 'Explore'
    ]

    return (
        <nav className='flex items-center gap-x-2'>
            {
                navlinks.map((link, index) => {
                    if (link === 'Apps') return <DropdownMenu key={index}>
                        <DropdownMenuTrigger  className="outline-none hover:bg-gray-200 py-2 px-3 font-medium focus:outline-none flex items-center gap-x-2 dark:hover:bg-[#292e36]  dark:bg-[#1f2227] p-2 rounded-xl transition-all ">
                            App <ChevronDown />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='p-2'>

                            {[0, 1, 2, 3, 4].map((app, index) => (
                              
                                    <DropdownMenuItem key={index} className=" pr-16 pl-2 hover:underline h-7 w-full text-start my-2 text-base py-0 ">
                                    <Link href='#' key={index}>App{app}</Link>                                    </DropdownMenuItem>
                            ))}

                        </DropdownMenuContent>
                    </DropdownMenu>
                    return <Link href='#' className='font-medium rounded-xl hover:bg-gray-200 transition-all py-2 px-3' key={index}>{link}</Link>
                })
            }
        </nav>
    )
}

export default NavLinks