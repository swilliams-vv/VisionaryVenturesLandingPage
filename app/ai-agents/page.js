import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import { ArrowRight, MessageSquare, GitBranch, Zap, Plug, Bot, RefreshCw } from 'lucide-react'

export const metadata = {
  title: 'AI Agent Development Services | Custom AI Agents for Business',
  description:
    'Visionary Ventures builds and deploys custom AI agents: AI receptionists, chatbots, and autonomous workflows that answer inquiries, qualify leads, book appointments, and follow up around the clock.',
  keywords: [
    'AI agent development services',
    'custom AI agent for business',
    'AI agent consulting',
    'AI receptionist',
    'autonomous AI agents',
    'AI automation services for business',
  ],
  alternates: { canonical: '/ai-agents' },
  openGraph: {
    title: 'AI Agent Development Services | Visionary Ventures',
    description:
      'Custom AI agents that handle customer inquiries, qualify leads, and automate workflows around the clock.',
    url: 'https://visionaryv.net/ai-agents',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agent Development Services',
  serviceType: 'AI agent development and automation',
  provider: { '@id': 'https://visionaryv.net/#organization' },
  areaServed: 'US',
  description:
    'Custom AI agent development for businesses: AI receptionists, chatbots, multi-agent orchestration, and automated follow-ups that operate 24/7.',
}

const stats = [
  ['24/7', 'Always answering'],
  ['<1s', 'Average response'],
  ['100%', 'Of leads captured'],
  ['∞', 'Conversations at once'],
]

const features = [
  { icon: MessageSquare, title: 'Natural Language Processing', desc: 'Agents that understand and respond to human language with precision, enabling seamless communication across your business.' },
  { icon: GitBranch, title: 'Multi-Agent Orchestration', desc: 'Deploy networks of specialized agents that collaborate autonomously to complete complex, multi-step business workflows.' },
  { icon: Bot, title: 'AI Receptionist', desc: 'Never miss a lead again. Your AI receptionist answers calls, responds to inquiries, qualifies prospects, and books appointments around the clock.' },
  { icon: RefreshCw, title: 'Automated Follow-Ups', desc: 'Your agent automatically follows up with customers after appointments, purchases, or inquiries, keeping your business top of mind without any manual effort.' },
  { icon: Zap, title: 'Real-Time Processing', desc: 'Agents that operate at machine speed, processing thousands of tasks simultaneously without degradation.' },
  { icon: Plug, title: 'Seamless Integration', desc: 'Drop-in deployment into your existing tech stack with minimal disruption to current operations.' },
]

const useCases = [
  ['Customer Support Automation', 'Deploy AI agents that handle tier-1 and tier-2 customer inquiries autonomously, escalating only the most complex cases to your human team.'],
  ['Lead Qualification & Follow-Up', 'Agents that qualify inbound leads, respond instantly, schedule meetings, and nurture prospects through your sales funnel without human intervention.'],
  ['Data Analysis & Reporting', 'Intelligent agents that continuously monitor your business data, generate reports, and surface actionable insights in real time.'],
  ['Operations & Scheduling', 'Automate scheduling, crew management, job assignment, and internal communications with agents built for your specific workflow.'],
]

export default function AIAgentsPage() {
  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero — asymmetric, live agent console */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full pointer-events-none -z-10" style={{ background: 'rgba(184,146,74,0.12)', filter: 'blur(150px)' }} />
        <div className="max-w-page mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal trigger="mount" y={50}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300 mb-4">AI Agent Development</p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tightest leading-[1.0]">
              Autonomous AI Agents <span className="gold-text-gradient">built for business.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base sm:text-lg text-ink-300 leading-relaxed">
              We build and deploy custom AI agents that handle your most complex workflows autonomously,
              integrating into your existing operations and delivering measurable ROI from day one.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/book-a-consultation?scope=ai-agents" className="inline-flex h-12 items-center justify-center rounded-lg px-6 gap-1.5 text-base font-medium text-ink-900 gold-fill shadow-lg shadow-gold-900/30 hover:opacity-90 transition-opacity">
                Build Your AI Agent <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/book-a-consultation?scope=ai-agents" className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-base text-ink-50 border border-white/15 bg-white/5 hover:bg-white/10 transition-all">
                Get a Consultation
              </Link>
            </div>
          </Reveal>

          <Reveal trigger="mount" y={70} delay={0.3} className="relative">
            <AgentConsole />
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="border-y border-white/5">
        <div className="max-w-page mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {stats.map(([val, label], i) => (
            <Reveal key={label} delay={i * 0.08} className={`py-10 text-center ${i >= 2 ? 'border-t border-white/5 lg:border-t-0' : ''}`}>
              <div className="text-4xl sm:text-5xl font-semibold tracking-tightest gold-text-gradient">{val}</div>
              <div className="mt-2 text-sm text-ink-400">{label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-28">
        <div className="max-w-page mx-auto px-6">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">What We Build</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white max-w-2xl leading-[1.05]">
              AI agent solutions for <span className="gold-text-gradient">every operation</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl bg-white/[0.03] p-7 transition-colors duration-300 hover:bg-white/[0.06]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
                      <Icon strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{f.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-page mx-auto px-6">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Use Cases</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white max-w-2xl leading-[1.05]">
              Where our <span className="gold-text-gradient">agents work</span>.
            </h2>
          </Reveal>
          <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
            {useCases.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="grid md:grid-cols-[0.5fr_1.5fr] gap-3 md:gap-10 py-7 group">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-gold-100">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-300">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Ready to build your AI agent?" sub="Our AI agent consulting team is ready to design your custom solution." />
      <Footer />
    </main>
  )
}

function PageCTA({ title, sub }) {
  return (
    <section className="py-20 px-6">
      <Reveal className="max-w-page mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-50 text-ink-900 p-12 md:p-16 text-center">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(220,184,102,0.45), transparent 45%), radial-gradient(circle at 5% 100%, rgba(184,146,74,0.35), transparent 50%)' }} />
          <div className="relative max-w-xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-[1.0]">{title}</h2>
            <p className="mt-4 text-base md:text-lg text-ink-600">{sub}</p>
            <Link href="/book-a-consultation?scope=ai-agents" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg px-7 gap-1.5 text-base font-medium text-white bg-ink-900 hover:bg-ink-800 transition-colors">
              Start the Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* Signature visual: a live AI receptionist console with floating result chips */
function AgentConsole() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div aria-hidden className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-400/15 via-transparent to-transparent blur-3xl" />
      <div className="relative z-10 overflow-hidden rounded-2xl bg-ink-900/80 backdrop-blur shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2.5 border-b border-white/5 px-5 py-3.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg gold-fill text-ink-900"><Bot className="h-4 w-4" /></span>
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-white leading-none">AI Receptionist</p>
            <p className="mt-1 text-[11px] text-ink-400">Visionary Ventures · Agent</p>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online</span>
        </div>
        <div className="space-y-3 p-5">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 px-3.5 py-2.5 text-[12.5px] text-ink-100">Hi! I&apos;d like to book a consultation for next week.</div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gold-400/15 px-3.5 py-2.5 text-[12.5px] text-gold-50">Absolutely. I have Tuesday 10am or Thursday 2pm open. Which works best?</div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 px-3.5 py-2.5 text-[12.5px] text-ink-100">Thursday at 2 is perfect.</div>
          <div className="flex items-center gap-1.5 pl-1 pt-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-500" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-500" style={{ animationDelay: '0.2s' }} />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-500" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="!mt-4 flex items-center justify-between rounded-xl bg-gold-400/5 px-4 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gold-300">This week</p>
              <p className="mt-0.5 text-lg font-semibold text-white">142 calls handled</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-gold-300">Booked</p>
              <p className="mt-0.5 text-lg font-semibold gold-text-gradient">38</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
