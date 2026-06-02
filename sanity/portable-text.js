import Image from 'next/image'
import Link from 'next/link'
import { PortableText as PortableTextRoot } from '@portabletext/react'
import { urlFor } from './image'

const components = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-14 text-3xl sm:text-4xl font-semibold tracking-tightest text-white leading-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-2xl sm:text-3xl font-semibold tracking-tightest text-white leading-snug">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="mt-8 text-xl font-semibold tracking-tight text-white">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-gold-400 pl-5 text-lg italic text-ink-200">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="mt-5 text-base leading-[1.75] text-ink-200">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc pl-6 space-y-2 text-base leading-[1.75] text-ink-200 marker:text-gold-400">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal pl-6 space-y-2 text-base leading-[1.75] text-ink-200 marker:text-gold-400">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 text-[0.95em] font-mono text-ink-100">{children}</code>
    ),
    link: ({ value, children }) => {
      const href = value?.href ?? '#'
      const external = !!value?.openInNewTab || /^https?:/.test(href)
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-gold-300 hover:text-gold-200 underline underline-offset-2">
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className="text-gold-300 hover:text-gold-200 underline underline-offset-2">
          {children}
        </Link>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      const src = urlFor(value).width(1600).fit('max').auto('format').url()
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-xl border border-white/8">
            <Image src={src} alt={value.alt || ''} width={1600} height={1000} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full object-cover" />
          </div>
          {value.caption && <figcaption className="mt-2 text-xs text-ink-400">{value.caption}</figcaption>}
        </figure>
      )
    },
    callout: ({ value }) => {
      const warning = value?.tone === 'warning'
      const cls = warning ? 'border-gold-400/30 bg-gold-400/10 text-gold-100' : 'border-white/8 bg-white/5 text-ink-200'
      return (
        <aside role="note" className={`my-7 rounded-xl border px-5 py-4 text-base leading-[1.7] ${cls}`}>
          {value.text}
        </aside>
      )
    },
  },
}

export function PortableText({ value }) {
  return <PortableTextRoot value={value} components={components} />
}
