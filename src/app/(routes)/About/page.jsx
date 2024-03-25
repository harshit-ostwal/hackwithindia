import Info from '@/components/(about)/info'
import Info2 from '@/components/(about)/info2'
import Info3 from '@/components/(about)/info3'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
    title: "About",
    description: "",
    keywords: [""],
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