import './globals.css'

export const metadata = {
  title: 'Visionary Ventures | AI Consulting & Integration Services',
  description: 'Visionary Ventures offers AI consulting services, custom AI agent development, business software enhancement, and professional website building services.',
  keywords: 'AI consulting services, AI consulting agency, artificial intelligence consulting, AI strategy consulting, AI consulting business',
  icons: {
    icon: '/Untitled-8.png',
    apple: '/Untitled-8.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
