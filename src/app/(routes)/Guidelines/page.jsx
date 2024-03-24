import Info from '@/components/(guidelines)/info'
import Header from '@/components/header'
import React from 'react'

function page() {
  return (
    <div className="w-full h-full">
      <div className="via-black bg-gradient-to-tl from-gradient-end to-gradient-middle">
        <Header />
        <Info />
      </div>
    </div>
  )
}

export default page