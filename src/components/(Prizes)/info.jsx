import React from 'react'
import BoxReveal from '../magicui/box-reveal'
import AnimatedGradientText from '../magicui/animated-gradient-text'
import { cn } from '@/lib/utils'
import { FaChevronRight } from 'react-icons/fa'

function Info() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col items-center max-w-5xl gap-10 text-center">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="font-semibold tracking-tighter text-7xl">
            Prizes<span className="text-[#5046e6]"></span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-sm md:text-lg lg:text-xl">
            Collaborate and innovate to build something awesome ! All monetary prizes will be split equally among the winning team members<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
        <div className="flex flex-col items-center gap-4">
          <AnimatedGradientText>
            <hr className="mx-2 h-8 w-[1px] shrink-0" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Winners will also get MLH winner pins 🌟
            </span>
            <FaChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
      </div>
    </div>
  )
}

export default Info