import React from 'react'

export default function Loading() {
     return (
          <div className="flex items-center justify-center h-[500px]">
               <div className="flex flex-col items-center">
                    <span className="loading loading-dots w-[100px] text-primary"></span>
                    <span className="text-lg font-medium">Loading...</span>
               </div>
          </div>
     )
}
