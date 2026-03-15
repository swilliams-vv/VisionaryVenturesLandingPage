import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { MessageSquare, GitBranch, BarChart2, Zap, Plug, Bot, RefreshCw } from 'lucide-react'

export const metadata = {
  title: 'AI Agent Development Services | Visionary Ventures',
  description: 'AI Agents are intelligent software assistants that work for your business around the clock. We build custom agents that handle customer inquiries, automate repetitive tasks, and process data.',
  keywords: 'AI agent development services, custom AI agent for business, AI agent consulting, build AI agent for business, AI agent implementation services, autonomous AI agent for business operations, AI agent solutions for companies, AI automation services for business, AI powered automation solutions, intelligent automation services, end to end business automation, AI driven process automation'
}

const gold = 'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)'
const goldText = {background:gold,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}

const features = [
  { icon: MessageSquare, title: 'Natural Language Processing', desc: 'Agents that understand and respond to human language with precision, enabling seamless communication across your business.' },
  { icon: GitBranch, title: 'Multi-Agent Orchestration', desc: 'Deploy networks of specialized agents that collaborate autonomously to complete complex, multi-step business workflows.' },
  { icon: Bot, title: 'AI Receptionist', desc: 'Never miss a lead again. Your AI receptionist answers calls, responds to inquiries, qualifies prospects, and books appointments around the clock.' },  
  { icon: RefreshCw, title: 'Automated Follow-Ups', desc: 'Your agent automatically follows up with customers after appointments, purchases, or inquiries — keeping your business top of mind without any manual effort.' },
  { icon: Zap, title: 'Real-Time Processing', desc: 'Agents that operate at machine speed, processing thousands of tasks simultaneously without degradation.' },
  { icon: Plug, title: 'Seamless Integration', desc: 'Drop-in deployment into your existing tech stack with minimal disruption to current operations.' },
]

export default function AIAgentsPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f4f4f5] min-h-screen" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',backgroundSize:'24px 24px'}}>
      <Nav />
      <span className="hidden">AI agent development services, custom AI agent for business, AI agent consulting, build AI agent for business, AI agent implementation services, autonomous AI agent for business operations, AI agent solutions for companies, AI automation services for business, AI powered automation solutions, intelligent automation services, end to end business automation, AI driven process automation</span>

      <section className="relative min-h-[70vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.12)',filter:'blur(120px)'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors mb-8">← Back to Home</Link>
          <p className="text-sm uppercase tracking-widest text-[#a1a1aa] mb-4">AI Agent Development Services</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl">
            Autonomous AI Agents <br />
            <span style={goldText}>Built for Business.</span>
          </h1>
          <p className="mt-6 text-lg text-[#a1a1aa] max-w-2xl font-extralight">
            We build and deploy custom AI agents that handle your most complex workflows autonomously. Our AI agent implementation services are designed to integrate seamlessly into your existing operations, delivering measurable ROI from day one.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/#contact" className="w-full sm:w-auto px-8 py-3 rounded-full text-base font-medium text-[#0a0a0a] transition-all duration-300 hover:-translate-y-[2px]" style={{background:gold}}>Build Your AI Agent</Link>
            <Link href="/#contact" className="w-full sm:w-auto px-8 py-3 rounded-full text-base text-[#f4f4f5] border border-[#ffffff15] bg-[#ffffff05] hover:bg-[#ffffff0a] transition-all duration-300">Get a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base uppercase tracking-widest text-[#a1a1aa] mb-2">What We Build</h2>
          <p className="text-3xl md:text-4xl font-medium text-white mb-16">
            AI agent solutions for <span style={goldText}>every operation</span>.
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
          <h2 className="text-base uppercase tracking-widest text-[#a1a1aa] mb-2">Use Cases</h2>
          <p className="text-3xl md:text-4xl font-medium text-white mb-16">
            Where our <span style={goldText}>agents work</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ['Customer Support Automation', 'Deploy AI agents that handle tier-1 and tier-2 customer inquiries autonomously, escalating only the most complex cases to your human team.'],
              ['Lead Qualification & Follow-Up', 'Agents that qualify inbound leads, respond instantly, schedule meetings, and nurture prospects through your sales funnel without human intervention.'],
              ['Data Analysis & Reporting', 'Intelligent agents that continuously monitor your business data, generate reports, and surface actionable insights in real time.'],
              ['Operations & Scheduling', 'Automate scheduling, crew management, job assignment, and internal communications with agents built for your specific workflow.'],
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
          <h2 className="text-3xl md:text-5xl font-medium text-white">Ready to build your AI agent?</h2>
          <p className="mt-4 text-[#a1a1aa] font-extralight">Our AI agent consulting team is ready to design your custom solution.</p>
          <Link href="/#contact" className="mt-8 inline-block px-8 py-4 bg-white text-[#0a0a0a] rounded-full text-base font-normal hover:-translate-y-1 transition-all duration-300">Start the Conversation</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
