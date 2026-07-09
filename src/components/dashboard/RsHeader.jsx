import React from 'react'

const RsHeader = () => {
  return (
     <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Recent Screenshots</h1>

        <button className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
          View All
        </button>
      </div>
  )
}

export default RsHeader
