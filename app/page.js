'use client'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bot, Globe, Settings, Network, ArrowRight } from 'lucide-react'

const DOTRA_URL = 'https://dotracompliance.com'

const services = [
  {
    icon: Bot,
    mock: 'agent',
    title: 'AI Agents & Automation',
    description:
      "Custom AI agents, receptionists, and chatbots that answer inquiries, qualify leads, book appointments, and follow up around the clock, so your team doesn't have to.",
    href: '/ai-agents',
  },
  {
    icon: Globe,
    mock: 'website',
    title: 'Website Building',
    description:
      'Fast, mobile-first websites engineered to convert. Every page is SEO-optimized to grow your visibility and turn visitors into paying customers.',
    href: '/website-building',
  },
  {
    icon: Settings,
    mock: 'software',
    title: 'Custom Business Software',
    description:
      'One platform for your whole operation, from scheduling and invoicing to payments and reporting. Everything your team needs in one place.',
    href: '/software',
  },
  {
    icon: Network,
    mock: 'integration',
    title: 'Full AI Integration',
    description:
      'We connect your agents, software, and website into one seamless system, automating the day-to-day so your team can focus on what it does best.',
    href: '/full-ai-integration',
  },
]

const stats = [
  ['10x', 'More output, less work'],
  ['24/7', 'AI availability'],
  ['100%', 'Custom solutions'],
  ['∞', 'Infinite scale'],
]

const process = [
  ['01', 'Understand', "A deep dive into your business: your challenges, pain points, and where things aren't running as smoothly as they could be."],
  ['02', 'Plan', 'We design the technical blueprint, select the right tools, and define how everything works together.'],
  ['03', 'Develop', 'We build, test, and refine your solution until every detail works exactly the way it should.'],
  ['04', 'Deploy', 'Secure launch with continuous support so your business hits the ground running.'],
]

// ── Circuit hero data ──────────────────────────────────────────────────────
// PCB-style traces running from the edges inward to the central V logo.
const TRACES = [
  'M20,130 H250 V265 H540',
  'M20,470 H230 V335 H540',
  'M1180,130 H950 V265 H660',
  'M1180,470 H970 V335 H660',
  'M600,10 V215',
  'M600,590 V385',
  'M20,300 H520',
  'M1180,300 H680',
  'M20,210 H160 V150 H360 V300 H520',
  'M1180,390 H1040 V450 H840 V300 H680',
]
const PULSE_DELAYS = [0, 0.6, 1.1, 1.6, 0.3, 0.9, 1.4, 2.0, 0.5, 1.8]
// Which traces render faint (some paths recede into the background).
const FAINT = [false, true, false, true, false, true, true, false, true, true]
const NODES = [
  [250, 130], [250, 265], [230, 470], [230, 335], [950, 130], [950, 265],
  [970, 470], [970, 335], [600, 215], [600, 385], [160, 210], [160, 150],
  [360, 150], [360, 300], [1040, 390], [1040, 450], [840, 450], [840, 300],
  [540, 265], [540, 335], [660, 265], [660, 335],
]

const CIRCUIT_CSS = `
/* dotted base traces — fade/reveal in on load (staggered via inline delay) */
.vv-trace {
  fill: none; stroke-width: 1.5; stroke-linecap: round;
  stroke-dasharray: 0.4 13;
  opacity: 0; animation: vvReveal 1.1s ease forwards;
}
.vv-node { fill: rgba(220,184,102,0.35); opacity: 0; animation: vvReveal .9s ease forwards; }
@keyframes vvReveal { to { opacity: 1; } }

/* glowing data pulses traveling edge -> center (start after the reveal) */
.vv-pulse {
  fill: none; stroke: rgba(233,211,156,0.85); stroke-width: 1.2; stroke-linecap: round;
  stroke-dasharray: 0.07 1; filter: url(#vvGlow);
  opacity: 0; animation: vvTravel 7s linear infinite both;
}
@keyframes vvTravel {
  0% { stroke-dashoffset: 1.1; opacity: 0; }
  10% { opacity: .55; }
  90% { opacity: .55; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}

/* V glow — slow, smooth, self-paced breathing (subtle at rest) */
.vv-vglow { animation: vvBreathe 6s ease-in-out infinite; will-change: opacity, transform; }
@keyframes vvBreathe {
  0%, 100% { opacity: .12; transform: scale(.92); }
  50% { opacity: .3; transform: scale(1.05); }
}

/* gentle float */
.vv-float { animation: vvFloat 6.5s ease-in-out infinite; will-change: transform; }
@keyframes vvFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

/* logo enters (scale + fade), then rests; brightness reacts to hover */
.vv-logo {
  opacity: 0; transform: scale(.82);
  filter: brightness(.85) drop-shadow(0 0 5px rgba(220,184,102,0.18));
  animation: vvEnter 1.1s cubic-bezier(.16,1,.3,1) .15s forwards;
  transition: filter .55s ease;
}
@keyframes vvEnter { to { opacity: 1; transform: scale(1); } }

/* hover lights up the V */
.vv-vwrap { cursor: pointer; }
.vv-vwrap:hover .vv-logo { filter: brightness(1.35) drop-shadow(0 0 36px rgba(220,184,102,0.95)); }
.vv-vwrap:hover .vv-vglow {
  opacity: .9; transform: scale(1.32);
  animation-play-state: paused;
  transition: opacity .5s ease, transform .5s ease;
}

@media (prefers-reduced-motion: reduce) {
  .vv-pulse, .vv-vglow, .vv-float { animation: none; }
  .vv-trace, .vv-node, .vv-logo { animation: none; opacity: 1; }
  .vv-logo { transform: none; filter: drop-shadow(0 0 22px rgba(220,184,102,.5)); }
  .vv-vglow { opacity: .45; }
}
`

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://visionaryv.net/#service',
  name: 'Visionary Ventures',
  url: 'https://visionaryv.net',
  parentOrganization: { '@id': 'https://visionaryv.net/#organization' },
  description:
    'AI consulting agency offering custom AI agent development, business software, website building, and full AI integration.',
  areaServed: 'US',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Services',
    itemListElement: [
      'AI Agents & Automation',
      'Website Building',
      'Custom Business Software',
      'Full AI Integration',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dotra',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Trucking compliance platform for owner-operators and fleets. Centralizes driver and vehicle documents, sends deadline alerts, and keeps operations FMCSA-aligned and audit-ready.',
  publisher: { '@id': 'https://visionaryv.net/#organization' },
}

export default function Home() {
  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <span className="sr-only">
        AI consulting services, AI consulting agency, artificial intelligence consulting, AI strategy
        consulting, custom AI agent development, AI automation services
      </span>

      {/* ─────────────── Hero — circuit logo ─────────────── */}
      <section className="relative isolate min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: CIRCUIT_CSS }} />

        {/* completely black background */}
        <div aria-hidden className="absolute inset-0 -z-30" style={{ background: '#000000' }} />

        {/* circuit + logo visual */}
        <div className="relative w-full max-w-5xl mx-auto px-6">
          <div className="relative mx-auto w-full" style={{ aspectRatio: '2 / 1' }}>
            <svg
              viewBox="0 0 1200 600"
              className="absolute inset-0 h-full w-full opacity-[0.55]"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <filter id="vvGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* dotted base traces (some faint), revealed in a stagger */}
              {TRACES.map((d, i) => (
                <path
                  key={`t${i}`}
                  d={d}
                  className="vv-trace"
                  style={{
                    stroke: FAINT[i] ? 'rgba(184,146,74,0.07)' : 'rgba(220,184,102,0.18)',
                    animationDelay: `${0.6 + i * 0.13}s`,
                  }}
                />
              ))}

              {/* nodes at the bends */}
              {NODES.map((n, i) => (
                <circle
                  key={`n${i}`}
                  cx={n[0]}
                  cy={n[1]}
                  r="2.4"
                  className="vv-node"
                  style={{ animationDelay: `${1 + (i % 6) * 0.12}s` }}
                />
              ))}

              {/* traveling pulses — begin after the reveal */}
              {TRACES.map((d, i) => (
                <path
                  key={`p${i}`}
                  d={d}
                  className="vv-pulse"
                  pathLength={1}
                  style={{ animationDelay: `${2.2 + PULSE_DELAYS[i]}s` }}
                />
              ))}
            </svg>

            {/* center V logo — self-pulsing glow, lights up on hover */}
            <div className="vv-vwrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div
                aria-hidden
                className="vv-vglow pointer-events-none absolute h-52 w-52 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(220,184,102,0.55), rgba(220,184,102,0.12) 45%, transparent 70%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="vv-float relative">
                <img
                  src="/Untitled-8.png"
                  alt="Visionary Ventures"
                  className="vv-logo h-28 w-auto object-contain sm:h-36 lg:h-44"
                />
              </div>
            </div>
          </div>
        </div>

        {/* headline → description → buttons, each rising in after the reveal */}
        <div className="relative mt-2 px-6 text-center">
          <Reveal trigger="mount" y={28} duration={1} delay={1.5}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.02]">
              Manifesting the <span className="gold-text-gradient">Visions</span> of Tomorrow.
            </h1>
          </Reveal>

          <Reveal trigger="mount" y={24} duration={1} delay={2.1}>
            <p className="mt-5 mx-auto max-w-xl text-base sm:text-lg text-ink-300 leading-relaxed">
              AI consulting for businesses ready to integrate AI Agents, Custom Software, and automation
              that keeps you ahead of the competition.
            </p>
          </Reveal>

          <Reveal trigger="mount" y={24} duration={1} delay={2.7}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-lg px-6 gap-1.5 text-base font-medium text-ink-900 gold-fill shadow-lg shadow-gold-900/30 hover:opacity-90 transition-opacity"
              >
                Explore Capabilities
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/book-a-consultation"
                className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-base text-ink-50 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── Stats strip ─────────────── */}
      <section className="border-t border-white/5 py-12">
        <div className="max-w-page mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {stats.map(([val, label], i) => (
              <Reveal key={label} delay={i * 0.08} className="bg-black p-8 text-center">
                <div className="text-4xl font-semibold tracking-tightest gold-text-gradient">{val}</div>
                <div className="mt-2 text-sm text-ink-400">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Services ─────────────── */}
      <section id="services" className="py-28 sm:py-32 border-t border-white/5">
        <div className="max-w-page mx-auto px-6">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Our Capabilities</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white max-w-2xl leading-[1.05]">
              Comprehensive <span className="gold-text-gradient">AI integration</span>.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-20 lg:space-y-28">
            {services.map((s, i) => {
              const Icon = s.icon
              const reverse = i % 2 === 1
              return (
                <Reveal key={s.title} y={40}>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* mock */}
                    <div className={reverse ? 'lg:order-2' : ''}>
                      <div className="relative mx-auto h-64 w-full max-w-md rounded-2xl bg-white/[0.02] p-5">
                        <ServiceMock kind={s.mock} />
                      </div>
                    </div>
                    {/* text */}
                    <div className={reverse ? 'lg:order-1' : ''}>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
                        <Icon strokeWidth={1.5} className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tightest text-white">{s.title}</h3>
                      <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-ink-300">{s.description}</p>
                      <Link
                        href={s.href}
                        className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Dotra featured product ─────────────── */}
      <section id="dotra" className="relative py-28 sm:py-36 border-t border-white/5 overflow-hidden">
        {/* soft gold glow behind the logo */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full pointer-events-none -z-10"
          style={{ background: 'rgba(184,146,74,0.1)', filter: 'blur(140px)' }}
        />
        <div className="max-w-page mx-auto px-6">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Featured Product</p>
          </Reveal>

          <Reveal className="mt-12 flex flex-col items-center text-center">
            <img
              src="/dotra-wordmark-white.png"
              alt="Dotra"
              className="h-24 sm:h-32 lg:h-40 w-auto select-none drop-shadow-[0_0_45px_rgba(220,184,102,0.25)]"
            />

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-white/5 px-3 py-1 text-xs font-medium text-gold-200">
              <img src="/dotra-icon-white.png" alt="" aria-hidden className="h-3.5 w-3.5 object-contain" />
              Trucking Compliance Platform
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest text-white leading-[1.03] max-w-3xl">
              The <span className="gold-text-gradient">standard</span> for trucking compliance.
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-300 max-w-2xl">
              Dotra is our purpose-built compliance platform for owner-operators and fleets. It
              centralizes every document, alerts drivers before deadlines hit, and keeps operations
              audit-ready, so a missed renewal never turns into a shutdown. It&apos;s a working example
              of the custom software we build for our clients.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={DOTRA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg px-6 gap-1.5 text-base font-medium text-ink-900 gold-fill shadow-lg shadow-gold-900/30 hover:opacity-90 transition-opacity"
              >
                Visit Dotra
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/book-a-consultation"
                className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-base text-ink-50 border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
              >
                Build something like it
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── Process (cascading cards) ─────────────── */}
      <section id="process" className="py-28 sm:py-32 border-t border-white/5">
        <div className="max-w-page mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-6 items-center">
          {/* LEFT */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-200">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Process
            </div>
            <h2 className="mt-7 text-5xl sm:text-6xl font-semibold tracking-tightest leading-[1.0]">
              A clear path from idea to <span className="text-ink-500">launch.</span>
            </h2>
            <p className="mt-6 max-w-md text-base sm:text-lg text-ink-300 leading-relaxed">
              We keep momentum high with focused sprints, direct collaboration, and visible progress
              every step of the way.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 gold-rule" />
              <span className="text-xs uppercase tracking-[0.2em] text-ink-500">Built around your workflow</span>
            </div>
          </Reveal>

          {/* RIGHT — cascade (desktop) */}
          <Reveal y={40} delay={0.15} className="hidden lg:block">
            <div className="flex justify-center pt-4 pb-24">
              {process.map(([num, title, desc], i) => (
                <div
                  key={num}
                  style={{ marginTop: `${i * 46}px`, marginLeft: i ? '-34px' : 0 }}
                  className={`vv-step group relative h-[420px] w-56 shrink-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink-900/80 p-6 backdrop-blur transition-all duration-300 ease-out hover:z-50 hover:-translate-y-8 hover:scale-[1.04] hover:border-gold-400/40 hover:bg-ink-800/90 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.85)] ${['z-40', 'z-30', 'z-20', 'z-10'][i]}`}
                >
                  <span className="pointer-events-none absolute -bottom-6 right-1 text-[10rem] font-semibold leading-none text-white/[0.035] select-none">
                    {num[1]}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-ink-200 transition-colors group-hover:border-gold-400/40 group-hover:text-gold-300">
                    {num}
                  </div>
                  <h3 className="relative mt-7 text-2xl font-semibold text-white">{title}</h3>
                  <p className="relative mt-4 text-[15px] leading-relaxed text-ink-400 transition-colors group-hover:text-ink-200">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — stacked (mobile) */}
          <div className="flex flex-col gap-4 lg:hidden">
            {process.map(([num, title, desc]) => (
              <div key={num} className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 p-6">
                <span className="pointer-events-none absolute -bottom-5 right-1 text-7xl font-semibold leading-none text-white/[0.035] select-none">{num[1]}</span>
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-gold-300">{num}</div>
                <h3 className="relative mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="py-20 px-6">
        <Reveal as="div" className="max-w-page mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-50 text-ink-900 p-12 md:p-20 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(circle at 85% 15%, rgba(220,184,102,0.45), transparent 45%), radial-gradient(circle at 5% 100%, rgba(184,146,74,0.35), transparent 50%)',
              }}
            />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tightest leading-[1.0]">
                Ready to run a smarter business?
              </h2>
              <p className="mt-5 text-base md:text-lg text-ink-600 leading-relaxed">
                Elite businesses aren&apos;t waiting for the future. They&apos;re building it now with
                AI. Take the first step and reach out today.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/book-a-consultation"
                  className="inline-flex h-12 items-center justify-center rounded-lg px-7 gap-1.5 text-base font-medium text-white bg-ink-900 hover:bg-ink-800 transition-colors"
                >
                  Start the Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:support@visionaryv.net"
                  className="inline-flex h-12 items-center justify-center rounded-lg px-7 text-base font-medium text-ink-900 border border-ink-900/20 bg-transparent hover:bg-ink-900/5 transition-colors"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}

/* ── Capability mockups ──────────────────────────────────────────────────── */
function ServiceMock({ kind }) {
  if (kind === 'agent') return <MockAgent />
  if (kind === 'website') return <MockWebsite />
  if (kind === 'software') return <MockSoftware />
  if (kind === 'integration') return <MockIntegration />
  return null
}

function MockAgent() {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white/[0.03] p-4">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md gold-fill text-ink-900">
          <Bot className="h-3.5 w-3.5" />
        </span>
        <span className="text-[12px] font-semibold text-white">AI Receptionist</span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-400">
          <span className="h-1 w-1 rounded-full bg-emerald-400" /> Online
        </span>
      </div>
      <div className="mt-4 space-y-2.5">
        <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white/5 px-3 py-2 text-[11.5px] leading-snug text-ink-200">
          Can I book a consultation next week?
        </div>
        <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-gold-400/15 px-3 py-2 text-[11.5px] leading-snug text-gold-50">
          Absolutely. Tuesday 10am or Thursday 2pm works.
        </div>
      </div>
      <div className="mt-auto flex items-center gap-1.5 pt-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-500" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-500" style={{ animationDelay: '0.2s' }} />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-500" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  )
}

function MockWebsite() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white/[0.03]">
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        {/* hover the dots to reveal traffic-light colors */}
        <span className="group/lights flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20 transition-colors duration-200 group-hover/lights:bg-red-500" />
          <span className="h-2 w-2 rounded-full bg-white/20 transition-colors duration-200 group-hover/lights:bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-white/20 transition-colors duration-200 group-hover/lights:bg-green-500" />
        </span>
        <span className="ml-2 rounded bg-white/5 px-2.5 py-0.5 text-[9px] text-ink-400">visionaryv.net</span>
        <span className="ml-auto text-[8px] font-semibold text-gold-300">SEO 100</span>
      </div>
      <div className="flex-1 px-4 pb-4 pt-1">
        <div className="h-3 w-1/2 rounded gold-fill" />
        <div className="mt-2.5 h-2 w-3/4 rounded bg-white/10" />
        <div className="mt-1.5 h-2 w-2/3 rounded bg-white/10" />
        <div className="mt-3.5 flex gap-2">
          <div className="h-9 flex-1 rounded-lg bg-white/[0.05]" />
          <div className="h-9 flex-1 rounded-lg bg-white/[0.05]" />
          <div className="h-9 flex-1 rounded-lg bg-white/[0.05]" />
        </div>
        <div className="mt-3.5 h-3.5 w-20 rounded-full gold-fill" />
      </div>
    </div>
  )
}

function MockSoftware() {
  const [bars, setBars] = useState([42, 66, 52, 82, 60, 92])
  const [rev, setRev] = useState(48.2)

  useEffect(() => {
    const id = setInterval(() => {
      const next = Array.from({ length: 6 }, () => 32 + Math.round(Math.random() * 62))
      setBars(next)
      const avg = next.reduce((a, b) => a + b, 0) / next.length
      setRev(Math.round((28 + avg * 0.5) * 10) / 10)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex h-full gap-2.5">
      <div className="flex w-8 shrink-0 flex-col items-center gap-2.5 rounded-xl bg-white/[0.03] py-3">
        <span className="h-2 w-2 rounded-sm gold-fill" />
        <span className="h-2 w-2 rounded-sm bg-white/15" />
        <span className="h-2 w-2 rounded-sm bg-white/15" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-white/[0.03] p-2.5">
            <div className="text-[9px] text-ink-400">Monthly revenue</div>
            <div className="text-[15px] font-semibold gold-text-gradient tabular-nums">${rev.toFixed(1)}k</div>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-2.5">
            <div className="text-[9px] text-ink-400">Active jobs</div>
            <div className="text-[15px] font-semibold text-white">23</div>
          </div>
        </div>
        <div className="flex flex-1 items-end gap-2 rounded-xl bg-white/[0.03] p-3">
          {bars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-sm transition-[height] duration-700 ease-out ${i % 2 ? 'bg-white/15' : 'gold-fill'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function IntChip({ icon: Icon }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-ink-200 transition-transform duration-200 hover:scale-110 hover:text-gold-300">
      <Icon strokeWidth={1.5} className="h-4 w-4" />
    </span>
  )
}

function MockIntegration() {
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <div className="flex flex-col gap-2.5">
        <IntChip icon={Bot} />
        <IntChip icon={Globe} />
        <IntChip icon={Settings} />
      </div>
      <div className="flex flex-col items-center gap-1 text-ink-500">
        <span className="h-px w-7 gold-rule" />
        <ArrowRight className="h-4 w-4 text-gold-300/70" />
        <span className="h-px w-7 gold-rule" />
      </div>
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05] shadow-[0_0_28px_rgba(220,184,102,0.3)]">
        <img src="/Untitled-8.png" alt="" aria-hidden className="h-8 w-auto object-contain" />
      </div>
    </div>
  )
}
