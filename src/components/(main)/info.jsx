import Image from 'next/image'
import React from 'react'
import Hive from "../../../public/Main/Hive.svg"
import HackWithIndia from "../../../public/Main/HackWithIndia.png"
import Mx from "../../../public/Main/mx-logo-white.png"

function Info() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">

      <div className="flex flex-col items-center justify-center gap-2">
        <Image src={Mx} alt="Mx Logo" className="w-72 lg:w-96" />
        <h1 className="text-sm font-semibold md:text-base lg:text-xl text-white/70">PRESENTS</h1>
        <Image src={HackWithIndia} />
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-sm font-semibold md:text-base lg:text-xl text-white/70">POWERED BY</h1>
        <Image src={Hive} alt="Hive Logo" className="w-72 lg:w-96" />
      </div>
    </div>
  )
}

export default Info;