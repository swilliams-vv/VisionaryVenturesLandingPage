'use client'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, Clock, Zap } from 'lucide-react'
import { supabase } from '../../lib/supabaseClient'

// Maps the ?scope= query param (from service-page CTAs) to a form option.
const SCOPE_MAP = {
  'ai-agents': 'AI Agents & Automation',
  software: 'Business Operations Software',
  website: 'High-Performance Website',
  integration: 'Full Stack AI Integration',
}

export default function BookAConsultationPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [scope, setScope] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
    script.onload = () => window.emailjs?.init('V5gELqWYQx5KX-Og5')
    document.head.appendChild(script)
    // Pre-select the project scope when arriving from a service page CTA.
    const key = new URLSearchParams(window.location.search).get('scope')
    if (key && SCOPE_MAP[key]) setScope(SCOPE_MAP[key])
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (submitting) return
    setError(null)
    setSubmitting(true)

    // Best-effort: save the request to Supabase (does not block the email flow).
    if (supabase) {
      const fd = new FormData(e.target)
      supabase
        .from('consultations')
        .insert({
          first_name: fd.get('first_name'),
          last_name: fd.get('last_name'),
          email: fd.get('email'),
          phone: fd.get('phone') || null,
          scope: fd.get('scope') || null,
          message: fd.get('message') || null,
          sms_consent: fd.get('sms_consent') === 'on',
        })
        .then(({ error }) => {
          if (error) console.error('Supabase insert failed:', error.message)
        })
    }

    window.emailjs
      .sendForm('service_qr7yxsy', 'template_izhypjk', e.target)
      .then(() => setSubmitted(true))
      .catch(() => setError('Something went wrong. Please try again, or email support@visionaryv.net.'))
      .finally(() => setSubmitting(false))
  }

  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[55vw] h-[55vw] rounded-full pointer-events-none -z-10"
          style={{ background: 'rgba(184,146,74,0.1)', filter: 'blur(130px)' }}
        />
        <div className="max-w-page mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left: pitch */}
          <Reveal trigger="mount" y={50}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">Book a Consultation</p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.0]">
              Let&apos;s build something <span className="gold-text-gradient">smarter</span>.
            </h1>
            <p className="mt-6 max-w-md text-base sm:text-lg text-ink-300 leading-relaxed">
              Tell us about your business and what you&apos;re looking to achieve. We&apos;ll reach out
              within 24 hours to scope how AI agents, custom software, or a new website can help. No
              pressure, no commitment.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                [Clock, 'Response within 24 hours'],
                [Zap, 'Custom solutions, not templates'],
              ].map(([Icon, text]) => (
                <li key={text} className="flex items-center gap-3 text-[15px] text-ink-200">
                  <Icon className="h-5 w-5 shrink-0 text-gold-400" />
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: form / confirmation */}
          <Reveal y={40} delay={0.1}>
              {submitted ? (
                <div role="status" aria-live="polite" className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-gold-300" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Request received.</h2>
                  <p className="text-base text-ink-300 max-w-sm mx-auto">
                    You&apos;re one step closer to a smarter business. Our team will reach out within 24
                    hours to get the conversation started.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="First Name" name="first_name" placeholder="Jane" required />
                    <Field label="Last Name" name="last_name" placeholder="Doe" required />
                  </div>
                  <Field label="Work Email" name="email" type="email" placeholder="jane@company.com" required />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-ink-300">Project Scope</label>
                    <select
                      name="scope"
                      required
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-base text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select primary focus...</option>
                      <option>AI Agents &amp; Automation</option>
                      <option>Business Operations Software</option>
                      <option>High-Performance Website</option>
                      <option>Full Stack AI Integration</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-ink-300">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-base text-white placeholder-ink-500 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="sms_consent"
                      id="sms_consent"
                      required
                      className="mt-1 h-4 w-4 accent-gold-400 cursor-pointer flex-shrink-0"
                    />
                    <label htmlFor="sms_consent" className="text-xs leading-relaxed text-ink-400 cursor-pointer">
                      By checking this box, I agree to receive SMS messages from Visionary Ventures including
                      appointment confirmations, follow-ups, and service information. Message and data rates may
                      apply. Reply STOP to opt out at any time. View our{' '}
                      <a href="/privacy-policy" className="text-gold-300 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>

                  {error && (
                    <div role="alert" className="rounded-lg border border-red-500/40 bg-red-500/5 px-4 py-3 text-sm text-red-300">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-xl text-base font-medium text-ink-900 gold-fill hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending…' : 'Request My Consultation'}
                    {!submitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>
              )}
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-medium uppercase tracking-wider text-ink-300">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-base text-white placeholder-ink-500 focus:outline-none focus:border-gold-400 transition-colors"
      />
    </div>
  )
}
