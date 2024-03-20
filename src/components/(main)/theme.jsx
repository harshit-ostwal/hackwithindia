import Image from 'next/image'
import React from 'react'

const Images = [
  {
    title:"",
    imageUrl:"/21.png"
  },
  {
    title:"",
    imageUrl:"/22.png"
  },
  {
    title:"",
    imageUrl:"/23.png"
  },
  {
    title:"",
    imageUrl:"/24.png"
  },
  {
    title:"",
    imageUrl:"/25.png"
  },
  {
    title:"",
    imageUrl:"/26.png"
  }
]

function Theme() {
  return (
    <div className="text-white via-black flex items-center justify-center bg-gradient-to-tr from-gradient-start to-gradient-start w-full min-h-screen">
      <div className="flex flex-col max-w-7xl w-full min-h-screen justify-evenly">
        <h1 className="text-3xl sm:text-6xl font-bold">Our Themes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 items-center justify-center">
          {Images.map((data, index) => (
            <Image src={data.imageUrl} key={index} alt={data.title} quality={100} loading="lazy" width={150} height={150} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Theme