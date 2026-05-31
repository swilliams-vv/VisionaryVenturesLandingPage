import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import { ArrowRight, Bot, Globe, Settings, Plus } from 'lucide-react'

export const metadata = {
  title: 'Full AI Integration | One Connected System',
  description:
    'Full AI integration from Visionary Ventures connects your AI agents, custom software, and website into one intelligent system that transforms how your entire business operates.',
  keywords: [
    'full AI integration',
    'end to end AI integration',
    'AI integration services',
    'connected AI systems for business',
  ],
  alternates: { canonical: '/full-ai-integration' },
  openGraph: {
    title: 'Full AI Integration | Visionary Ventures',
    description:
      'Your AI agents, software, and website connected into one intelligent system that transforms your business.',
    url: 'https://visionaryv.net/full-ai-integration',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Full AI Integration',
  serviceType: 'End-to-end AI integration',
  provider: { '@id': 'https://visionaryv.net/#organization' },
  areaServed: 'US',
  description:
    'Connecting AI agents, custom business software, and websites into one integrated system that automates operations end to end.',
}

const pillars = [
  { icon: Bot, label: 'AI Agents' },
  { icon: Globe, label: 'Websites' },
  { icon: Settings, label: 'Software' },
]

export default function FullAIIntegrationPage() {
  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center">
        <div aria-hidden className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[45vw] rounded-full pointer-events-none -z-10" style={{ background: 'rgba(184,146,74,0.12)', filter: 'blur(150px)' }} />

        <Reveal trigger="mount" y={40}>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Full AI Integration</p>
          <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tightest leading-[1.0]">
            Everything, <span className="gold-text-gradient">working as one</span>.
          </h1>
          <p className="mt-7 mx-auto max-w-xl text-base sm:text-lg text-ink-300 leading-relaxed">
            We connect your AI agents, custom software, and website into one intelligent system,
            automating the day-to-day end to end so your entire business runs smarter.
          </p>
        </Reveal>

        {/* combined-into-one visual */}
        <Reveal trigger="mount" y={50} delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:gap-3">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.label} className="flex items-center gap-3 sm:gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] text-ink-200">
                      <Icon strokeWidth={1.5} className="h-6 w-6" />
                    </span>
                    <span className="text-xs text-ink-400">{p.label}</span>
                  </div>
                  {i < pillars.length - 1 && <Plus className="h-4 w-4 text-ink-500 rotate-90 sm:rotate-0" />}
                </div>
              )
            })}
            <ArrowRight className="my-1 h-5 w-5 rotate-90 text-gold-300/70 sm:mx-3 sm:my-0 sm:rotate-0" />
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/[0.05] shadow-[0_0_36px_rgba(220,184,102,0.35)]">
                <img src="/Untitled-8.png" alt="" aria-hidden className="h-10 w-auto object-contain" />
              </span>
              <span className="text-xs font-medium gold-text-gradient">One intelligent system</span>
            </div>
          </div>
        </Reveal>

        <Reveal trigger="mount" y={24} delay={0.55}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/book-a-consultation?scope=integration" className="inline-flex h-12 items-center justify-center rounded-lg px-6 gap-1.5 text-base font-medium text-ink-900 gold-fill shadow-lg shadow-gold-900/30 hover:opacity-90 transition-opacity">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#services" className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-base text-ink-50 border border-white/15 bg-white/5 hover:bg-white/10 transition-all">
              Explore our services
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
