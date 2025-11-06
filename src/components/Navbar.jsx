import React from 'react'
import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30 grid place-items-center">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-white/90 font-semibold tracking-wide">NovaIntellect</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-cyan-500/30 hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </header>
  )
}
