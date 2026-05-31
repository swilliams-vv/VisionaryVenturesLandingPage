import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  metadataBase: new URL('https://visionaryv.net'),
  title: {
    default: 'Visionary Ventures | AI Consulting, AI Agents & Custom Software',
    template: '%s | Visionary Ventures',
  },
  description:
    'Visionary Ventures is an AI consulting agency that builds custom AI agents, business software, and high-performance websites. We integrate AI into your operations to save time, grow revenue, and keep you ahead of your competition.',
  keywords: [
    'AI consulting services',
    'AI consulting agency',
    'custom AI agent development',
    'AI automation services',
    'custom business software',
    'AI integration services',
    'professional website building',
  ],
  authors: [{ name: 'Visionary Ventures' }],
  creator: 'VisionaryV LLC',
  alternates: { canonical: '/' },
  icons: {
    icon: '/vv-icon-black.png',
    apple: '/vv-icon-black.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Visionary Ventures',
    title: 'Visionary Ventures | AI Consulting, AI Agents & Custom Software',
    description:
      'An AI services company that builds custom AI agents, business software, and websites, integrating AI into your operations so your team focuses on what it does best.',
    url: 'https://visionaryv.net',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visionary Ventures | AI Consulting & Integration',
    description:
      'Custom AI agents, business software, and websites for businesses ready to run smarter with AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://visionaryv.net/#organization',
  name: 'Visionary Ventures',
  legalName: 'VisionaryV LLC',
  url: 'https://visionaryv.net',
  logo: 'https://visionaryv.net/Untitled-8.png',
  description:
    'Visionary Ventures is an AI services company that builds custom AI agents, business software, and websites, and integrates AI into business operations.',
  sameAs: ['https://www.linkedin.com/company/visionaryv/'],
  knowsAbout: [
    'AI agents',
    'AI automation',
    'custom business software',
    'website development',
    'AI integration',
    'trucking compliance software',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://visionaryv.net/#website',
  url: 'https://visionaryv.net',
  name: 'Visionary Ventures',
  publisher: { '@id': 'https://visionaryv.net/#organization' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
