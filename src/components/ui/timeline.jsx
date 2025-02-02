"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative mx-auto py-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col min-h-96">
            <div className="sticky flex flex-col md:flex-row z-40">
              <div className="h-10 absolute -left-5 w-10 rounded-full flex items-center justify-center">
                <div className="h-16 rounded-full bg-amber-100 p-2" />
              </div>
              <div className="flex flex-col gap-10">
                <h3 className="text-3xl pl-6 md:pl-20 md:text-4xl font-bold">
                  {item.title}
                </h3>
                <div className="text-lg md:text-xl pl-6 md:pl-20 font-medium">
                  {item.content}{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-0 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div >)
  );
};
