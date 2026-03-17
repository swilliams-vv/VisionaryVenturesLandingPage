import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#ffffff0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{background:'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)'}}></div>
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/Untitled-8.png" alt="Visionary Ventures" className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
          <span className="text-sm font-medium" style={{background:'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
            Visionary Ventures
          </span>
        </Link>
        <p className="text-sm text-[#71717a]">&copy; {new Date().getFullYear()} VisionaryV LLC. All systems nominal.</p>
        <div className="flex items-center gap-6">
          <Link href="/our-team" className="text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors">Our Team</Link>
          <a href="#" className="text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
