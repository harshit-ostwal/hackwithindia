import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import LeftLeaf from "../../../public/LeftLeaf.svg"
import RightLeaf from "../../../public/RightLeaf.svg"
import Image from 'next/image'

function Info2() {
  return (
    <div className="flex flex-col items-center w-full h-full gap-10">
      <div className="flex flex-col items-center max-w-2xl gap-10 text-center lg:max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-wide md:text-4xl lg:text-6xl">Exclusive Tracks By Logitech</h1>
        <p className="text-sm md:text-lg lg:text-xl text-white/70">Get to interact and learn more about the amazing <span className="font-bold text-white">MX Master Series</span> by Logitech and win amazing prizes along the way!</p>
      </div>

      <div className="flex flex-col items-center justify-center w-[95%] lg:w-4/5 gap-10 border border-white border-solid rounded-3xl h-80 md:h-96 bg-gradient-to-tl from-green-800 to-white/20">
        <div className="flex items-center justify-center gap-0 md:gap-4">
          <Image
            src={LeftLeaf}
            alt="leaf"
            className="w-10 md:w-16"
            quality={100}
            priority={true} fetchPriority="high"
          />
          <h1 className="text-lg font-semibold tracking-wider text-center capitalize text-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Logitech Macro Challenge</h1>
          <Image
            src={RightLeaf}
            alt="leaf"
            className="w-10 md:w-16"
            quality={100}
            priority={true} fetchPriority="high"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="max-w-xl text-xs font-semibold text-center md:text-base xl:max-w-5xl lg:text-xl">Enter Logitech's Smart Action Hack challenge: automate tasks with a keystroke using MX Master series and Logi Options+ to win MX Master 3s and MX Keys S! 🚀</p>
          <Link href={"https://forms.gle/tfheT2qDcN5kt7i59"} target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black duration-150 bg-white md:py-3 md:text-base md:px-10 hover:scale-95 w-fit">Submit Your Macro Idea<FiArrowUpRight size={28} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Info2