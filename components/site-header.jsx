"use client";
import React from 'react'
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetFooter,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import logo1 from '@/public/logo1.png'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import dp from '@/public/dp.webp'
import NavLinks from './nav-links';
import InputSearch from './input-search';
import {
    Mail, Bell, Zap, Star, Plus,
    AlignRight,
    Search
} from "lucide-react";
const SiteHeader = () => {
    

    const sheetHead = [
        <Bell />, <Mail />, <Zap />
    ]
    return (
        <NavigationMenu className="sm:fixed transition-all py-3 top-0 z-40 w-screen  bg-white  border-b-[0.01px] border-gray-200 px-5  flex flex-col">
            <NavigationMenuList>
                {/* <div className=" flex h-16 w-full items-center overflow-hidden justify-between px-3 sm:px-6  lg:mx-auto"> */}
                {/* sidemenu */}

                <NavigationMenuItem>
                    <Link href='/' >
                        <Image src={logo1} width={50} height={50} alt='site navbar logo' />
                    </Link></NavigationMenuItem>
                <NavigationMenuItem className='hidden lg:block'>
                    <NavLinks />
                </NavigationMenuItem>
                <NavigationMenuItem className='hidden lg:block'>
                    <InputSearch/>
                </NavigationMenuItem>
                <NavigationMenuItem className='flex items-center  gap-x-3'>
                    <Link href='/user-profile' className="flex transition-all items-center gap-x-3 hover:bg-gray-200 rounded-xl px-3 py-2"> <Image src={dp} className='rounded-[100%]' width={50} height={50} alt='user profile' /> <p className="font-semibold hidden lg:block">Herbert</p> </Link>
                    <button className=' sm:px-3 transition-all sm:py-2 hidden lg:flex gap-x-3'> <span className='font-medium  lg:flex  hover:bg-red-400 rounded-xl px-3 py-2 bg-red-500 text-white items-center gap-x-2'><Plus/> Create </span> </button>
                    <Sheet>
                        <SheetTrigger asChild className='cursor-pointer'>
                            <button className='hover:bg-gray-200 p-3 transition-all  rounded-xl'>
                            <AlignRight /></button>
                            {/* <span className='absolute top-0 right-0 p-2 rounded-[100%] bg-black text-white'>25</span> */}

                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className='border-b pb-3'>
                                <div className=" mb-3 ">
                                  <div className='flex gap-x-1  justify-start w-full items-center mr-3 sm:mr-0'>
                                    {
                                        sheetHead.map((btn, index) => {
                                            
                                            
                                            return <button key={index} className='relative outline-none hover:bg-gray-200 rounded-xl p-3 focus:outline-none w-max'>{btn}
                                                <span className='absolute top-0 -right-1 text-sm p-[2px] rounded-[100%] bg-black text-white'>25</span>
                                            </button>
                                        })
                                    }</div>
                                </div>
                                <Link href='/user-profile' className="flex flex-col sm:flex-row items-center w-full hover:bg-gray-200 rounded-xl px-3 py-2 justify-center gap-x-3">
                                    <Image src={dp} className='rounded-[100%]' width={50} height={50} alt='user profile' />

                                    <SheetTitle> <p className="text-center font-bold">Herbert Koranteng</p></SheetTitle>                                    <button  className='w-max transition-all rounded-xl hover:bg-white px-3 py-2 flex gap-x-3 border '><Star/> Upgrade</button>

                                </Link>
                            </SheetHeader>
                            <SheetFooter></SheetFooter>
                        </SheetContent>
                    </Sheet>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default SiteHeader