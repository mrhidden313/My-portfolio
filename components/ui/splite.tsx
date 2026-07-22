'use client'

import React, { Suspense } from 'react'
import Spline from '@splinetool/react-spline'

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (splineApp: any) => void
  [key: string]: any
}

export function SplineScene({ scene, className, onLoad, ...props }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <div className={className}>
        <Spline scene={scene} className="w-full h-full" onLoad={onLoad} {...props} />
      </div>
    </Suspense>
  )
}
