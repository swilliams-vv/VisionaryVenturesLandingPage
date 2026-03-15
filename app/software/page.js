import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Wrench, Bot, BarChart2, RefreshCw, Lock, Zap } from 'lucide-react'

export const metadata = {
  title: 'Business Software Enhancement Services | Visionary Ventures',
  description: 'AI software integration and business software enhancement services. We modernize, optimize, and upgrade your existing systems for the AI era.',
  keywords: 'business software enhancement services, AI software integration for existing systems, software upgrade and modernization services, software optimization, custom software development for business, business software enhancement, software modernization services'
}

const gold = 'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)'
const goldText = {background:gold,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}

const features = [
  { icon: Wrench, title: 'Legacy System Modernization', desc: 'We upgrade and modernize outdated software systems without disrupting your current operations.' },
  { icon: Bot, title: 'AI Integration', desc: 'Inject AI capabilities directly into your existing software stack — no full rebuild required.' },
  { icon: BarChart2, title: 'Real-Time Analytics', desc: 'Add powerful analytics dashboards to your existing systems for instant business intelligence.' },
  { icon: RefreshCw, title: 'Process Automation', desc: 'Automate repetitive manual processes within your current software environment.' },
  { icon: Lock, title: 'Security Hardening', desc: 'Upgrade your software security protocols to meet modern enterprise standards.' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Identify and eliminate bottlenecks, dramatically improving your software speed and reliability.' },
]

export default function SoftwarePage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f4f4f5] min-h-screen" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',backgroundSize:'24px 24px'}}>
      <Nav />
      <span className="hidden">business software enhancement services, AI software integration for existing systems, software upgrade and modernization services, software optimization, custom software development for business, software modernization services</span>

      <section className="relative min-h-[70vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.12)',filter:'blur(120px)'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors mb-8">← Back to Home</Link>
          <p className="text-sm uppercase tracking-widest text-[#a1a1aa] mb-4">Business Software Enhancement Services</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl">
            Upgrade Your Software. <br />
            <span style={goldText}>Amplify Your Business.</span>
          </h1>
          <p className="mt-6 text-lg text-[#a1a1aa] max-w-2xl font-extralight">
            You don't always need to start from scratch. Our software enhancement and modernization services inject AI capabilities, automation, and performance improvements directly into your existing systems — delivering maximum ROI with minimal disruption.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/#contact" className="w-full sm:w-auto px-8 py-3 rounded-full text-base font-medium text-[#0a0a0a] transition-all duration-300 hover:-translate-y-[2px]" style={{background:gold}}>Enhance Your Software</Link>
            <Link href="/#contact" className="w-full sm:w-auto px-8 py-3 rounded-full text-base text-[#f4f4f5] border border-[#ffffff15] bg-[#ffffff05] hover:bg-[#ffffff0a] transition-all duration-300">Get a Free Audit</Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base uppercase tracking-widest text-[#a1a1aa] mb-2">Our Services</h2>
          <p className="text-3xl md:text-4xl font-medium text-white mb-16">
            Software optimization <span style={goldText}>at every level</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <section className="py-24 border-t border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base uppercase tracking-widest text-[#a1a1aa] mb-2">Why Enhance</h2>
          <p className="text-3xl md:text-4xl font-medium text-white mb-16">
            The smarter path to <span style={goldText}>modernization</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ['Lower Cost Than Rebuilding', 'Software enhancement delivers modern capabilities at a fraction of the cost of a full rebuild, protecting your existing investment.'],
              ['Minimal Business Disruption', 'We enhance your systems while they remain operational, ensuring zero downtime and no disruption to your team.'],
              ['Faster Time to Value', 'Enhancements can be deployed in weeks rather than months, getting you to ROI faster than any new build.'],
              ['Future-Proof Architecture', 'We build enhancements with scalability in mind, ensuring your software can grow alongside your business.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4 bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0"></div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-[#ffffff15]" style={{background:'linear-gradient(to bottom right, #1a1405, #0a0a0a)'}}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.2)',filter:'blur(80px)'}}></div>
          <h2 className="text-3xl md:text-5xl font-medium text-white">Ready to modernize your software?</h2>
          <p className="mt-4 text-[#a1a1aa] font-extralight">Get a free software audit and see exactly where AI can add the most value.</p>
          <Link href="/#contact" className="mt-8 inline-block px-8 py-4 bg-white text-[#0a0a0a] rounded-full text-base font-normal hover:-translate-y-1 transition-all duration-300">Start the Conversation</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
