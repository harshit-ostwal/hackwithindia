"use client"
import Info from '@/components/(main)/info'
import React, { useEffect } from 'react'

function page() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-20 p-2 overflow-hidden">
      <Info />
    </div>
  )
}

export default page