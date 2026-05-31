import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import { Bot, Settings, Globe, Network, Truck, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Learn | AI Insights & Resources for Business',
  description:
    'Practical guides on AI agents, automation, custom business software, and websites: how to put AI to work in your business, from the team at Visionary Ventures.',
  keywords: [
    'AI for business',
    'AI agents guide',
    'business automation resources',
    'custom software insights',
    'AI integration guide',
  ],
  alternates: { canonical: '/learn' },
  openGraph: {
    title: 'AI Insights & Resources | Visionary Ventures',
    description:
      'Practical guides on AI agents, automation, custom software, and websites for businesses.',
    url: 'https://visionaryv.net/learn',
    type: 'website',
  },
}

const topics = [
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    desc: 'What AI agents are, where they create the most value, and how to deploy an AI receptionist that books appointments and qualifies leads around the clock.',
    href: '/ai-agents',
  },
  {
    icon: Settings,
    title: 'Custom Business Software',
    desc: 'How centralizing scheduling, invoicing, payments, and data into one platform saves teams 10+ hours a week and removes operational chaos.',
    href: '/software',
  },
  {
    icon: Globe,
    title: 'High-Performance Websites',
    desc: 'Why speed, mobile-first design, and SEO turn a website from a brochure into a revenue engine, and what to look for when you rebuild.',
    href: '/website-building',
  },
  {
    icon: Network,
    title: 'Full AI Integration',
    desc: 'How agents, software, and your website connect into one ecosystem so the day-to-day runs itself and your team focuses on growth.',
    href: '/full-ai-integration',
  },
  {
    icon: Truck,
    title: 'Industry Spotlight: Dotra',
    desc: 'A look at Dotra, our trucking compliance platform, and how purpose-built software keeps fleets audit-ready and ahead of every deadline.',
    href: '/#dotra',
  },
]

// Answer-first Q&A — optimized for AI-engine citations (GEO) and matched by FAQPage schema.
const faqs = [
  {
    q: 'What does Visionary Ventures do?',
    a: 'Visionary Ventures is an AI services company that builds custom AI agents, business software, and websites, and integrates AI into business operations. We help companies automate repetitive work, qualify and follow up with leads, and centralize operations so teams can focus on higher-value work.',
  },
  {
    q: 'What is an AI agent?',
    a: 'An AI agent is intelligent software that works for your business around the clock, answering customer inquiries, qualifying leads, booking appointments, processing data, and sending follow-ups automatically. Visionary Ventures builds custom AI agents and AI receptionists that integrate into your existing tools.',
  },
  {
    q: 'What is Dotra?',
    a: 'Dotra is a trucking compliance platform built by Visionary Ventures for owner-operators and fleets. It centralizes every driver and vehicle document, sends deadline alerts 60, 30, and 7 days in advance, and keeps operations FMCSA-aligned and audit-ready so a missed renewal never becomes a shutdown.',
  },
  {
    q: 'How does Visionary Ventures build a solution?',
    a: 'Visionary Ventures follows a four-step process: Understand (diagnose the business), Plan (design the technical blueprint and select tools), Develop (build, test, and refine), and Deploy (secure launch with continuous support). Every solution is custom-built around how the client actually operates.',
  },
  {
    q: 'Who is behind Visionary Ventures?',
    a: 'Visionary Ventures was founded by a team of Ivy League and university graduates, primarily from Dartmouth College and Kent State University, with backgrounds in economics, finance, human-centered design, and quantitative social science.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function LearnPage() {
  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-36 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[55vw] h-[55vw] rounded-full pointer-events-none -z-10"
          style={{ background: 'rgba(184,146,74,0.1)', filter: 'blur(130px)' }}
        />
        <div className="max-w-page mx-auto px-6">
          <Reveal trigger="mount" y={50}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Learn</p>
            <h1 className="mt-3 text-5xl sm:text-6xl font-semibold tracking-tightest leading-[1.0] max-w-3xl">
              AI insights for <span className="gold-text-gradient">real businesses</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-300 leading-relaxed">
              Practical, jargon-free guidance on putting AI to work, from automating customer
              conversations to centralizing your operations. Start with the topics below; in-depth
              articles are on the way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-page mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t, i) => {
              const Icon = t.icon
              return (
                <Reveal key={t.title} delay={i * 0.07}>
                  <Link
                    href={t.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-ink-800/60 p-7 transition-all duration-300 hover:border-gold-400/30 hover:-translate-y-1"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-300">
                      <Icon strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-white">{t.title}</h2>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-300">{t.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section id="faq" className="py-24 border-t border-white/5">
        <div className="max-w-page mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">FAQ</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white leading-[1.05]">
              Questions, <span className="gold-text-gradient">answered</span>.
            </h2>
            <p className="mt-5 text-[15px] text-ink-300 max-w-sm">
              The essentials on what we build, how we work, and who we are.
            </p>
          </Reveal>

          <Reveal y={40}>
            <dl className="divide-y divide-white/8 rounded-2xl border border-white/8 bg-ink-800/50">
              {faqs.map((f) => (
                <div key={f.q} className="p-6 sm:p-7">
                  <dt className="text-lg font-semibold text-white">{f.q}</dt>
                  <dd className="mt-2.5 text-[15px] leading-relaxed text-ink-300">{f.a}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <Reveal className="max-w-page mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-50 text-ink-900 p-12 md:p-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(circle at 85% 15%, rgba(220,184,102,0.45), transparent 45%), radial-gradient(circle at 5% 100%, rgba(184,146,74,0.35), transparent 50%)',
              }}
            />
            <div className="relative max-w-xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-[1.0]">
                Have a question about AI for your business?
              </h2>
              <p className="mt-4 text-base md:text-lg text-ink-600">
                We&apos;ll point you in the right direction. No pressure, no jargon.
              </p>
              <Link
                href="/book-a-consultation"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-lg px-7 gap-1.5 text-base font-medium text-white bg-ink-900 hover:bg-ink-800 transition-colors"
              >
                Ask the team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
