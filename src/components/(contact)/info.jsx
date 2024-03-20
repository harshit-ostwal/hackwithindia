import { HeartPulse, Mail, Phone } from 'lucide-react'
import React from 'react'

const InfoData = [
  {
    infoIcon: <Mail size={40} />,
    infoTitle: "Email Address",
    infoDesc: [
      {
        subDesc: "hackwithindia1@gmail.com",
      },
    ]
  },
  {
    infoIcon: <HeartPulse size={40} />,
    infoTitle: "Coordinator",
    infoDesc: [
      {
        subDesc: "Bhavesh Aggarwal",
      },
      {
        subDesc: "Aviral bhardwaj",
      },
      {
        subDesc: "Guneet Sodhi",
      }
    ]
  },
  {
    infoIcon: <Phone size={40} />,
    infoTitle: "Mobile Number",
    infoDesc: [
      {
        subDesc: "+91 77018 77610",
      },
    ]
  },
]

function Info() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-20 py-20 justify-evenly">
      <h1 className="font-bold text-4xl md:text-6xl text-white">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 justify-evenly w-full">
        {InfoData.map((data, index) => (
          <div key={index} className="flex flex-col gap-5 items-center">
            <div className="p-4 flex items-center justify-center bg-gradient-to-tr to-white from-amber-400 rounded-full">{data.infoIcon}</div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="text-white font-semibold text-xl md:text-3xl">{data.infoTitle}</h1>
              {data.infoDesc.map((subData, subIndex) => (
                <p key={subIndex} className="text-gray-400 md:text-xl">{subData.subDesc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Info