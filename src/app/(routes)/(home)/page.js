import Info from '@/components/(main)/info'
import Info2 from '@/components/(main)/info2'
import React from 'react'

function page() {

  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-20 p-2 mb-20 overflow-hidden">
      <Info />
      <Info2 />
    </div>
  )
}

export default page