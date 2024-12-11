"use client"
import Image from 'next/image'
import React from 'react'
import HackWithChandigarh from "../../../public/Main/Community Post.jpeg"
import MX from "../../../public/Partners/mx-logo-white.png"
import { FiArrowUpRight } from 'react-icons/fi'
import { cn } from "@/lib/utils";
import AnimatedGradientText from '../magicui/animated-gradient-text'
import { FaChevronRight } from 'react-icons/fa';
import confetti from "canvas-confetti";
import BoxReveal from "@/components/magicui/box-reveal";
import SparklesText from '../magicui/sparkles-text'

function Info() {

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="flex flex-col items-center justify-center w-11/12 gap-20">
      <div className="flex flex-col justify-between w-full gap-10 xl:flex-row">
        <div className="flex flex-col gap-2">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-xl font-semibold lg:text-4xl">
              India's Biggest Hackathon Community,<span className="text-[#5046e6]"></span>
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <SparklesText className={"text-5xl lg:text-7xl h-full"} text={"HackWithIndia"} />
          </BoxReveal>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col text-white/70">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-base font-medium text-nowrap md:text-lg">
                Our st Biggest Hackathon In Bangalore.<span className="text-[#de59f3]"></span>
              </p>
            </BoxReveal>
          </div>
          <button onClick={handleClick} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black duration-150 bg-white md:py-3 md:text-base md:px-10 hover:scale-95 w-fit">Register Now<FiArrowUpRight size={28} /></button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black duration-150 bg-white md:py-3 md:text-base md:px-10 hover:scale-95 w-fit">Register For Macro Challenge<FiArrowUpRight size={28} /></button>
        </div>
      </div>
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-8 w-[1px] shrink-0" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing Next Upcoming Hackathon
        </span>
        <FaChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-20">
          <Image src={HackWithChandigarh} alt="HackWithIndia Logo" width={800} quality={100} fetchPriority="high" className="rounded-md" priority={true} />
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="capitalize text-neutral-300">Powered By</h1>
            <Image src={MX} alt="HackWithIndia Logo" width={500} quality={100} fetchPriority="high" priority={true} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Info;
