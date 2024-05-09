import HumanCard from '@/components/(humans)/card'
import { HumanCardData } from '@/data/human'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-20 p-2 overflow-hidden">

      <div className="flex flex-col items-center gap-5">
        <h1 className="px-10 py-3 font-medium border border-solid rounded-full border-white/20">THE TEAM</h1>

        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold tracking-wider text-nowrap md:text-6xl">Meet The Humans of</h1>
          <h1 className="text-3xl font-semibold tracking-wider text-nowrap md:text-6xl">HackWithIndia</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center">
        {HumanCardData.map((data, index) => (
          <HumanCard data={data} key={index} />
        ))}
      </div>

    </div>
  )
}

export default page