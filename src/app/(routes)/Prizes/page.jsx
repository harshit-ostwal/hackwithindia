import QuizWinner from '@/components/(Prizes)/QuizWinner'
import Info from '@/components/(Prizes)/info'
import Info2 from '@/components/(Prizes)/info2'
import Info3 from '@/components/(Prizes)/info3'
import MacroWinner from '@/components/(Prizes)/macroWinner'
import PrizesList from '@/components/(Prizes)/prizesList'
import TaggingWinner from '@/components/(Prizes)/taggingWinner'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-20 p-2 overflow-hidden">
      <Info />
      <PrizesList />
      {/* <Info3 /> */}
      {/* <Info2 /> */}
      {/* <MacroWinner />
      <TaggingWinner />
      <QuizWinner /> */}
    </div>
  )
}

export default page