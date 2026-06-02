import { groq } from 'next-sanity'

// All published articles, newest first — Learn index.
export const ARTICLES_LIST_QUERY = groq`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    isFeatured,
    author,
    "coverImage": coverImage{ ..., "alt": coalesce(alt, ""), "lqip": asset->metadata.lqip },
    category->{ _id, title, "slug": slug.current }
  }
`

// A single article by slug — full body + SEO.
export const ARTICLE_BY_SLUG_QUERY = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    author,
    body,
    "coverImage": coverImage{ ..., "alt": coalesce(alt, ""), "lqip": asset->metadata.lqip },
    category->{ _id, title, "slug": slug.current },
    seo
  }
`

// Slugs for static generation.
export const ARTICLE_SLUGS_QUERY = groq`
  *[_type == "article" && defined(slug.current)][].slug.current
`
