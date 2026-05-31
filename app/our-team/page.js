import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Our Team | The People Behind Visionary Ventures',
  description:
    'Meet the team behind Visionary Ventures: Ivy League and university graduates from Dartmouth and Kent State leveraging AI to transform how businesses operate.',
  keywords: ['Visionary Ventures team', 'AI consulting team', 'Dartmouth founders', 'about Visionary Ventures'],
  alternates: { canonical: '/our-team' },
  openGraph: {
    title: 'Our Team | Visionary Ventures',
    description:
      'The Ivy League and university graduates building AI agents, software, and websites at Visionary Ventures.',
    url: 'https://visionaryv.net/our-team',
    type: 'website',
  },
}

const team = [
  { name: "Grayson O'Bara", title: 'Founder', credential: "Dartmouth '26 ·Economics", photo: '/GCO.png' },
  { name: 'Sean Williams', title: 'Founder', credential: "Dartmouth '26 ·Economics & Human-Centered Design", photo: '/SPW.png' },
  { name: 'Tyson Grimm', title: 'Founder', credential: "Dartmouth '26 ·Economics", photo: '/TRG.png' },
  { name: 'Jamal Cooper', title: 'Founder', credential: "Dartmouth '26 ·Sociology", photo: '/JMC.png' },
  { name: 'David Vincent', title: 'Founder', credential: "Kent State '26 ·Finance", photo: '/DHV3.png' },
]

const values = [
  { title: 'Integrity', desc: 'We operate with full transparency and honesty in everything we do, with our clients, our partners, and each other. Trust is the foundation of every relationship we build.' },
  { title: 'Accountability', desc: 'We take ownership of our work and our results. When we commit to something, we deliver, and when challenges arise, we face them head on.' },
  { title: 'Diligence', desc: 'We bring relentless attention to detail and work ethic to every project. Good enough is never enough. We push until every solution is built to last.' },
  { title: 'Innovation', desc: 'We stay on the cutting edge of AI so our clients never fall behind. Constant learning and bold thinking are at the heart of everything we build.' },
]

export default function OurTeamPage() {
  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[55vw] h-[55vw] rounded-full pointer-events-none -z-10" style={{ background: 'rgba(184,146,74,0.1)', filter: 'blur(130px)' }} />
        <div className="max-w-page mx-auto px-6 text-center">
          <Reveal trigger="mount" y={50}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300 mb-4">The People Behind the Vision</p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest leading-[1.0] mb-8">
              Meet our <span className="gold-text-gradient">team</span>.
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white leading-relaxed">
              Visionary Ventures was founded by a team of Ivy League and university graduates who
              experienced firsthand how AI could transform the way complex problems are solved. What
              began as leveraging cutting-edge technology in our own coursework evolved into a mission:
              to make that same transformative power accessible to every business, regardless of size or
              industry. We exist to push the limits of what technology can do for your operations,
              building intelligent systems, seamless software, and powerful digital experiences that put
              you at the forefront of your industry. The future of business is AI-powered, and we&apos;re
              here to make sure you&apos;re leading it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-page mx-auto px-6">
          <Reveal className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Our Founders</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white leading-[1.05]">
              The minds driving <span className="gold-text-gradient">innovation</span>.
            </h2>
          </Reveal>
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06} className="w-[46%] sm:w-[30%] xl:w-[18.5%]">
                <div className="group w-full overflow-hidden rounded-2xl bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1">
                  <div className="aspect-[4/5] w-full overflow-hidden bg-ink-900">
                    <img src={member.photo} alt={member.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium gold-text-gradient">{member.title}</p>
                    <p className="mt-1.5 text-xs text-ink-400">{member.credential}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values — editorial reveal-on-scroll */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-page mx-auto px-6">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">What Drives Us</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest text-white leading-[1.05]">
              Our <span className="gold-text-gradient">core values</span>.
            </h2>
          </Reveal>

          <div className="mt-14 border-t border-white/10">
            {values.map((v, i) => (
              <Reveal key={v.title} y={32} duration={1}>
                <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.6fr] gap-4 md:gap-12 border-b border-white/10 py-10 md:py-12 group">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-mono text-gold-300/70">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tightest text-white transition-colors group-hover:text-gold-100">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed text-ink-300 max-w-2xl">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <Reveal className="max-w-page mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-50 text-ink-900 p-12 md:p-16 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(220,184,102,0.45), transparent 45%), radial-gradient(circle at 5% 100%, rgba(184,146,74,0.35), transparent 50%)' }} />
            <div className="relative max-w-xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-[1.0]">Ready to work with us?</h2>
              <p className="mt-4 text-base md:text-lg text-ink-600">Let&apos;s build something extraordinary together.</p>
              <Link href="/book-a-consultation" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg px-7 gap-1.5 text-base font-medium text-white bg-ink-900 hover:bg-ink-800 transition-colors">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
