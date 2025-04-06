import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function DashboardPage() {
  const navigate = useNavigate()

  // Animation for menu items
  const menuAnimation = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  }

  const handleMenuClick = (path: string) => {
    console.log(`Navigating to ${path}`)
    navigate(`/dashboard/${path}`)
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#0a0a20] text-white font-pixel">
      {/* PigChain Title */}
      <h1 className="text-[#ff9d9d] text-4xl md:text-6xl my-12 tracking-wide relative">
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

      {/* Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-4 max-w-4xl mx-auto mt-8">
        {/* Wallet */}
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={menuAnimation.hover}
          whileTap={menuAnimation.tap}
          onClick={() => handleMenuClick("wallet")}
        >
          <div className="relative bg-yellow-300 p-2 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <svg width="100" height="100" viewBox="0 0 100 100" className="block">
              {/* Pig Body */}
              <rect x="25" y="30" width="50" height="40" fill="#ff9d9d" />

              {/* Pig Ears */}
              <rect x="15" y="25" width="15" height="15" fill="#ff9d9d" />
              <rect x="70" y="25" width="15" height="15" fill="#ff9d9d" />

              {/* Pig Snout */}
              <rect x="40" y="50" width="20" height="15" fill="#ff7a7a" />
              <rect x="45" y="55" width="5" height="5" fill="#000" />
              <rect x="55" y="55" width="5" height="5" fill="#000" />

              {/* Pig Eyes */}
              <rect x="35" y="40" width="5" height="5" fill="#000" />
              <rect x="60" y="40" width="5" height="5" fill="#000" />

              {/* Hard Hat */}
              <rect x="30" y="15" width="40" height="20" fill="#ffc107" />
              <rect x="25" y="25" width="50" height="5" fill="#ffc107" />
            </svg>
          </div>
          <p className="mt-3 text-lg md:text-xl">Wallet</p>
        </motion.div>

        {/* Quiz */}
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={menuAnimation.hover}
          whileTap={menuAnimation.tap}
          onClick={() => handleMenuClick("quiz")}
        >
          <div className="relative bg-yellow-300 p-2 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <svg width="100" height="100" viewBox="0 0 100 100" className="block">
              {/* Pig Body */}
              <rect x="25" y="30" width="50" height="40" fill="#ff9d9d" />

              {/* Pig Ears */}
              <rect x="15" y="25" width="15" height="15" fill="#ff9d9d" />
              <rect x="70" y="25" width="15" height="15" fill="#ff9d9d" />

              {/* Pig Snout */}
              <rect x="40" y="50" width="20" height="15" fill="#ff7a7a" />
              <rect x="45" y="55" width="5" height="5" fill="#000" />
              <rect x="55" y="55" width="5" height="5" fill="#000" />

              {/* Pig Eyes - Confused Look */}
              <rect x="35" y="40" width="5" height="5" fill="#000" />
              <rect x="60" y="40" width="5" height="5" fill="#000" />
              <rect x="35" y="35" width="5" height="5" fill="#ff9d9d" />

              {/* Confused Mouth */}
              <rect x="45" y="65" width="5" height="5" fill="#000" />
              <rect x="50" y="70" width="5" height="5" fill="#000" />
              <rect x="55" y="65" width="5" height="5" fill="#000" />

              {/* Question Mark */}
              <rect x="45" y="10" width="10" height="5" fill="#993300" />
              <rect x="55" y="15" width="5" height="5" fill="#993300" />
              <rect x="50" y="20" width="5" height="10" fill="#993300" />
              <rect x="50" y="35" width="5" height="5" fill="#993300" />
            </svg>
          </div>
          <p className="mt-3 text-lg md:text-xl">Quiz</p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={menuAnimation.hover}
          whileTap={menuAnimation.tap}
          onClick={() => handleMenuClick("mission")}
        >
          <div className="relative bg-yellow-300 p-2 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <svg width="100" height="100" viewBox="0 0 100 100" className="block">
              {/* Pig Body */}
              <rect x="25" y="30" width="50" height="40" fill="#ff9d9d" />

              {/* Pig Ears */}
              <rect x="15" y="25" width="15" height="15" fill="#ff9d9d" />
              <rect x="70" y="25" width="15" height="15" fill="#ff9d9d" />

              {/* Pig Snout */}
              <rect x="40" y="50" width="20" height="15" fill="#ff7a7a" />
              <rect x="45" y="55" width="5" height="5" fill="#000" />
              <rect x="55" y="55" width="5" height="5" fill="#000" />

              {/* Pig Eyes - Happy */}
              <rect x="35" y="40" width="5" height="5" fill="#000" />
              <rect x="60" y="40" width="5" height="5" fill="#000" />

              {/* Star */}
              <polygon points="50,5 55,20 70,20 60,30 65,45 50,35 35,45 40,30 30,20 45,20" fill="#ffd700" />

              {/* Smile */}
              <rect x="45" y="65" width="15" height="5" fill="#000" />
              <rect x="40" y="60" width="5" height="5" fill="#000" />
              <rect x="60" y="60" width="5" height="5" fill="#000" />
            </svg>
          </div>
          <p className="mt-3 text-lg md:text-xl">Mission</p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={menuAnimation.hover}
          whileTap={menuAnimation.tap}
          onClick={() => handleMenuClick("achievements")}
        >
          <div className="relative bg-yellow-300 p-2 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <svg width="100" height="100" viewBox="0 0 100 100" className="block">
              {/* Pig Body */}
              <rect x="25" y="30" width="50" height="40" fill="#ff9d9d" />

              {/* Pig Ears */}
              <rect x="15" y="25" width="15" height="15" fill="#ff9d9d" />
              <rect x="70" y="25" width="15" height="15" fill="#ff9d9d" />

              {/* Pig Snout */}
              <rect x="40" y="50" width="20" height="15" fill="#ff7a7a" />
              <rect x="45" y="55" width="5" height="5" fill="#000" />
              <rect x="55" y="55" width="5" height="5" fill="#000" />

              {/* Pig Eyes - Happy */}
              <rect x="35" y="40" width="5" height="5" fill="#000" />
              <rect x="60" y="40" width="5" height="5" fill="#000" />

              {/* Trophy */}
              <rect x="65" y="30" width="20" height="25" fill="#ffd700" />
              <rect x="70" y="55" width="10" height="15" fill="#ffd700" />
              <rect x="65" y="70" width="20" height="5" fill="#ffd700" />

              {/* Smile */}
              <rect x="45" y="65" width="15" height="5" fill="#000" />
              <rect x="40" y="60" width="5" height="5" fill="#000" />
              <rect x="60" y="60" width="5" height="5" fill="#000" />
            </svg>
          </div>
          <p className="mt-3 text-lg md:text-xl">Achievements</p>
        </motion.div>
      </div>
    </div>
  )
}