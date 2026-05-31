import Link from 'next/link'

const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'AI Agents & Automation', href: '/ai-agents' },
      { label: 'Website Building', href: '/website-building' },
      { label: 'Custom Software', href: '/software' },
      { label: 'Dotra', href: '/#dotra' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our Team', href: '/our-team' },
      { label: 'Book a Consultation', href: '/book-a-consultation' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="absolute top-0 left-0 right-0 h-px gold-rule opacity-40" />
      <div className="max-w-page mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/Untitled-8.png"
                alt="Visionary Ventures"
                className="h-8 w-auto object-contain opacity-80"
              />
              <span className="text-base font-semibold tracking-tight gold-text-gradient">
                Visionary Ventures
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              An AI services company building custom agents, software, and websites that put your
              business at the forefront of its industry.
            </p>
            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://www.linkedin.com/company/visionaryv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-400 hover:text-ink-100 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:support@visionaryv.net"
                className="text-sm text-ink-400 hover:text-ink-100 transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-400 hover:text-ink-100 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} VisionaryV LLC. All rights reserved.
          </p>
          <p className="text-xs text-ink-600">Manifesting the visions of tomorrow.</p>
        </div>
      </div>
    </footer>
  )
}
