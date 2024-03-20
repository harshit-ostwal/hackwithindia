import Image from 'next/image'
import React from 'react'

const Images = [
  {
    title: "OPEN INNOVATION",
    imageUrl: "/21.png"
  },
  {
    title: "SMART AGRICULTURE",
    imageUrl: "/22.png"
  },
  {
    title: "HEALTH & FITNESS",
    imageUrl: "/23.png"
  },
  {
    title: "FINTECH",
    imageUrl: "/24.png"
  },
  {
    title: "ENVIRONMENTAL IMPACT",
    imageUrl: "/25.png"
  },
  {
    title: "SMART EDUCATION",
    imageUrl: "/26.png"
  }
]

function Theme() {
  return (
    <div className="text-white via-black flex items-center justify-center bg-gradient-to-tr from-gradient-start to-gradient-start w-full min-h-screen">
      <div className="flex flex-col max-w-7xl w-full p-5 justify-center items-center lg:items-stretch gap-20 min-h-screen">
        <h1 className="text-4xl sm:text-6xl font-bold">Our Themes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-20 items-center justify-center">
          {Images.map((data, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-10">
              <Image src={data.imageUrl} alt={data.title} quality={100} loading="lazy" width={128} height={128} className="w-20 md:w-32" />
              <h1 className="font-medium text-sm lg:text-lg tracking-widest">{data.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Theme