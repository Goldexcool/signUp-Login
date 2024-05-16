"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  return (
    <div className='flex justify-center items-center w-full mt-[10%]'>
      <button onClick={() => router.push('/signin')} className='border 2 border-color1'>Tap to go to Buyers page </button>
      <button onClick={() => router.push('/signInVendor')} className='border 2 border-color1'>Tap to go to Vendors page </button>
    </div>
  )
}

export default Page
