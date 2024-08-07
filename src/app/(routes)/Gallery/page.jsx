"use client"
import BoxReveal from '@/components/magicui/box-reveal';
import { Skeleton } from '@/components/ui/skeleton';
import { GalleryData } from '@/data/Gallery'
import Image from 'next/image'
import React, { useState } from 'react'

function page() {

  const [isLoading, setIsLoading] = useState(true);

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

      <div className="w-[95%] lg:w-4/5 columns-1 md:columns-2 xl:columns-3 space-y-5 relative">
        {GalleryData.map((data, index) => (
          <div key={index}>
            {isLoading && <Skeleton className="aspect-video" />}
            <Image src={data} key={index} onLoad={() => setIsLoading(false)} className={`${isLoading ? "hidden" : ""} object-contain`} quality={100} width={600} height={600} priority fetchPriority="high" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page