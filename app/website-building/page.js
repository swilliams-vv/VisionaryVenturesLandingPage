import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import { ArrowRight, Zap, MonitorSmartphone, Bot, Search } from 'lucide-react'

export const metadata = {
  title: 'Custom Website Design & Development | High-Performance Websites',
  description:
    'Professional website building services for businesses. Visionary Ventures designs and develops custom, fast, mobile-first, SEO-optimized websites that turn visitors into paying customers.',
  keywords: [
    'custom website design and development',
    'business website design services',
    'professional website building services',
    'business website redesign services',
    'custom web development company',
  ],
  alternates: { canonical: '/website-building' },
  openGraph: {
    title: 'Custom Website Design & Development | Visionary Ventures',
    description:
      'Fast, mobile-first, SEO-optimized websites built to convert visitors into customers.',
    url: 'https://visionaryv.net/website-building',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Design & Development',
  serviceType: 'Custom website design and development',
  provider: { '@id': 'https://visionaryv.net/#organization' },
  areaServed: 'US',
  description:
    'Custom, high-performance website design and development: fast, mobile-first, SEO-optimized sites with built-in AI chatbot integration.',
}

const metrics = [
  ['0.8s', 'Median load time'],
  ['100', 'Lighthouse score'],
  ['100%', 'Mobile-first'],
  ['24/7', 'AI chat built in'],
]

const features = [
  { icon: Zap, title: 'Lightning Fast Performance', desc: 'Sub-second load times built on modern frameworks. Speed is SEO and speed is conversion.' },
  { icon: MonitorSmartphone, title: 'Mobile-First Design', desc: 'Every website we build looks and performs flawlessly on any device, screen size, or browser.' },
  { icon: Bot, title: 'AI Chatbot Integration', desc: 'Built-in AI chatbots that engage visitors, answer questions, and route leads to you around the clock.' },
  { icon: Search, title: 'SEO Optimized', desc: 'Every page is built with search engine ranking in mind, from keywords to structure to Core Web Vitals.' },
]

export default function WebsiteBuildingPage() {
  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero — asymmetric, browser preview */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 left-0 w-[55vw] h-[55vw] rounded-full pointer-events-none -z-10" style={{ background: 'rgba(184,146,74,0.12)', filter: 'blur(150px)' }} />
        <div className="max-w-page mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal trigger="mount" y={50}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300 mb-4">Website Design &amp; Development</p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tightest leading-[1.0]">
              Websites that <span className="gold-text-gradient">work for you.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base sm:text-lg text-ink-300 leading-relaxed">
              We design and build custom websites that don&apos;t just look great. They load in under a
              second, rank on search, and turn visitors into paying customers.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/book-a-consultation?scope=website" className="inline-flex h-12 items-center justify-center rounded-lg px-6 gap-1.5 text-base font-medium text-ink-900 gold-fill shadow-lg shadow-gold-900/30 hover:opacity-90 transition-opacity">
                Start Your Website <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/book-a-consultation?scope=website" className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-base text-ink-50 border border-white/15 bg-white/5 hover:bg-white/10 transition-all">
                Get a Consultation
              </Link>
            </div>
          </Reveal>

          <Reveal trigger="mount" y={70} delay={0.3}>
            <SitePreview />
          </Reveal>
        </div>
      </section>

      {/* Performance metrics band */}
      <section className="border-y border-white/5">
        <div className="max-w-page mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {metrics.map(([val, label], i) => (
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
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">What&apos;s Included</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white max-w-2xl leading-[1.05]">
              Everything your business <span className="gold-text-gradient">website needs</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Reveal key={f.title} delay={i * 0.07}>
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

      {/* Responsive showcase */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-page mx-auto px-6">
          <Reveal className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Looks right everywhere</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white leading-[1.05]">
              One site, <span className="gold-text-gradient">every screen</span>.
            </h2>
          </Reveal>
          <Reveal y={50} delay={0.15}>
            <div className="mt-14 flex items-end justify-center gap-5 sm:gap-8">
              {/* desktop */}
              <div className="hidden sm:block w-[340px] shrink-0 overflow-hidden rounded-xl bg-white/[0.03]">
                <Browser scale="lg" />
              </div>
              {/* tablet */}
              <div className="w-[150px] shrink-0 overflow-hidden rounded-xl bg-white/[0.03]">
                <Browser scale="md" />
              </div>
              {/* phone */}
              <div className="w-[90px] shrink-0 overflow-hidden rounded-2xl bg-white/[0.03] p-1.5">
                <div className="overflow-hidden rounded-xl bg-ink-900">
                  <Browser scale="sm" bare />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA title="Ready for a website that converts?" sub="Our web development team is ready to build your custom business website." />
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
            <Link href="/book-a-consultation?scope=website" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg px-7 gap-1.5 text-base font-medium text-white bg-ink-900 hover:bg-ink-800 transition-colors">
              Start the Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* Signature visual: a browser window previewing a site */
function SitePreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div aria-hidden className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-bl from-gold-400/15 via-transparent to-transparent blur-3xl" />
      <div className="relative z-10 overflow-hidden rounded-2xl bg-ink-900/80 backdrop-blur shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
          <span className="group/lights flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20 transition-colors duration-200 group-hover/lights:bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20 transition-colors duration-200 group-hover/lights:bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20 transition-colors duration-200 group-hover/lights:bg-green-500" />
          </span>
          <span className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[10px] text-ink-400">visionaryv.net</span>
          <span className="rounded-full border border-gold-400/30 px-2 py-0.5 text-[9px] font-semibold text-gold-300">SEO 100</span>
        </div>
        <Browser scale="lg" />
      </div>
    </div>
  )
}

/* Reusable wireframe page used at desktop / tablet / phone scales */
function Browser({ scale = 'lg', bare = false }) {
  const pad = scale === 'sm' ? 'p-2.5' : scale === 'md' ? 'p-3' : 'p-6'
  return (
    <div className={`${pad} ${bare ? '' : ''}`}>
      <div className="h-4 w-1/2 rounded gold-fill" />
      <div className="mt-2 h-2 w-3/4 rounded bg-white/10" />
      <div className="mt-1.5 h-2 w-2/3 rounded bg-white/10" />
      <div className="mt-3 h-4 w-20 rounded-full gold-fill" />
      <div className={`mt-4 grid gap-2 ${scale === 'sm' ? 'grid-cols-1' : 'grid-cols-3'}`}>
        <div className="h-10 rounded-lg bg-white/[0.05]" />
        <div className="h-10 rounded-lg bg-white/[0.05]" />
        <div className={`h-10 rounded-lg bg-white/[0.05] ${scale === 'sm' ? 'hidden' : ''}`} />
      </div>
      {scale === 'lg' && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-white/[0.05]" />
          <div className="h-10 rounded-lg bg-white/[0.05]" />
          <div className="h-10 rounded-lg bg-white/[0.05]" />
        </div>
      )}
    </div>
  )
}
