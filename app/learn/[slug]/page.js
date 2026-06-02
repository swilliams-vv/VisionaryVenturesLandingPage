import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { client } from '../../../sanity/client'
import { isConfigured } from '../../../sanity/env'
import { urlFor } from '../../../sanity/image'
import { PortableText } from '../../../sanity/portable-text'
import { ARTICLE_BY_SLUG_QUERY, ARTICLE_SLUGS_QUERY } from '../../../sanity/queries'

export const revalidate = 60

export async function generateStaticParams() {
  if (!isConfigured) return []
  try {
    const slugs = (await client.fetch(ARTICLE_SLUGS_QUERY)) || []
    return slugs.filter(Boolean).map((slug) => ({ slug }))
  } catch {
    return []
  }
}

async function getArticle(slug) {
  if (!isConfigured) return null
  try {
    return await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug })
  } catch {
    return null
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = await getArticle(slug)
  if (!a) return { title: 'Article' }
  const title = a.seo?.metaTitle || a.title
  const description = a.seo?.metaDescription || a.excerpt
  const ogSrc = a.seo?.ogImage?.asset
    ? urlFor(a.seo.ogImage).width(1200).height(630).fit('crop').url()
    : a.coverImage?.asset
      ? urlFor(a.coverImage).width(1200).height(630).fit('crop').url()
      : undefined
  return {
    title,
    description,
    alternates: { canonical: `/learn/${a.slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://visionaryv.net/learn/${a.slug}`,
      images: ogSrc ? [{ url: ogSrc }] : undefined,
    },
  }
}

function formatDate(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  } catch {
    return ''
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const a = await getArticle(slug)
  if (!a) notFound()

  return (
    <main className="bg-black text-ink-50 min-h-screen overflow-x-hidden">
      <Nav />

      <article className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[55vw] h-[40vw] rounded-full pointer-events-none -z-10" style={{ background: 'rgba(184,146,74,0.1)', filter: 'blur(140px)' }} />
        <div className="max-w-3xl mx-auto px-6">
          <Reveal trigger="mount" y={40}>
            <Link href="/learn" className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-100 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            {a.category?.title && (
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-300">{a.category.title}</p>
            )}
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest leading-[1.05]">{a.title}</h1>
            <p className="mt-4 text-sm text-ink-400">
              {a.author || 'Visionary Ventures'} · {formatDate(a.publishedAt)}
            </p>
          </Reveal>

          {a.coverImage?.asset && (
            <Reveal y={30} delay={0.1}>
              <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-ink-900">
                <Image
                  src={urlFor(a.coverImage).width(1600).height(900).fit('crop').auto('format').url()}
                  alt={a.coverImage.alt || a.title}
                  fill
                  priority
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}

          <Reveal y={30} delay={0.15}>
            <div className="mt-10">
              <PortableText value={a.body} />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 border-t border-white/8 pt-8">
              <Link href="/book-a-consultation" className="inline-flex h-12 items-center justify-center rounded-lg px-6 gap-1.5 text-base font-medium text-ink-900 gold-fill hover:opacity-90 transition-opacity">
                Book a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </main>
  )
}
