import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { CalendarCheck, DollarSign, FileText, TrendingUp, Database } from 'lucide-react'

export const metadata = {
  title: 'Custom Software Services | Visionary Ventures',
  description: 'AI software integration and business software enhancement services. We modernize, optimize, and upgrade your existing systems for the AI era.',
  keywords: 'business software enhancement services, AI software integration for existing systems, software upgrade and modernization services, software optimization, custom software development for business, business software enhancement, software modernization services'
}

const gold = 'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)'
const goldText = {background:gold,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}

const features = [
  { icon: CalendarCheck, title: 'Scheduling', desc: 'Manage your entire team schedule in one place. Assign jobs, track availability, and notify your crew automatically — no more back and forth.' },
  { icon: DollarSign, title: 'Employee Payments', desc: 'Streamline how your team gets paid. Track hours, calculate wages, and process payments all from one centralized platform.' },
  { icon: FileText, title: 'Invoicing', desc: 'Generate and send professional invoices to clients automatically. Track what has been paid and what is outstanding without digging through spreadsheets.' },
  { icon: TrendingUp, title: 'Profit Tracking', desc: 'See exactly how your business is performing in real time. Track revenue, expenses, and profit margins so you always know where your money is going.' },
  { icon: Database, title: 'Data Organization', desc: 'All of your business data — customers, jobs, employees, and financials — organized and accessible in one place. No more scattered files or lost information.' },
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
            <span style={goldText}>Centralize Your Business.</span>
          </h1>
          <p className="mt-6 text-lg text-[#a1a1aa] max-w-2xl font-extralight">
            We build custom business software designed specifically around how your company operates. From scheduling and crew management to payments, invoicing, and profit tracking — we centralize everything your team needs into one clean, easy to use platform so nothing falls through the cracks.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" justify-items-center">
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
          <h2 className="text-base uppercase tracking-widest text-[#a1a1aa] mb-2">Why Centralize</h2>
          <p className="text-3xl md:text-4xl font-medium text-white mb-16">
            Everything your business needs <span style={goldText}>in one place</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
             ['One Platform, Zero Chaos', 'No need to juggle spreadsheets, texts, and disconnected tools. Everything your team needs lives in one place — organized, accessible, and always up to date.'],
             ['Save Hours Every Week', 'Automating scheduling, invoicing, and payments alone can save your team 10 or more hours every week. That time goes back into growing your business.'],
             ['Always Know Where You Stand', 'Real time profit tracking and data organization means you always have a clear picture of your business performance — no surprises.'],
             ['Built Around How You Work', 'Your software is built specifically around your workflow, your team, and your industry.'],
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
