import React from 'react'

function PremiumLoader() {
  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-white animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-white text-lg tracking-wide animate-pulse">
          Preparing your food...
        </p>
      </div>
    </div>
  )
}

export default PremiumLoader