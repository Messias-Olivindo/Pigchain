import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(true)
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login with:", { userId, password, rememberMe })

    // Navigate to dashboard after login
    navigate("/dashboard")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-950 to-purple-900 text-white font-pixel p-4">
      <div className="w-full max-w-md bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-pink-500/20">
        {/* PigChain Logo/Title */}
        <h1 className="text-pink-400 text-4xl md:text-6xl mb-10 tracking-wide text-center font-bold relative">
          <span className="inline-block relative px-1">
            P<span className="absolute -top-3 right-0 text-yellow-300 text-lg animate-pulse">•</span>
          </span>
          <span className="inline-block px-1">i</span>
          <span className="inline-block px-1">g</span>
          <span className="inline-block relative px-1">
            C<span className="absolute -top-3 right-0 text-yellow-300 text-lg animate-pulse">•</span>
          </span>
          <span className="inline-block px-1">h</span>
          <span className="inline-block px-1">a</span>
          <span className="inline-block px-1">i</span>
          <span className="inline-block px-1">n</span>
        </h1>

        {/* Login Form */}
        <div className="mb-8">
          <h2 className="text-gray-200 text-3xl font-bold text-center mb-8 tracking-wider">LOGIN</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="userId" className="block text-gray-300 text-lg font-medium">
                USER ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full p-3 bg-gray-900 text-white border-b-2 border-pink-500 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all rounded-md"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-300 text-lg font-medium">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-gray-900 text-white border-b-2 border-pink-500 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all rounded-md"
                  required
                />
              </div>
            </div>

            <div className="flex items-center pt-2">
              <div className="relative">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="sr-only peer"
                />
                <div className="w-6 h-6 bg-gray-700 peer-checked:bg-pink-500 rounded flex items-center justify-center cursor-pointer border border-gray-600 peer-checked:border-pink-400 transition-all">
                  {rememberMe && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <label htmlFor="rememberMe" className="ml-3 text-gray-300 cursor-pointer select-none">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xl font-bold rounded-md hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transform transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-gray-400 text-sm">
          <a href="#" className="hover:text-pink-400 transition-colors">Forgot Password?</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-pink-400 transition-colors">Need Help?</a>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 text-gray-500 text-sm text-center">
        © 2025 PigChain. All rights reserved.
      </div>
    </div>
  )
}