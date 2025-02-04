"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://c1.wallpaperflare.com/preview/549/557/108/people-crowd-music-party.jpg",
    "https://c0.wallpaperflare.com/preview/123/755/724/audience-celebration-concert-crowd.jpg",
    "https://media.istockphoto.com/id/1344233773/photo/live-concert-inside-the-arena-with-people-and-stage.jpg?s=612x612&w=0&k=20&c=qI_ZNgYu09M0DjR0BL3CUizqmXVNs_hb-r_zncSKb6Q=",
  ];
  return (
    (<ImagesSlider className="h-[40rem] w-full rounded-lg" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center">
        <motion.div
          className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <h1
            // ref={titleRef}
            className="text-white lg:text-[100px] sm:text-[60px] text-[80px] font-extrabold text-center"
          >

            <span className="relative text-[#FF9933] my-0 mx-[10px] inline-block">
              <span className="absolute top-0 left-0 w-full h-full bg-[#FF9933] opacity-10 -rotate-3"></span>
              Hack
            </span>
            <span className="relative text-white my-0 mx-[15px] inline-block">
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 -rotate-5"></span>
              With
            </span>

            <span className="relative text-[#138808] my-0 mx-[15px] inline-block">
              <span className="absolute top-0 left-0 w-full h-full bg-[#138808] opacity-10 rotate-3"></span>
              India
            </span>
          </h1>
        </motion.div>
        <button
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Upcoming Hackathon →</span>
          <div
            className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>)
  );
}
