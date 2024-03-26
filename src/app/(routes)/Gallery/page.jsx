import Main from '@/components/(gallery)/main'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "Gallery",
  description: "By harnessing the potential of advanced technologies like artificial intelligence, the Internet of Things, blockchain, and more, our hackathon aims to inspire students to craft innovative solutions that not only contribute to environmental betterment but also address pressing humanitarian challenges.",
  keywords: ["HackWithIndia", "hackathon", "web development", "app development", "programming", "technology", "education", "contest", "hackwithindia", "Machine Learning Hackathon", "Ai Hackathon", "ML Hackathon",]
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