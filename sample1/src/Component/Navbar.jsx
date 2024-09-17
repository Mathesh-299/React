import { CircleUserRound } from "lucide-react";
import React from 'react';
export const Navbar = () => {
  return (
    <>
    <div className='w-screen h-screen bg-gray-400'>
        <div className=' w-full h-[60px] bg-gradient-to-r from-gray-400 to-gray-600 flex justify-start items-center gap-3 border-white'>
            <div className='w-[700px] h-[50px]  font-bold text-3xl text-white'>
                <div className='flex justify-center items-center pt-1'>Mathesh</div>
            </div>
            <div className='w-[350px] h-[50px]  flex flex-row  font-bold text-3xl text-white p-3 justify-end items-center' >
                <div>Profile</div>
            </div>
            <div className='w-[350px] h-[50px]  flex flex-row  font-bold text-3xl text-white  p-3 justify-end items-center' >
                <div>Project</div>
            </div>
            <div className='w-[350px] h-[50px]  flex flex-row  font-bold text-3xl text-white p-3 justify-end items-center' >
                <div>Contact</div>
            </div>
            <div className='w-[350px] h-[50px]  flex flex-row  font-bold text-3xl text-white p-3 justify-center items-center' > <CircleUserRound />
            </div>
        </div>
        <div className="bg-white w-3/6 h-3/6 flex flex-row justify-center items-center " >
        </div>
    </div>
    </>
  )
}

