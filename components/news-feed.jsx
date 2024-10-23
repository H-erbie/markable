import React from 'react'
import {newsFeed} from '@/lib/dummy-news-feed'
import Image from "next/image";
import {
    
  MessageCircle, Heart, Send
} from "lucide-react";
import dp from '@/public/dp.webp'

import { Input } from "./ui/input";
import ContainerComps from './container-comps';
const NewsFeed = () => {
  return (
    <div className='flex relative mb-5 flex-col gap-y-9 w-full lg:w-[70%]'>
      <form className='flex p-5 bg-white  rounded-xl border gap-x-3'>
      <div className='min-w-8 '>
          <Image src={dp} width={48} className='w-full rounded-[100%]' height={48} alt='site navbar logo' />
          </div> 
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
                        <button className='flex items-center gap-x-3 rounded-xl bg-red-500 text-white px-3 py-2'>Send <Send/></button>
      </form>
      <div className='lg:hidden block w-full'>
      <ContainerComps/></div>      <div className="py-3 flex flex-col gap-y-9 ">
      {
      newsFeed.map((feed)=>(
        <div className='flex border bg-white p-3  hover:scale-[1.012] transition-all rounded-xl gap-x-3' key={feed.id}>
          {/* <Image src={feed.userDP} className='rounded-[100%]' width={50} height={50} alt='user profile' />        */}
          <div className='min-w-12'>
          <Image src={feed.userDP} width={120} className='w-full rounded-[100%]' height={120} alt='site navbar logo' />
          </div><div className='flex flex-col gap-y-2'>
            <div className='flex items-center justify-between gap-x-3'>
            <p className='font-bold'>{feed.username}</p>
            <div className={`${feed.postType === 'update' ? 'bg-blue-700' : feed.postType === 'phq' ? 'bg-green-600' : feed.postType === 'weekly-register' ? 'bg-pink-600' : ''} text-white rounded-xl text-sm sm:text-base px-3 py-2` }>{feed.postType}</div></div>
          <p className='text-sm text-gray-500'>{feed.datePosted}</p>
          <p>{feed.post}</p>
          <div className='flex mx-auto sm:mx-0 sm:ml-auto gap-x-3'>
         <button className='flex gap-x-2 hover:bg-gray-200 rounded-xl px-3 py-2'> <Heart className='text-pink-500'/> Like</button> <button className='flex px-3 py-2 rounded-xl hover:bg-gray-200 gap-x-3'>  <MessageCircle/>Comment</button>
          </div>
</div>
          </div>
      ))}</div>
      </div>
  )
}

export default NewsFeed