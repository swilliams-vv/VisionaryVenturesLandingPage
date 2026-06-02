import { defineArrayMember, defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'meta', title: 'Metadata' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'content', validation: (r) => r.required().max(120) }),
    defineField({ name: 'slug', title: 'URL slug', type: 'slug', group: 'content', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }], group: 'meta', validation: (r) => r.required() }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: '1 to 2 sentences. Used on article cards and as the default SEO description.',
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (r) => r.required() })],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (r) => r.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
                  }),
                  defineField({ name: 'openInNewTab', title: 'Open in new tab', type: 'boolean', initialValue: false }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
        defineArrayMember({
          type: 'object',
          name: 'callout',
          title: 'Callout',
          fields: [
            defineField({
              name: 'tone',
              title: 'Tone',
              type: 'string',
              options: { list: [{ title: 'Info', value: 'info' }, { title: 'Warning', value: 'warning' }], layout: 'radio' },
              initialValue: 'info',
            }),
            defineField({ name: 'text', title: 'Text', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: 'text', subtitle: 'tone' },
            prepare({ title, subtitle }) {
              return { title: title ?? 'Callout', subtitle: subtitle ? `Tone: ${subtitle}` : undefined }
            },
          },
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({ name: 'author', title: 'Author', type: 'string', group: 'meta', description: 'Byline. Defaults to "Visionary Ventures" if blank.' }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', group: 'meta', initialValue: false, description: 'Highlight this article in the Learn index.' }),
    defineField({
      name: 'seo',
      title: 'SEO overrides',
      type: 'object',
      group: 'seo',
      description: 'Optional. Falls back to the article title, excerpt, and cover image.',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta title', type: 'string', validation: (r) => r.max(70) }),
        defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 2, validation: (r) => r.max(160) }),
        defineField({ name: 'ogImage', title: 'OG image (override)', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'category.title', media: 'coverImage' } },
  orderings: [
    { name: 'publishedAtDesc', title: 'Published date, newest', by: [{ field: 'publishedAt', direction: 'desc' }] },
    { name: 'publishedAtAsc', title: 'Published date, oldest', by: [{ field: 'publishedAt', direction: 'asc' }] },
  ],
})
