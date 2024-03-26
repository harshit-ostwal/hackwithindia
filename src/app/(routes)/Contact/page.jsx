import Form from '@/components/(contact)/form'
import Info from '@/components/(contact)/info'
import Location from '@/components/(contact)/location'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "Contact",
  description: "By harnessing the potential of advanced technologies like artificial intelligence, the Internet of Things, blockchain, and more, our hackathon aims to inspire students to craft innovative solutions that not only contribute to environmental betterment but also address pressing humanitarian challenges.",
  keywords: ["HackWithIndia","hackathon contact no","hackathon helpline", "hackathon", "web development", "app development", "programming", "technology", "education", "contest", "hackwithindia", "Machine Learning Hackathon", "Ai Hackathon", "ML Hackathon",]
};

function page() {
  return (
    <div className="w-full h-full">
      <div className="via-black bg-gradient-to-tl from-gradient-end to-gradient-middle">
        <Header />
        <Info />
      </div>
      <Form />
      <Location />
    </div>
  )
}

export default page