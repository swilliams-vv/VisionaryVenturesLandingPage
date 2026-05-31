'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { label: 'Website Building', href: '/website-building' },
  { label: 'Custom Business Software', href: '/software' },
  { label: 'AI Agents & Automation', href: '/ai-agents' },
  { label: 'Full AI Integration', href: '/full-ai-integration' },
  { label: 'Dotra', href: 'https://dotracompliance.com', external: true },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled || menuOpen
          ? 'bg-black/80 backdrop-blur-md border-white/5'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-page mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/Untitled-8.png"
            alt="Visionary Ventures"
            className="h-6 md:h-7 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="text-sm md:text-base font-semibold tracking-tight gold-text-gradient">
            Visionary Ventures
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-ink-300 hover:text-ink-50 transition-colors duration-300">
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={openServices} onMouseLeave={scheduleClose}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-ink-300 hover:text-ink-50 transition-colors duration-300"
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                servicesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="w-64 rounded-xl border border-white/10 bg-ink-800/95 backdrop-blur-md p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
                {services.map((s) =>
                  s.external ? (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-ink-200 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-ink-200 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {s.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          <Link href="/our-team" className="text-sm text-ink-300 hover:text-ink-50 transition-colors duration-300">
            Our Team
          </Link>
          <Link href="/learn" className="text-sm text-ink-300 hover:text-ink-50 transition-colors duration-300">
            Learn
          </Link>
        </div>

        <Link
          href="/book-a-consultation"
          className="hidden md:inline-flex h-9 items-center justify-center px-4 text-sm font-medium text-ink-900 rounded-lg gold-fill shadow-sm hover:opacity-90 transition-opacity duration-300"
        >
          Book Consultation
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-50"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          <Link href="/" onClick={() => setMenuOpen(false)} className="py-3 text-base text-ink-100 hover:text-white transition-colors">
            Home
          </Link>

          <button
            type="button"
            onClick={() => setMobileServices((v) => !v)}
            aria-expanded={mobileServices}
            className="flex items-center justify-between py-3 text-base text-ink-100 hover:text-white transition-colors"
          >
            Services
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
          </button>
          {mobileServices && (
            <div className="flex flex-col border-l border-white/10 ml-1 pl-4">
              {services.map((s) =>
                s.external ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="py-2.5 text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                ) : (
                  <Link
                    key={s.label}
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2.5 text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                )
              )}
            </div>
          )}

          <Link href="/our-team" onClick={() => setMenuOpen(false)} className="py-3 text-base text-ink-100 hover:text-white transition-colors">
            Our Team
          </Link>
          <Link href="/learn" onClick={() => setMenuOpen(false)} className="py-3 text-base text-ink-100 hover:text-white transition-colors">
            Learn
          </Link>
          <Link
            href="/book-a-consultation"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-lg gold-fill text-ink-900 text-sm font-medium"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  )
}
