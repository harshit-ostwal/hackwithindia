import Main from '@/components/(gallery)/main'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "Gallery",
  description: "Explore the vibrant world of HackWithIndia through our gallery of hackathon images. See the excitement of live hackathons captured in stunning pictures. Browse through our collection of hackathon images and get inspired by the creativity and innovation on display. Join us in celebrating the spirit of web development, app development, programming, and technology education.",
  openGraph: {
    title: "Gallery | HackWithIndia",
    description: "Explore the vibrant world of HackWithIndia through our gallery of hackathon images. See the excitement of live hackathons captured in stunning pictures. Browse through our collection of hackathon images and get inspired by the creativity and innovation on display. Join us in celebrating the spirit of web development, app development, programming, and technology education.",
    url: "https://hackwithindia.live/Gallery",
    images:
      "https://res.cloudinary.com/dgw7uwtzg/image/upload/v1714453712/andgjtvunpehjvzvg6vi.png",
    siteName: "HackWithIndia | An Official Coding Hackathons",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Hackathon prizes", "Rewards", "Hackathon", "Coding", "Programming", "Tech",
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
    "hackathon ideas",
    "hackwithdelhi"
  ]
};

function page() {
  return (
    <div className="w-full h-full">
      <div className="via-black bg-gradient-to-tl from-gradient-start to-gradient-start">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default page