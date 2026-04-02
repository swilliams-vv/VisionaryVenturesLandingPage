import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Visionary Ventures',
  description: 'Privacy policy for Visionary Ventures — VisionaryV LLC.',
}

const gold = 'linear-gradient(135deg,#BF953F,#FCF6BA,#B38728,#FBF5B7,#AA771C)'
const goldText = {background:gold,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f4f4f5] min-h-screen" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',backgroundSize:'24px 24px'}}>
      <Nav />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none" style={{background:'rgba(201,168,76,0.1)',filter:'blur(120px)'}}></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors mb-8">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-4">
            Privacy <span style={goldText}>Policy</span>
          </h1>
          <p className="text-sm text-[#71717a] mb-12">Last Updated: April 2, 2026 — VisionaryV LLC ("Visionary Ventures", "we", "us", or "our") — <a href="https://visionaryv.net" className="underline hover:text-[#f4f4f5] transition-colors">visionaryv.net</a></p>

          <div className="space-y-10">

            <div className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background:gold}}></div>
              <h2 className="text-xl font-medium text-white mb-4">1. Information We Collect</h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-3">We collect information you provide directly to us, including:</p>
              <ul className="space-y-2 text-[#a1a1aa] text-sm">
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Name, email address, phone number, and company information</li>
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Information submitted through contact forms, landing pages, or during calls</li>
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Communication preferences</li>
              </ul>
            </div>

            <div className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background:gold}}></div>
              <h2 className="text-xl font-medium text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="space-y-2 text-[#a1a1aa] text-sm">
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Communicate with you about our services</li>
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Send appointment confirmations, reminders, and follow-ups</li>
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Respond to inquiries and schedule discovery calls</li>
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Improve our products and services</li>
              </ul>
            </div>

            <div className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background:gold}}></div>
              <h2 className="text-xl font-medium text-white mb-4">3. SMS / Text Message Communications</h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-3">By providing your phone number and consenting to receive text messages from Visionary Ventures or our representative Alex Vega, you agree to receive SMS messages including:</p>
              <ul className="space-y-2 text-[#a1a1aa] text-sm mb-4">
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Appointment confirmations and reminders</li>
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Follow-up messages after calls or inquiries</li>
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Information related to services you have expressed interest in</li>
              </ul>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-2">Message frequency may vary. Message and data rates may apply.</p>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-2">You may opt out at any time by replying <span className="text-white font-medium">STOP</span> to any message. For help, reply <span className="text-white font-medium">HELP</span>. Opting out will stop all future SMS communications.</p>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">We do not share, sell, or rent your phone number or SMS consent data to third parties for their marketing purposes.</p>
            </div>

            <div className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background:gold}}></div>
              <h2 className="text-xl font-medium text-white mb-4">4. Sharing of Information</h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-3">We do not sell or rent your personal information. We may share information with:</p>
              <ul className="space-y-2 text-[#a1a1aa] text-sm">
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>Service providers who assist in our operations (e.g., scheduling, communications platforms)</li>
                <li className="flex gap-2"><span className="text-[#C9A84C] mt-0.5">—</span>As required by law or to protect our legal rights</li>
              </ul>
            </div>

            <div className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background:gold}}></div>
              <h2 className="text-xl font-medium text-white mb-4">5. Data Retention</h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">We retain your information for as long as necessary to provide our services or as required by law.</p>
            </div>

            <div className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background:gold}}></div>
              <h2 className="text-xl font-medium text-white mb-4">6. Your Rights</h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">You may request access to, correction of, or deletion of your personal information at any time by contacting us at the address below.</p>
            </div>

            <div className="bg-[#0f0f1a] border border-[#ffffff0a] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background:gold}}></div>
              <h2 className="text-xl font-medium text-white mb-4">7. Contact Us</h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-2">VisionaryV LLC</p>
              <a href="mailto:hello@visionaryv.net" className="text-[#C9A84C] text-sm hover:underline">alex@mail.visionaryv.net</a>
              <p className="text-[#71717a] text-xs mt-4">This privacy policy applies to all communications from VisionaryV LLC and its representatives, including outreach conducted under the Alex Vega persona.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
