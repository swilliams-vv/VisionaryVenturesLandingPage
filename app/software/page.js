import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import { ArrowRight, CalendarCheck, DollarSign, FileText, TrendingUp, Database, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Custom Business Software | Centralize Your Operations',
  description:
    'Visionary Ventures builds custom business software that centralizes scheduling, invoicing, payments, profit tracking, and data into one platform, built around how your company actually operates.',
  keywords: [
    'custom software development for business',
    'business software enhancement services',
    'AI software integration for existing systems',
    'software modernization services',
    'business operations software',
  ],
  alternates: { canonical: '/software' },
  openGraph: {
    title: 'Custom Business Software | Visionary Ventures',
    description:
      'Centralize scheduling, invoicing, payments, and data into one custom platform built around your workflow.',
    url: 'https://visionaryv.net/software',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Business Software Development',
  serviceType: 'Custom business software development',
  provider: { '@id': 'https://visionaryv.net/#organization' },
  areaServed: 'US',
  description:
    'Custom software that centralizes scheduling, employee payments, invoicing, profit tracking, and data into one platform built around the client workflow.',
}

const stats = [
  ['10+', 'Hours saved weekly'],
  ['1', 'Unified platform'],
  ['0', 'Spreadsheets needed'],
  ['100%', 'Built to your workflow'],
]

const features = [
  { icon: CalendarCheck, title: 'Scheduling', desc: 'Manage your entire team schedule in one place. Assign jobs, track availability, and notify your crew automatically. No more back and forth.' },
  { icon: DollarSign, title: 'Employee Payments', desc: 'Streamline how your team gets paid. Track hours, calculate wages, and process payments all from one centralized platform.' },
  { icon: FileText, title: 'Invoicing', desc: 'Generate and send professional invoices automatically. Track what is paid and what is outstanding without digging through spreadsheets.' },
  { icon: TrendingUp, title: 'Profit Tracking', desc: 'See exactly how your business is performing in real time. Track revenue, expenses, and margins so you always know where your money is going.' },
  { icon: Database, title: 'Data Organization', desc: 'All of your business data, from customers and jobs to employees and financials, organized and accessible in one place. No more scattered files.' },
]

const why = [
  ['One platform, zero chaos', 'No need to juggle spreadsheets, texts, and disconnected tools. Everything your team needs lives in one place: organized, accessible, and always up to date.'],
  ['Save hours every week', 'Automating scheduling, invoicing, and payments alone can save your team 10 or more hours every week. That time goes back into growing your business.'],
  ['Always know where you stand', 'Real-time profit tracking and data organization means you always have a clear picture of business performance. No surprises.'],
  ['Built around how you work', 'Your software is built specifically around your workflow, your team, and your industry, not a generic template.'],
]

export default function SoftwarePage() {
  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero — asymmetric, operations dashboard */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full pointer-events-none -z-10" style={{ background: 'rgba(184,146,74,0.12)', filter: 'blur(150px)' }} />
        <div className="max-w-page mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal trigger="mount" y={50}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300 mb-4">Custom Business Software</p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tightest leading-[1.0]">
              Upgrade your software. <span className="gold-text-gradient">Centralize your business.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base sm:text-lg text-ink-300 leading-relaxed">
              We build custom software designed around how your company actually operates. From scheduling
              and crew management to payments, invoicing, and profit tracking, everything your team needs in
              one clean platform so nothing falls through the cracks.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/book-a-consultation?scope=software" className="inline-flex h-12 items-center justify-center rounded-lg px-6 gap-1.5 text-base font-medium text-ink-900 gold-fill shadow-lg shadow-gold-900/30 hover:opacity-90 transition-opacity">
                Get a Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/#dotra" className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-base text-ink-50 border border-white/15 bg-white/5 hover:bg-white/10 transition-all">
                See Dotra, our platform
              </Link>
            </div>
          </Reveal>

          <Reveal trigger="mount" y={70} delay={0.3}>
            <OpsDashboard />
          </Reveal>
        </div>
      </section>

      {/* Efficiency stat band */}
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

      {/* Features — icon-left cards */}
      <section className="py-24 sm:py-28">
        <div className="max-w-page mx-auto px-6">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">What We Build In</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white max-w-2xl leading-[1.05]">
              One platform, <span className="gold-text-gradient">every function</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl bg-white/[0.03] p-6 transition-colors duration-300 hover:bg-white/[0.06]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
                      <Icon strokeWidth={1.5} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why centralize */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-page mx-auto px-6">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Why Centralize</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white max-w-2xl leading-[1.05]">
              Everything your business needs <span className="gold-text-gradient">in one place</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {why.map(([title, desc]) => (
              <Reveal key={title}>
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-gold-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-300">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Ready to modernize your software?" sub="Get a free software audit and see exactly where AI can add the most value." />
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
            <Link href="/book-a-consultation?scope=software" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg px-7 gap-1.5 text-base font-medium text-white bg-ink-900 hover:bg-ink-800 transition-colors">
              Start the Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* Signature visual: a centralized operations dashboard */
function OpsDashboard() {
  const navIcons = [CalendarCheck, FileText, DollarSign, TrendingUp]
  const bars = [48, 70, 56, 84, 62, 92]
  const rows = [
    ['Invoice #1042', 'Paid', 'ok'],
    ['Crew schedule', 'Updated', 'ok'],
    ['Payroll run', 'Due Friday', 'warn'],
  ]
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div aria-hidden className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-bl from-gold-400/15 via-transparent to-transparent blur-3xl" />
      <div className="relative z-10 flex overflow-hidden rounded-2xl bg-ink-900/80 backdrop-blur shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* sidebar */}
        <div className="flex w-12 shrink-0 flex-col items-center gap-3 border-r border-white/5 py-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg gold-fill text-ink-900 text-[11px] font-bold">V</span>
          {navIcons.map((Icon, i) => (
            <span key={i} className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 0 ? 'bg-gold-400/15 text-gold-300' : 'text-ink-500'}`}>
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
        {/* content */}
        <div className="flex-1 p-5">
          <p className="text-[13px] font-semibold text-white">Operations</p>
          <p className="text-[11px] text-ink-400">This month at a glance</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[['Revenue', '$48.2k'], ['Jobs', '23'], ['Owed', '$6.4k']].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-white/[0.04] p-2">
                <p className="text-[8px] uppercase tracking-wider text-ink-400">{k}</p>
                <p className="mt-0.5 text-[13px] font-semibold text-white">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5 rounded-lg bg-white/[0.04] p-2.5">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-sm ${i % 2 ? 'bg-white/15' : 'gold-fill'}`} />
            ))}
          </div>
          <ul className="mt-3 space-y-1.5">
            {rows.map(([label, status, kind]) => (
              <li key={label} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2">
                <span className="text-[11px] text-ink-200">{label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${kind === 'warn' ? 'bg-gold-400/15 text-gold-200' : 'bg-white/10 text-ink-300'}`}>{status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
