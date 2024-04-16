import Info from '@/components/(about)/info'
import Info2 from '@/components/(about)/info2'
import Info3 from '@/components/(about)/info3'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "About",
  description: "Learn about HackWithIndia, the premier platform for coding hackathon contests. Discover the rules, guidelines, and instructions that govern our contests. Dive into the world of web development, app development, programming, and technology education. Explore our past contests and see how we're shaping the future of technology through innovation and collaboration.",
  keywords: [
    "HackWithIndia",
    "coding hackathon contest",
    "coding contest",
    "live hackathons",
    "hackwithindia official website",
    "online coding contest",
    "hackathon",
    "web development",
    "app development",
    "programming",
    "technology",
    "education",
    "contest",
    "Machine Learning Hackathon",
    "Ai Hackathon",
    "ML Hackathon",
    "hackathon event",
    "coding competition",
    "software development",
    "coding challenges",
    "programming contest",
    "hackathon for students",
    "hackathon for developers",
    "innovation contest",
    "tech contest",
    "hackathon registration",
    "hackathon prizes",
    "hackathon rules",
    "hackathon guidelines",
    "hackathon schedule",
    "hackathon projects",
    "hackathon ideas"
  ]
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