import React from 'react'

function Info() {
  return (
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex flex-col items-center max-w-5xl gap-10 text-center">
          <h1 className="text-6xl font-semibold tracking-widest">Prizes</h1>
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg md:text-xl text-white/70">Collaborate and innovate to build something awesome ! All monetary prizes will be split equally among the winning team members.</p>
            <p className="px-6 py-3 text-xs font-medium capitalize border border-solid rounded-full lg:px-10 text-nowrap sm:text-sm md:text-md lg:text-lg border-white/20">Winners will also get MLH winner pins 🌟</p>
          </div>
        </div>
      </div>
  )
}

export default Info