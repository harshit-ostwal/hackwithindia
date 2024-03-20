import Form from '@/components/(contact)/form'
import Info from '@/components/(contact)/info'
import Location from '@/components/(contact)/location'
import Header from '@/components/header'
import React from 'react'

function page() {
  return (
    <div className="w-full h-full">
      <div className="via-black bg-gradient-to-tl from-gradient-end to-gradient-middle">
        <Header />
        <Info />
      </div>
      <Form />
      <Location />
    </div>
  )
}

export default page