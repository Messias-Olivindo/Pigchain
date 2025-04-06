import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PigChain() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const piggyVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" }
    }
  };

  const startButtonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      textShadow: "0 0 8px rgba(255,215,0,0.8)",
      transition: { duration: 0.3 }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }
  };

  const coinVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        delay: 1.2
      }
    }
  };

  const floatingCoins = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleStartClick = () => {
    navigate("/login");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0a0a20] to-[#1a1a40] text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 100,
                Math.random() * window.innerHeight,
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth + 50,
                Math.random() * window.innerWidth,
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating coins */}
      <motion.div
        className="absolute right-16 top-1/4"
        variants={floatingCoins}
        animate="animate"
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#B8860B" fontSize="18" fontWeight="bold">$</text>
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute left-24 bottom-1/3"
        variants={floatingCoins}
        animate="animate"
        transition={{
          delay: 0.5,
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="12" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#B8860B" fontSize="14" fontWeight="bold">$</text>
        </svg>
      </motion.div>

      {/* PigChain Title with glow effect */}
      <motion.h1
        className="text-5xl md:text-7xl mb-16 tracking-wide relative font-bold"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff9d9d] to-[#ff7070] drop-shadow-[0_0_15px_rgba(255,157,157,0.5)]">
          <span className="relative">
            P<span className="absolute -top-4 right-1 text-yellow-300 text-xs animate-pulse">•</span>
          </span>
          <span>i</span>
          <span>g</span>
          <span className="relative">
            C<span className="absolute -top-4 right-1 text-yellow-300 text-xs animate-pulse">•</span>
          </span>
          <span>h</span>
          <span>a</span>
          <span>i</span>
          <span>n</span>
        </span>
      </motion.h1>

      {/* Improved Piggy Bank with Coin */}
      <motion.div 
        className="relative mb-16"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={piggyVariants}
      >
        <motion.div 
          className="absolute -top-12 left-1/2 transform -translate-x-1/2"
          variants={coinVariants}
          initial="initial"
          animate="animate"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#FFD700" stroke="#B8860B" strokeWidth="1.5" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#B8860B" fontSize="10" fontWeight="bold">$</text>
          </svg>
        </motion.div>
        
        <svg width="180" height="140" viewBox="0 0 180 140" className="drop-shadow-[0_0_8px_rgba(255,157,157,0.6)]">
          {/* Pig Body */}
          <ellipse cx="90" cy="80" rx="50" ry="40" fill="#ff9d9d" />
          <rect x="40" y="75" width="100" height="35" rx="10" fill="#ff9d9d" />
          
          {/* Coin Slot */}
          <rect x="85" y="50" width="10" height="2" rx="1" fill="#ff7a7a" />
          
          {/* Pig Legs */}
          <rect x="50" y="110" width="10" height="15" rx="5" fill="#ff9d9d" />
          <rect x="120" y="110" width="10" height="15" rx="5" fill="#ff9d9d" />
          
          {/* Pig Ears */}
          <ellipse cx="55" cy="55" rx="12" ry="10" fill="#ff9d9d" />
          <ellipse cx="125" cy="55" rx="12" ry="10" fill="#ff9d9d" />
          
          {/* Pig Snout */}
          <ellipse cx="90" cy="85" rx="15" ry="10" fill="#ff7a7a" />
          <ellipse cx="85" cy="85" rx="3" ry="3" fill="#333" />
          <ellipse cx="95" cy="85" rx="3" ry="3" fill="#333" />
          
          {/* Pig Eyes */}
          <ellipse cx="70" cy="70" rx="5" ry="5" fill="white" />
          <ellipse cx="70" cy="70" rx="2" ry="2" fill="#333" />
          <ellipse cx="110" cy="70" rx="5" ry="5" fill="white" />
          <ellipse cx="110" cy="70" rx="2" ry="2" fill="#333" />
          
          {/* Pig Tail */}
          <path d="M140,70 Q150,60 145,50 Q140,40 130,45" stroke="#ff9d9d" strokeWidth="6" fill="transparent" strokeLinecap="round" />
          
          {/* Blockchain Elements */}
          <rect x="25" y="90" width="15" height="15" rx="2" fill="#FFD700" fillOpacity="0.6" />
          <rect x="140" y="90" width="15" height="15" rx="2" fill="#FFD700" fillOpacity="0.6" />
          <rect x="25" y="65" width="15" height="15" rx="2" fill="#FFD700" fillOpacity="0.6" />
          <rect x="140" y="65" width="15" height="15" rx="2" fill="#FFD700" fillOpacity="0.6" />
        </svg>
      </motion.div>

      {/* PRESS START Button with enhanced styling */}
      <motion.button
        className="relative cursor-pointer bg-gradient-to-r from-[#FFD700] to-[#FFC107] p-1 rounded-lg shadow-lg"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial="hidden"
        animate={mounted ? (hover ? "hover" : "visible") : "hidden"}
        variants={startButtonVariants}
        whileTap={{ scale: 0.95 }}
        onClick={handleStartClick}
        whileHover="hover"
      >
        <div className="bg-[#0a0a20] px-12 py-4 rounded-md">
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
        </div>
      </motion.button>
    </div>
  );
}