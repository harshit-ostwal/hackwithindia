import BoxReveal from '@/components/magicui/box-reveal'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col items-center w-full min-h-full gap-20 p-2 overflow-hidden">
      <div className="flex flex-col items-center max-w-5xl gap-5 text-center">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="font-semibold tracking-tighter text-7xl">
            Schedule Comming Soon...<span className="text-[#5046e6]"></span>
          </p>
        </BoxReveal>
      </div>
    </div>
  )
}

export default page