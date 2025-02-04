import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-11/12">
      <Link href="/" draggable={false} className="select-none"><Image draggable={false} src="/Logo/HWI Black.svg" width={120} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" /></Link>
      <button className="text-xl">MENU</button>
    </nav>
  )
}

export default Navbar