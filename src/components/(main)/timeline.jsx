import Image from 'next/image'
import React from 'react'

function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-5 py-40 text-white gap-14 md:gap-20 via-black bg-gradient-to-tr from-gradient-middle to-gradient-start">
      <div className="flex items-start w-full max-w-7xl">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Timeline</h1>
      </div>
      <Image src={"/timeline.png"} width={1240} height={620} quality={100} loading="eager" alt='HackWithIndia Timeline' />
    </div >
  )
}

export default Timeline;