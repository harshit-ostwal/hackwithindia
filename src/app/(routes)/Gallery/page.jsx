"use client"
import BoxReveal from '@/components/magicui/box-reveal';
import ShineBorder from '@/components/magicui/shine-border';
import Image from 'next/image'
import React, { useState } from 'react'
import SparklesText from '@/components/magicui/sparkles-text';
import Link from 'next/link';
import { PastEvents } from '@/data/pastEvents';

function page() {

  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-20 p-2 overflow-hidden">

      <div className="flex flex-col items-center max-w-5xl gap-5 text-center">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="font-semibold tracking-tighter text-7xl">
            Past Events<span className="text-[#5046e6]"></span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-sm md:text-lg lg:text-xl">
            Explore our gallery of memorable moments from HackWithIndia<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
      </div>

      <div className="h-full gap-14 lg:columns-2 2xl:columns-3 columns-1">
        {
          PastEvents.map((data, index) => (
            <Link href={`Gallery/${data.title}`} key={index}>
              <ShineBorder
                className="w-[380px] sm:w-[500px] p-8 rounded-md mb-14 flex flex-col gap-14"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <Image src={data.thumbanil} alt={data.title} quality={100} fetchPriority="high" loading="eager" priority={true} />
                <div className="flex flex-col w-full gap-4">
                  <SparklesText className="text-4xl font-extrabold tracking-tighter" text={data.title} />
                  <p className="text-sm text-neutral-400">{data.description}</p>
                  <div className="flex items-center justify-between w-full">
                    <h1 className="text-sm font-semibold text-neutral-400">{data.location}</h1>
                    <h1 className="text-sm font-semibold text-neutral-400">{data.date}</h1>
                  </div>
                </div>
              </ShineBorder>
            </Link>
          ))
        }
      </div>
    </div >
  )
}

export default page