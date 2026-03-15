import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Lightbulb, Target, Shield, Zap } from 'lucide-react'

export const metadata = {
  title: 'Our Team | Visionary Ventures',
  description: 'Meet the team behind Visionary Ventures — Ivy League graduates leveraging AI to transform how businesses operate.',
}

const gold = 'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)'
const goldText = {background:gold,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}

const team = [
  { name: "Grayson O'Bara", title: 'Founder', credential: "Dartmouth '26 — Economics", photo: '/GCO.png' },
  { name: 'Sean Williams', title: 'Founder', credential: "Dartmouth '26 — Economics & Human-Centered Design", photo: '/SPW.png' },
  { name: 'Tyson Grimm', title: 'Founder', credential: "Dartmouth '26 — Economics", photo: '/TRG.png' },
  { name: 'Jamal Cooper', title: 'Founder', credential: "Dartmouth '26 — Sociology", photo: '/JMC.png' },
  { name: 'David Vincent', title: 'Founder', credential: "Kent State '26 - Finance", photo: '/DHV.png' },
  { name: 'Patrick Campbell', title: 'Partner', credential: "Dartmouth '26 — Quantitative Social Science", photo: '/PJC.png' },
]

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We operate with full transparency and honesty in everything we do — with our clients, our partners, and each other. Trust is the foundation of every relationship we build.' },
  { icon: Target, title: 'Accountability', desc: 'We take ownership of our work and our results. When we commit to something, we deliver — and when challenges arise, we face them head on.' },
  { icon: Zap, title: 'Diligence', desc: 'We bring relentless attention to detail and work ethic to every project. Good enough is never enough — we push until every solution is built to last.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay on the cutting edge of AI so our clients never fall behind. Constant learning and bold thinking are at the heart of everything we build.' },
]

export default function OurTeamPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f4f4f5] min-h-screen" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',backgroundSize:'24px 24px'}}>
      <Nav />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.1)',filter:'blur(120px)'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors mb-8">← Back to Home</Link>
          <p className="text-sm uppercase tracking-widest text-[#a1a1aa] mb-4">The People Behind the Vision</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
            Meet Our <span style={goldText}>Team</span>.
          </h1>
          <div className="max-w-3xl mx-auto bg-[#0f0f1a] border border-[#ffffff0a] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px]" style={{background:'linear-gradient(to right, transparent, #C9A84C, transparent)'}}></div>
            <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed font-extralight">
              Visionary Ventures was founded by a team of Ivy League and university graduates who experienced firsthand how AI could transform the way complex problems are solved. What began as leveraging cutting-edge technology in our own coursework evolved into a mission: to make that same transformative power accessible to every business, regardless of size or industry. We exist to push the limits of what technology can do for your operations — building intelligent systems, seamless software, and powerful digital experiences that put you at the forefront of your industry. The future of business is AI-powered, and we're here to make sure you're leading it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base uppercase tracking-widest text-[#a1a1aa] mb-2 text-center">Our Founders</h2>
          <p className="text-3xl md:text-4xl font-medium text-white mb-16 text-center">
            The minds driving <span style={goldText}>innovation</span>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map(member => (
              <div key={member.name} className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl overflow-hidden group hover:border-[#C9A84C]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-72 w-full overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to top, #0f0f1a 0%, transparent 60%)'}}></div>
                </div>
                <div className="p-6 -mt-8 relative z-10">
                  <h3 className="text-xl font-medium text-white">{member.name}</h3>
                  <p className="text-sm font-medium mt-1" style={goldText}>{member.title}</p>
                  <p className="text-xs text-[#71717a] mt-2">{member.credential}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base uppercase tracking-widest text-[#a1a1aa] mb-2 text-center">What Drives Us</h2>
          <p className="text-3xl md:text-4xl font-medium text-white mb-16 text-center">
            Our <span style={goldText}>core values</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(v => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-6 text-center hover:border-[#C9A84C]/30 hover:-translate-y-1 transition-all duration-300">
                  <Icon className="text-[#C9A84C] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]" strokeWidth={1.5} size={36} />
                  <h3 className="text-lg font-medium text-white mb-2">{v.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-[#ffffff15]" style={{background:'linear-gradient(to bottom right, #1a1405, #0a0a0a)'}}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.2)',filter:'blur(80px)'}}></div>
          <h2 className="text-3xl md:text-5xl font-medium text-white">Ready to work with us?</h2>
          <p className="mt-4 text-[#a1a1aa] font-extralight">Let's build something extraordinary together.</p>
          <Link href="/#contact" className="mt-8 inline-block px-8 py-4 bg-white text-[#0a0a0a] rounded-full text-base font-normal hover:-translate-y-1 transition-all duration-300">Book a Free Consultation</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
