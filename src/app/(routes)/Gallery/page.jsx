import Main from '@/components/(gallery)/main'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "Gallery",
  description: "",
  keywords: [""],
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