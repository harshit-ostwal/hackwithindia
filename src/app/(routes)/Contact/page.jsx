import Form from '@/components/(contact)/form'
import Info from '@/components/(contact)/info'
import Location from '@/components/(contact)/location'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "Contact",
  description: "Contact HackWithIndia for all your hackathon inquiries. Find our contact number and helpline for assistance with our web development, app development, programming, and technology education contests. Connect with us to learn more about our upcoming events and how you can get involved in the exciting world of coding hackathons.",
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
      <div className="bg-black">
        <Header />
        <Info />
      </div>
      <Form />
      <Location />
    </div>
  )
}

export default page