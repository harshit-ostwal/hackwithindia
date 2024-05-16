import Image from 'next/image'
import React from 'react'
import Hive from "../../../public/Main/Hive.svg"
import HackWithIndia from "../../../public/Main/HackWithIndia.png"
import Mx from "../../../public/Main/mx-logo-white.png"
import SocialMedia from '../socialMedia'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'

function Info() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-20 p-5">
      <div className="flex flex-col justify-between w-full gap-10 xl:flex-row">
        <div className="flex flex-col">
          <h1 className="text-lg font-medium md:text-2xl text-white/70">This Year's Hackathon Theme,</h1>
          <h1 className="text-4xl font-bold lg:text-6xl">Digital Anonymity</h1>
          <h1 className="text-4xl font-bold lg:text-6xl">Unleashed</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col text-white/70">
            <p className="text-base font-medium text-nowrap md:text-lg">Join us at G.L.Bajaj Institute Of Technology,</p>
            <p className="text-base font-medium text-nowrap md:text-lg">May 20 for an in-person hackathon.</p>
          </div>
          <Link href={"/Prizes"} target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black duration-150 bg-white md:py-3 md:text-base md:px-10 hover:scale-95 w-fit">Explore Logitech Tracks<FiArrowUpRight size={28} /></Link>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src={Mx} alt="Mx Logo" className="w-72 lg:w-96" />
          <h1 className="text-sm font-semibold md:text-base lg:text-xl text-white/70">PRESENTS</h1>
          <Image src={HackWithIndia} />
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-sm font-semibold md:text-base lg:text-xl text-white/70">POWERED BY</h1>
          <div className="flex items-center justify-center w-full">
            <Image src={Hive} alt="Hive Logo" className="w-72 lg:w-96" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Info;