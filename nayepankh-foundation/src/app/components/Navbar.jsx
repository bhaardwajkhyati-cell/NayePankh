'use client'
import { useState, useEffect } from 'react'

export default function Navbar(){
  const [isDark, setIsDark] = useState(false)

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, [isDark])
return (

    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-orange-400/20 bg-white/70 dark:bg-orange-500/10 backdrop-blur-lg shadow-[0_0_30px_rgba(251,146,60,0.15)] rounded-[10%]">
  
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/10 to-transparent animate-shimmer"></div>

  <div className="relative flex justify-between items-center px-8 py-4">
    <span className="text-orange-400 font-bold text-2xl tracking-wide">
      NayePankh
    </span>

    <div className="flex gap-8">
      <a
        href="#hero"
        className="text-gray-700 dark:text-orange-200 hover:text-orange-400 transition duration-300"
      >
        Home
      </a>

      <a
        href="#about"
        className="text-gray-700 dark:text-orange-200 hover:text-orange-400 transition duration-300"
      >
        About
      </a>

      <a
        href="#contact"
        className="text-gray-700 dark:text-orange-200 hover:text-orange-400 transition duration-300"
      >
        Contact
      </a>
      <button
        onClick={() => setIsDark(!isDark)}
        className="text-orange-400 border border-orange-400 px-3 py-1 rounded-full text-sm hover:bg-orange-400 hover:text-black transition"
      >
        {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  </div>

</nav>
  
 )
}