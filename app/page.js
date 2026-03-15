'use client'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useEffect } from 'react'
import { Bot, Globe, Settings, Network } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    description: `Deploy custom-built AI Agents, AI Receptionists, and Chatbots that handle your business around the clock. From answering customer inquiries and booking appointments to data analysis and follow-ups — our agents work 24/7 so you don't have to.`,
    href: '/ai-agents',
  },
  {
    icon: Globe,
    title: 'Website Building',
    description: `We design and build custom websites that don't just look great — they actively grow your business. Every site we build is optimized for SEO to increase your visibility on the web and designed to turn visitors into paying customers.`,
    href: '/website-building',
  },
  {
    icon: Settings,
    title: 'Custom Business Software',
    description: 'We build custom software that centralizes your entire business operation into one easy to use platform. From scheduling and invoicing to customer communication — everything your team needs, in one place.',
    href: '/software',
  },
  {
    icon: Network,
    title: 'Full AI Integration',
    description: `We connect your agents, software, and website into one seamless ecosystem working as one - automating the day to day so your team focuses on what they do best.`,
    href: '/ai-agents',
  }
]

const gold = 'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)'
const goldText = {background:gold,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
      script.onload = () => window.emailjs?.init('V5gELqWYQx5KX-Og5')
      document.head.appendChild(script)
    }
  }, [])

  function submitForm(e) {
    e.preventDefault()
    const btn = document.getElementById('submit-btn')
    btn.textContent = 'Sending...'
    btn.disabled = true
    window.emailjs.sendForm('service_qr7yxsy', 'template_izhypjk', e.target)
      .then(() => {
        document.getElementById('form-content').classList.add('hidden')
        const success = document.getElementById('form-success')
        success.classList.remove('hidden')
        success.classList.add('flex')
      })
      .catch(() => {
        btn.textContent = 'Submit Request'
        btn.disabled = false
        alert('Something went wrong. Please try again.')
      })
  }

  return (
    <main className="bg-[#0a0a0a] text-[#f4f4f5] min-h-screen" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',backgroundSize:'24px 24px'}}>
      <Nav />
      <span className="hidden">AI consulting services, AI consulting agency, artificial intelligence consulting, AI consulting business, AI strategy consulting</span>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.15)',filter:'blur(120px)'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]">
            Manifesting the <br />
            <span style={goldText}>Visions</span> of Tomorrow.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto font-extralight">
            AI consulting services for businesses looking to integrate AI Agents, Custom Software, and AI Automation that saves time, grows revenue, and keeps you ahead of your competition.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#services" className="w-full sm:w-auto px-8 py-3 rounded-full text-base font-medium text-[#0a0a0a] transition-all duration-300 hover:-translate-y-[2px]" style={{background:gold}}>
              Explore Capabilities
            </Link>
            <Link href="#contact" className="w-full sm:w-auto px-8 py-3 rounded-full text-base text-[#f4f4f5] border border-[#ffffff15] bg-[#ffffff05] hover:bg-[#ffffff0a] hover:border-[#ffffff30] transition-all duration-300">
              Book Consultation
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[['10x','More Output, Less Work'],['24/7','AI Availability'],['100%','Custom Solutions'],['∞','Infinite Scale']].map(([val, label]) => (
              <div key={label} className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-6 text-left group hover:-translate-y-1 hover:border-[#ffffff15] transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background:'linear-gradient(to bottom right, rgba(201,168,76,0.1), transparent)'}}></div>
                <div className="text-3xl font-medium text-white tracking-tight">{val}</div>
                <div className="text-sm text-[#71717a] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 relative border-t border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base font-normal tracking-widest text-[#a1a1aa] uppercase mb-2">Our Capabilities</h2>
          <p className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16">
            Comprehensive <span style={goldText}>AI Integration</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(s => {
              const Icon = s.icon
              return (
                <Link href={s.href} key={s.title} className="group bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 hover:border-[#C9A84C]/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden block">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background:'linear-gradient(to bottom right, rgba(201,168,76,0.05), transparent)'}}></div>
                  <Icon className="text-[#C9A84C] mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]" strokeWidth={1.5} size={40} />
                  <h3 className="text-xl font-medium text-white mb-3">{s.title}</h3>
                  <p className="text-[#a1a1aa] text-base leading-relaxed mb-4">{s.description}</p>
                  <span className="text-sm font-medium" style={goldText}>Learn More →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32 relative border-t border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base font-normal tracking-widest text-[#a1a1aa] uppercase mb-2">Our Process</h2>
          <p className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-20">
            From concept to <span style={goldText}>launch</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[40px] left-10 right-10 h-[1px] border-t border-dashed border-[#ffffff15] z-0"></div>
            {[
              ['1', 'Understand', `We start with a deep dive into your business challenges and the friction holding you back — so every solution we build is designed around your specific situation.`],
              ['2', 'Plan', `Designing the blueprint, selecting the right tools, and defining how everything will work together.`],
              ['3', 'Build', `We build, test, and refine your solution until every detail works exactly the way it should.`],
              ['4', 'Launch', `Secure launch, full team training, and continuous support so your business hits the ground running.`]
            ].map(([num, title, desc]) => (
              <div key={num} className="relative z-10 group">
                <div className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 h-full relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background:gold}}></div>
                  <span className="absolute -bottom-6 -right-2 text-8xl font-medium text-[#ffffff03] select-none">0{num}</span>
                  <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#C9A84C]/30 flex items-center justify-center mb-6 text-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.2)]">{num}</div>
                  <h4 className="text-xl font-medium text-white mb-2">{title}</h4>
                  <p className="text-base text-[#a1a1aa]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-[#ffffff15]" style={{background:'linear-gradient(to bottom right, #1a1405, #0a0a0a)'}}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none mix-blend-screen" style={{background:'rgba(201,168,76,0.2)',filter:'blur(80px)'}}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none mix-blend-screen" style={{background:'rgba(201,168,76,0.2)',filter:'blur(80px)'}}></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">Ready to run a smarter business?</h2>
            <p className="mt-6 text-base font-extralight" style={{color:'rgba(201,168,76,0.8)'}}>Elite businesses aren&apos;t waiting for the future — they&apos;re building it right now with AI. Take the first step and reach out today.</p>
            <Link href="#contact" className="mt-10 inline-block px-8 py-4 bg-white text-[#0a0a0a] rounded-full text-base font-normal hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-white">Let&apos;s Work Together</h2>
            <p className="text-base text-[#a1a1aa] mt-3">Tell us about your business and we&apos;ll get back to you within 24 hours.</p>
          </div>
          <div className="bg-[#0f0f1a]/80 backdrop-blur-xl border border-[#ffffff0a] p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px]" style={{background:'linear-gradient(to right, transparent, #C9A84C, transparent)'}}></div>
            <div id="form-content">
              <form id="contact-form" onSubmit={submitForm} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-normal text-[#a1a1aa] uppercase tracking-wider">First Name</label>
                    <input type="text" name="first_name" required className="w-full bg-[#0a0a0a] border border-[#ffffff10] rounded-xl px-4 py-3 text-base text-white placeholder-[#4b4b52] focus:outline-none focus:border-[#C9A84C] transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-normal text-[#a1a1aa] uppercase tracking-wider">Last Name</label>
                    <input type="text" name="last_name" required className="w-full bg-[#0a0a0a] border border-[#ffffff10] rounded-xl px-4 py-3 text-base text-white placeholder-[#4b4b52] focus:outline-none focus:border-[#C9A84C] transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-normal text-[#a1a1aa] uppercase tracking-wider">Work Email</label>
                  <input type="email" name="email" required className="w-full bg-[#0a0a0a] border border-[#ffffff10] rounded-xl px-4 py-3 text-base text-white placeholder-[#4b4b52] focus:outline-none focus:border-[#C9A84C] transition-all" placeholder="jane@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-normal text-[#a1a1aa] uppercase tracking-wider">Project Scope</label>
                  <select name="scope" required className="w-full bg-[#0a0a0a] border border-[#ffffff10] rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-[#C9A84C] transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select primary focus...</option>
                    <option>AI Agents & Automation</option>
                    <option>Business Operations Software</option>
                    <option>High-Performance Web</option>
                    <option>Full Stack Integration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-normal text-[#a1a1aa] uppercase tracking-wider">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-[#0a0a0a] border border-[#ffffff10] rounded-xl px-4 py-3 text-base text-white placeholder-[#4b4b52] focus:outline-none focus:border-[#C9A84C] transition-all resize-none" placeholder="Tell us about your business and what you are looking to achieve..." />
                </div>
                <button type="submit" id="submit-btn" className="w-full py-4 rounded-xl text-base font-medium text-[#0a0a0a] transition-all duration-300 hover:-translate-y-[1px]" style={{background:gold}}>
                  Submit Request
                </button>
              </form>
            </div>
            <div id="form-success" className="hidden absolute inset-0 bg-[#0f0f1a] flex-col items-center justify-center p-10 text-center z-20">
              <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6 border border-[#C9A84C]/20">
                <span className="text-[#C9A84C] text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Message Sent.</h3>
              <p className="text-base text-[#a1a1aa] max-w-sm">You&apos;re one step closer to a smarter business. Our team will reach out within 24 hours to get the conversation started.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
