import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Visionary Ventures (VisionaryV LLC).',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
}

function Section({ title, children }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-ink-800/60 p-8">
      <div className="absolute top-0 left-0 right-0 h-px gold-rule" />
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      {children}
    </div>
  )
}

function Item({ children }) {
  return (
    <li className="flex gap-2.5 text-sm text-ink-300">
      <span className="mt-0.5 text-gold-400">·</span>
      <span>{children}</span>
    </li>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none -z-10" style={{ background: 'rgba(184,146,74,0.1)', filter: 'blur(120px)' }} />
        <div className="max-w-3xl mx-auto px-6">
          <Reveal trigger="mount" y={40}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tightest leading-[1.05] mb-4">
              Privacy <span className="gold-text-gradient">Policy</span>
            </h1>
            <p className="text-sm text-ink-400 mb-12">
              Last Updated: April 2, 2026 · VisionaryV LLC (&quot;Visionary Ventures&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) ·{' '}
              <a href="https://visionaryv.net" className="underline hover:text-ink-100 transition-colors">visionaryv.net</a>
            </p>
          </Reveal>

          <Reveal className="space-y-8">
            <Section title="1. Information We Collect">
              <p className="text-ink-300 text-sm leading-relaxed mb-3">We collect information you provide directly to us, including:</p>
              <ul className="space-y-2">
                <Item>Name, email address, phone number, and company information</Item>
                <Item>Information submitted through contact forms, landing pages, or during calls</Item>
                <Item>Communication preferences</Item>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <p className="text-ink-300 text-sm leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="space-y-2">
                <Item>Communicate with you about our services</Item>
                <Item>Send appointment confirmations, reminders, and follow-ups</Item>
                <Item>Respond to inquiries and schedule discovery calls</Item>
                <Item>Improve our products and services</Item>
              </ul>
            </Section>

            <Section title="3. SMS / Text Message Communications">
              <p className="text-ink-300 text-sm leading-relaxed mb-3">
                By providing your phone number and consenting to receive text messages from Visionary
                Ventures or our representative Alex Vega, you agree to receive SMS messages including:
              </p>
              <ul className="space-y-2 mb-4">
                <Item>Appointment confirmations and reminders</Item>
                <Item>Follow-up messages after calls or inquiries</Item>
                <Item>Information related to services you have expressed interest in</Item>
              </ul>
              <p className="text-ink-300 text-sm leading-relaxed mb-2">Message frequency may vary. Message and data rates may apply.</p>
              <p className="text-ink-300 text-sm leading-relaxed mb-2">
                You may opt out at any time by replying <span className="text-white font-medium">STOP</span> to any
                message. For help, reply <span className="text-white font-medium">HELP</span>. Opting out will stop
                all future SMS communications.
              </p>
              <p className="text-ink-300 text-sm leading-relaxed">
                We do not share, sell, or rent your phone number or SMS consent data to third parties for their
                marketing purposes.
              </p>
            </Section>

            <Section title="4. Sharing of Information">
              <p className="text-ink-300 text-sm leading-relaxed mb-3">
                We do not sell or rent your personal information. We may share information with:
              </p>
              <ul className="space-y-2">
                <Item>Service providers who assist in our operations (e.g., scheduling, communications platforms)</Item>
                <Item>As required by law or to protect our legal rights</Item>
              </ul>
            </Section>

            <Section title="5. Data Retention">
              <p className="text-ink-300 text-sm leading-relaxed">
                We retain your information for as long as necessary to provide our services or as required by law.
              </p>
            </Section>

            <Section title="6. Your Rights">
              <p className="text-ink-300 text-sm leading-relaxed">
                You may request access to, correction of, or deletion of your personal information at any time by
                contacting us at the address below.
              </p>
            </Section>

            <Section title="7. Contact Us">
              <p className="text-ink-300 text-sm leading-relaxed mb-2">VisionaryV LLC</p>
              <a href="mailto:alex@mail.visionaryv.net" className="text-gold-300 text-sm hover:underline">alex@mail.visionaryv.net</a>
              <p className="text-ink-500 text-xs mt-4">
                This privacy policy applies to all communications from VisionaryV LLC and its representatives,
                including outreach conducted under the Alex Vega persona.
              </p>
            </Section>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
