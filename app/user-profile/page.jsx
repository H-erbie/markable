import React from 'react'
import Image from "next/image";

import {

  Youtube, Twitter, Facebook, Instagram, Star

} from "lucide-react";
import Link from 'next/link'
import dp from '@/public/dp.webp'
import ProfileCompNobtn from '@/components/profile-comp-nobtn';
import ProfileCompbtn from '@/components/profile-comp-btn';
const Page = () => {
  const socials = [
    <Youtube />, <Twitter />, <Facebook />, <Instagram />
  ]

  return (
    <div className='min-h-screen gap-3 flex-col lg:flex-row pt-28 pb-14 px-5 bg-gray-100 flex'>

      <div className="lg:w-[40%] w-full lg:sticky top-28  h-max p-3 border rounded-xl gap-y-5 flex flex-col justify-center">
        <Image src={dp} width={120} className='mx-auto mb-3 rounded-[100%]' height={120} alt='user dp' />
        <div className="">
          <p className="font-bold text-center">Herbert Koranteng</p></div>
        <div className="flex justify-center items-center  ">
          <p className='w-max text-center border-r pr-3'>Following  <span className='text-xl font-bold'>401K</span>
          </p>
          <p className='flex text-center pl-3 w-max items-center gap-x-3'>  <span className='text-xl font-bold'>4M</span> Followers
          </p></div>
        <div className='flex mx-auto gap-x-3'>
          {
            socials.map((social, index) => (
              <Link href='#' key={index}>{social}</Link>
            ))
          }
        </div>
      </div>
      <div className="lg:w-[60%] w-full flex flex-col gap-y-9 rounded-xl p-3 border">
        <ProfileCompNobtn head='Followers' />
        <ProfileCompNobtn head='People you follow' />
        <ProfileCompNobtn head='Organisations' />
        <ProfileCompbtn head='Contact' />
        <ProfileCompbtn head='Projects' />
        <ProfileCompbtn head='Albumns' />
      </div>
    </div>
  )
}

export default Page