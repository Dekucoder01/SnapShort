import React from 'react'

const RsTableHeading = () => {
  return (
    <div className="grid grid-cols-6 items-center border-y border-gray-700 px-4 py-3 text-gray-400 font-semibold">
            <p>Preview</p>
            <p>Title</p>
            <p>Date</p>
            <p>Category</p>
            <p>Tags</p>
            <p><i className="ri-arrow-right-s-line flex items-center justify-end"></i></p>
          </div>
  )
}

export default RsTableHeading
