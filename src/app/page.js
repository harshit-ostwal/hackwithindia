import Event from '@/components/(main)/event'
import Intro from '@/components/(main)/intro'
import Header from '@/components/header'
import React from 'react'

function page() {
  return (
    <div className="w-full h-full">
      <div className="via-black bg-gradient-to-tl from-gradient-start to-gradient-start">
        <Header />
        <Intro />
      </div>
      <Event />
    </div>
  )
}

export default page