import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FloatingNavDemo } from './FloatingNavDemo'

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full">
      <Link href="/" draggable={false} className="select-none"><Image draggable={false} src="/Logo/HWI Black.svg" width={120} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" /></Link>
      {/* <FloatingNavDemo/> */}
      <button className="text-xl">MENU</button>
    </nav>
  )
}

export default Navbar