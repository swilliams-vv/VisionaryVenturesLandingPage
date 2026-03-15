'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-[#ffffff0a] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/Untitled-8.png" alt="Visionary Ventures" className="h-6 md:h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="text-sm md:text-base font-medium tracking-wide" style={{background:'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
            Visionary Ventures
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-sm font-normal uppercase tracking-widest text-[#71717a] hover:text-[#f4f4f5] transition-colors duration-300">Services</Link>
          <Link href="/#process" className="text-sm font-normal uppercase tracking-widest text-[#71717a] hover:text-[#f4f4f5] transition-colors duration-300">Process</Link>
          <Link href="/our-team" className="text-sm font-normal uppercase tracking-widest text-[#71717a] hover:text-[#f4f4f5] transition-colors duration-300">Our Team</Link>
          <Link href="/#contact" className="text-sm font-normal uppercase tracking-widest text-[#71717a] hover:text-[#f4f4f5] transition-colors duration-300">Contact</Link>
        </div>

        <Link href="/#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#0a0a0a] transition-all duration-300 rounded-full hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:-translate-y-[1px]" style={{background:'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)'}}>
          Initialize Project
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#f4f4f5] text-xl">{menuOpen ? '✕' : '☰'}</button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#ffffff0a] px-6 py-4 flex flex-col gap-4">
          <Link href="/#services" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-widest text-[#71717a] hover:text-white transition-colors">Services</Link>
          <Link href="/#process" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-widest text-[#71717a] hover:text-white transition-colors">Process</Link>
          <Link href="/our-team" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-widest text-[#71717a] hover:text-white transition-colors">Our Team</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-widest text-[#71717a] hover:text-white transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  )
}
