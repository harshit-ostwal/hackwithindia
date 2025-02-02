import React from 'react'

function BadgeNotification({ data }) {
  return (
    <div className="bg-gradient-to-t text-center from-white to-amber-200 flex items-center justify-center min-h-20 lg:min-h-16 w-full">
      <h1 className="text-lg">{data}</h1>
    </div>
  )
}

export default BadgeNotification