import React from 'react'

type BackgroundProps = {
  position?: 'fixed' | 'absolute'
  className?: string
}

const Background: React.FC<BackgroundProps> = ({ position = 'fixed', className = '' }) => {
  const rootClass = `${position} inset-0 -z-10 pointer-events-none ${className}`.trim()

  return (
    <div className={rootClass}>
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 rounded-full bg-green-400/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-56 rounded-full bg-yellow-400/15 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent" />
    </div>
  )
}

export default Background


