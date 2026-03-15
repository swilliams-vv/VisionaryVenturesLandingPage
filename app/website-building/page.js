import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Zap, MonitorSmartphone, Bot, Search } from 'lucide-react'

export const metadata = {
  title: 'Custom Website Design & Development | Visionary Ventures',
  description: 'Professional website building services for businesses. We design and develop custom, high-performance websites that convert visitors into clients.',
  keywords: 'custom website design and development, business website design services, professional website building services, business website redesign services, custom web development company'
}

const gold = 'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)'
const goldText = {background:gold,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}

const features = [
  { icon: Zap, title: 'Lightning Fast Performance', desc: 'Sub-second load times built on modern frameworks. Speed is SEO and speed is conversion.' },
  { icon: MonitorSmartphone, title: 'Mobile-First Design', desc: 'Every website we build looks and performs flawlessly on any device, screen size, or browser.' },
  { icon: Bot, title: 'AI Chatbot Integration', desc: 'Built-in AI chatbots that engage visitors, answer questions, and communicate leads to you around the clock.' },
  { icon: Search, title: 'SEO Optimized', desc: 'Every page built with search engine ranking in mind — from key words to page structure.' },
]

export default function WebsiteBuildingPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f4f4f5] min-h-screen" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',backgroundSize:'24px 24px'}}>
      <Nav />
      <span className="hidden">custom website design and development, business website design services, professional website building services, business website redesign services, custom web development company</span>

      <section className="relative min-h-[70vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.12)',filter:'blur(120px)'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors mb-8">← Back to Home</Link>
          <p className="text-sm uppercase tracking-widest text-[#a1a1aa] mb-4">Custom Website Design & Development</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl">
            Websites That <br />
            <span style={goldText}>Work For You.</span>
          </h1>
          <p className="mt-6 text-lg text-[#a1a1aa] max-w-2xl font-extralight">
            We design and build custom websites that don't just look great — they actively grow your business. Professional website design built to convert.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/#contact" className="w-full sm:w-auto px-8 py-3 rounded-full text-base font-medium text-[#0a0a0a] transition-all duration-300 hover:-translate-y-[2px]" style={{background:gold}}>Start Your Website</Link>
            <Link href="/#contact" className="w-full sm:w-auto px-8 py-3 rounded-full text-base text-[#f4f4f5] border border-[#ffffff15] bg-[#ffffff05] hover:bg-[#ffffff0a] transition-all duration-300">Get a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base uppercase tracking-widest text-[#a1a1aa] mb-2">What's Included</h2>
          <p className="text-3xl md:text-4xl font-medium text-white mb-16">
            Everything your business <span style={goldText}>website needs</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(f => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-6 hover:border-[#C9A84C]/30 hover:-translate-y-1 transition-all duration-300">
                  <Icon className="text-[#C9A84C] mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]" strokeWidth={1.5} size={36} />
                  <h3 className="text-lg font-medium text-white mb-2">{f.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-[#ffffff15]" style={{background:'linear-gradient(to bottom right, #1a1405, #0a0a0a)'}}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.2)',filter:'blur(80px)'}}></div>
          <h2 className="text-3xl md:text-5xl font-medium text-white">Ready for a website that converts?</h2>
          <p className="mt-4 text-[#a1a1aa] font-extralight">Our web development team is ready to build your custom business website.</p>
          <Link href="/#contact" className="mt-8 inline-block px-8 py-4 bg-white text-[#0a0a0a] rounded-full text-base font-normal hover:-translate-y-1 transition-all duration-300">Start the Conversation</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
