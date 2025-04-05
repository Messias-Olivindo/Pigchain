"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function PigChain() {
  const [hover, setHover] = useState(false)
  const router = useRouter()

  // Simple animation for the "PRESS START" text
  const startAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const handleStartClick = () => {
    router.push("/login")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a20] text-white font-pixel">
      {/* PigChain Title */}
      <h1 className="text-[#ff9d9d] text-4xl md:text-6xl mb-16 tracking-wide relative">
        <span className="relative">
          P<span className="absolute -top-4 right-1 text-yellow-300 text-xs">•</span>
        </span>
        <span>i</span>
        <span>g</span>
        <span className="relative">
          C<span className="absolute -top-4 right-1 text-yellow-300 text-xs">•</span>
        </span>
        <span>h</span>
        <span>a</span>
        <span>i</span>
        <span>n</span>
      </h1>

      {/* Piggy Bank with Coin */}
      <div className="relative mb-12">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-300 rounded-full"></div>
        <svg width="100" height="80" viewBox="0 0 100 80" className="fill-[#ff9d9d]">
          {/* Pig Body */}
          <rect x="30" y="30" width="40" height="30" />
          <rect x="20" y="40" width="60" height="20" />
          <rect x="25" y="35" width="50" height="5" />
          <rect x="25" y="60" width="50" height="5" />

          {/* Pig Legs */}
          <rect x="30" y="65" width="10" height="5" />
          <rect x="60" y="65" width="10" height="5" />

          {/* Pig Ears */}
          <rect x="25" y="25" width="10" height="10" />
          <rect x="65" y="25" width="10" height="10" />

          {/* Pig Snout */}
          <rect x="45" y="45" width="10" height="5" />
          <rect x="40" y="50" width="20" height="5" />

          {/* Pig Eyes */}
          <rect x="35" y="40" width="5" height="5" />
          <rect x="60" y="40" width="5" height="5" />

          {/* Pig Tail */}
          <rect x="80" y="35" width="5" height="5" />
          <rect x="85" y="30" width="5" height="5" />
          <rect x="90" y="25" width="5" height="5" />
        </svg>
      </div>

      {/* PRESS START Button */}
      <motion.button
        className="relative cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={hover ? startAnimation : {}}
        whileTap={{ scale: 0.95 }}
        onClick={handleStartClick}
      >
        <div className="text-center">
          <div
            className="text-3xl md:text-5xl font-bold tracking-wider"
            style={{
              color: "#FFD700",
              textShadow: "2px 2px 0 #B8860B, 4px 4px 0 #8B6914, 6px 6px 0 #000",
            }}
          >
            PRESS
          </div>
          <div
            className="text-3xl md:text-5xl font-bold tracking-wider"
            style={{
              color: "#FFD700",
              textShadow: "2px 2px 0 #B8860B, 4px 4px 0 #8B6914, 6px 6px 0 #000",
            }}
          >
            START
          </div>
        </div>
      </motion.button>
    </div>
  )
}

