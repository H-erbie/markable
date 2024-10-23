import React from 'react'
import { Input } from "./ui/input";
import {
    
    Search,X
} from "lucide-react";
const InputSearch = ({comp, showSearch, setShowSearch}) => {
  return (
<div className={`flex ${comp === 'bottom-tab' && showSearch ? 'h-max' : ''} ${comp === 'bottom-tab' && 'h-0'}  overflow-hidden transition-all items-center justify-center  gap-x-3`}>
                        <Input
                            id="search"
                            name="search"
                            type="search"
                            required
                            autoComplete="off"
                            placeholder="Search for contacts "
                            // value={search}
                            // onChange={handleChange}
                            className="h-9 w-3/4  focus:outline-gray-200 dark:border-zinc-700 dark:focus:outline-gray-300 "

                        />
                      {comp === 'bottom-tab' ?    <button  onClick={()=>setShowSearch(false)}  className='p-3 bg-gray-100 hover:bg-gray-200 transition-all rounded-xl'><X/> </button>:
                        <button type='button' className='p-3 bg-gray-100 hover:bg-gray-200 transition-all rounded-xl'>  <Search/> </button> }
                    </div>  )
}

export default InputSearch