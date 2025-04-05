"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(true)
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login with:", { userId, password, rememberMe })

    // Navigate to dashboard after login
    router.push("/dashboard")
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

      {/* Login Form */}
      <div className="w-full max-w-md px-4">
        <h2 className="text-white text-4xl md:text-5xl text-center mb-12">LOGIN</h2>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="userId" className="block text-white text-xl mb-2">
              USER ID
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-3 bg-white text-black rounded-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-white text-xl mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white text-black rounded-none"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="w-5 h-5 mr-3"
            />
            <label htmlFor="rememberMe" className="text-white text-lg">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#333333] text-white text-xl font-pixel hover:bg-[#444444] transition-colors"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}

