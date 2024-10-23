import React from 'react'
import logo2 from '@/public/logo2.png'
import {

  Youtube, Twitter, Facebook, Instagram,Phone, MessageCircle, Plus, ChevronDown

} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
const SiteFooter = () => {
  const socials = [
    <Youtube/>, <Twitter/>, <Facebook/>, <Instagram/>
  ]
  const permalinks = [
    {
      id:1,
      head:logo2,
      links:['About us', 'Terms & Conditions', 'Privacy & Cookies'],
    },
    {
      id:2,
      head:'Organisations',
      links:['Control Panel', 'Dicover the Marketplace ', 'Create Organisation Account', ],
    },
    {
      id:3,
      head:'Your Account',
      links:['Library', 'Profile', 'Projects', 'Help'],
    },
    {
      id:4,
      head:'Explore',
      links:['Metrics', 'Networks', 'Strategies'],
    },
  ]
  return (
    <div className='py-9 pb-28 sm:px-0 px-4'>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 i mb-8 place-item-start sm:place-items-center gap-5">
      {permalinks.map((link)=>(
        <div className="" key={link.id}>
          {link.id === 1 ? <Image alt='footer logo' className='mb-3' width={80} height={80} src={link.head}/> :<p className='mb-3 capitalize font-bold'>{link.head}</p>}
          <div className="flex flex-col gap-y-2">
            {link.links.map((permalink, index)=>(
              <Link href='#' key={index}>{permalink}</Link>
            ))}
          </div>
        </div>
      ))
      }</div>
      <div className="flex sm:items-center gap-5 flex-col sm:flex-row  justify-evenly">
        <div className="flex items-center gap-3"><MessageCircle/> <span> Markable@gmail.com</span></div>
        <div className='flex gap-x-3'>
          {
            socials.map((social, index)=>(
              <Link href='#' key={index}>{social}</Link>
            ))
          }
        </div>
        <p className='flex items-center gap-x-3'><Phone/>02000000000</p>
      </div>

      </div>
  )
}

export default SiteFooter