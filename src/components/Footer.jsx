import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-white/5 backdrop-blur-xl text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70">© {new Date().getFullYear()} NovaIntellect. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white/90">Privacy</a>
          <a href="#" className="hover:text-white/90">Security</a>
          <a href="#" className="hover:text-white/90">Status</a>
        </div>
      </div>
    </footer>
  )
}
