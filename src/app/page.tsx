"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/signin')}>Tap</button>
    </div>
  )
}

export default Page
