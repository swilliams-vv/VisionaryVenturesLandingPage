import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { client } from '../../sanity/client'
import { isConfigured } from '../../sanity/env'
import { urlFor } from '../../sanity/image'
import { ARTICLES_LIST_QUERY } from '../../sanity/queries'

export const revalidate = 60 // refresh published articles without a redeploy

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

const faqs = [
  { q: 'What does Visionary Ventures do?', a: 'Visionary Ventures is an AI services company that builds custom AI agents, business software, and websites, and integrates AI into business operations. We help companies automate repetitive work, qualify and follow up with leads, and centralize operations so teams can focus on higher-value work.' },
  { q: 'What is an AI agent?', a: 'An AI agent is intelligent software that works for your business around the clock, answering customer inquiries, qualifying leads, booking appointments, processing data, and sending follow-ups automatically. Visionary Ventures builds custom AI agents and AI receptionists that integrate into your existing tools.' },
  { q: 'What is Dotra?', a: 'Dotra is a trucking compliance platform built by Visionary Ventures for owner-operators and fleets. It centralizes every driver and vehicle document, sends deadline alerts 60, 30, and 7 days in advance, and keeps operations FMCSA-aligned and audit-ready so a missed renewal never becomes a shutdown.' },
  { q: 'How does Visionary Ventures build a solution?', a: 'Visionary Ventures follows a four-step process: Understand (diagnose the business), Plan (design the technical blueprint and select tools), Develop (build, test, and refine), and Deploy (secure launch with continuous support). Every solution is custom-built around how the client actually operates.' },
  { q: 'Who is behind Visionary Ventures?', a: 'Visionary Ventures was founded by a team of Ivy League and university graduates, primarily from Dartmouth College and Kent State University, with backgrounds in economics, finance, human-centered design, and quantitative social science.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

function formatDate(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return ''
  }
}

async function getArticles() {
  if (!isConfigured) return []
  try {
    return (await client.fetch(ARTICLES_LIST_QUERY)) || []
  } catch {
    return []
  }
}

export default async function LearnPage() {
  const articles = await getArticles()

  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-36 pb-16 overflow-hidden">
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[55vw] h-[55vw] rounded-full pointer-events-none -z-10" style={{ background: 'rgba(184,146,74,0.1)', filter: 'blur(130px)' }} />
        <div className="max-w-page mx-auto px-6">
          <Reveal trigger="mount" y={50}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Learn</p>
            <h1 className="mt-3 text-5xl sm:text-6xl font-semibold tracking-tightest leading-[1.0] max-w-3xl">
              AI insights for <span className="gold-text-gradient">real businesses</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-300 leading-relaxed">
              Practical, jargon-free guidance on putting AI to work, from automating customer
              conversations to centralizing your operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Articles (Sanity) */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-page mx-auto px-6">
          <Reveal>
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Latest articles</h2>
          </Reveal>

          {articles.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((a, i) => (
                <Reveal key={a._id} delay={(i % 3) * 0.07}>
                  <Link href={`/learn/${a.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.03] transition-colors duration-300 hover:bg-white/[0.06]">
                    {a.coverImage?.asset && (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink-900">
                        <Image
                          src={urlFor(a.coverImage).width(800).height(450).fit('crop').auto('format').url()}
                          alt={a.coverImage.alt || a.title}
                          fill
                          sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      {a.category?.title && (
                        <span className="text-[11px] font-medium uppercase tracking-wider text-gold-300">{a.category.title}</span>
                      )}
                      <h3 className="mt-2 text-lg font-semibold text-white leading-snug">{a.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300 line-clamp-3">{a.excerpt}</p>
                      <span className="mt-4 text-xs text-ink-500">{formatDate(a.publishedAt)}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-8 rounded-2xl bg-white/[0.03] px-6 py-16 text-center">
                <p className="text-lg font-medium text-white">New articles coming soon.</p>
                <p className="mt-2 text-sm text-ink-400">
                  We&apos;re putting together practical guides on AI for business. Check back shortly.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* FAQ — click to expand */}
      <section id="faq" className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">FAQ</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tightest text-white">
              Questions, <span className="gold-text-gradient">answered</span>.
            </h2>
          </Reveal>
          <Reveal y={30}>
            <div className="mt-7 divide-y divide-white/8 border-y border-white/8">
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium text-white transition-colors hover:text-gold-100 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-gold-300 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="pb-4 pr-8 text-[15px] leading-relaxed text-ink-300">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <Reveal className="max-w-page mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-50 text-ink-900 p-12 md:p-16 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(220,184,102,0.45), transparent 45%), radial-gradient(circle at 5% 100%, rgba(184,146,74,0.35), transparent 50%)' }} />
            <div className="relative max-w-xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-[1.0]">Have a question about AI for your business?</h2>
              <p className="mt-4 text-base md:text-lg text-ink-600">We&apos;ll point you in the right direction. No pressure, no jargon.</p>
              <Link href="/book-a-consultation" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg px-7 gap-1.5 text-base font-medium text-white bg-ink-900 hover:bg-ink-800 transition-colors">
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
