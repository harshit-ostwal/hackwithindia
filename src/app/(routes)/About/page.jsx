import Info from '@/components/(about)/info'
import Info2 from '@/components/(about)/info2'
import Info3 from '@/components/(about)/info3'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "About",
  description: "This AICTE approved Institute under GGSIP University is ideally located in the Institutional area of Janakpuri, New Delhi. Established in 2001, MSIT has a campus spread over eight acres of land with beautiful eco-friendly surroundings. The institute has over a short span of time acquired and developed impressive infrastructure, expertise, and resources for imparting high quality engineeringeducation. The institute provides Bachelor of Technology in CSE, IT, ECE and EEE streams.",
  keywords: ["HackWithIndia","hackathon","web development","app development","programming","technology","education","contest","hackwithindia","Machine Learning Hackathon","Ai Hackathon","ML Hackathon"],
};

function page() {
  return (
    <div className="w-full h-full">
      <div className="via-black bg-gradient-to-tl from-gradient-middle to-gradient-end">
        <Header />
        <Info />
      </div>
      <Info2 />
      <Info3 />
    </div>
  )
}

export default page