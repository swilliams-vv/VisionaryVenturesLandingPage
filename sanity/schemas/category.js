import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required().max(60) }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, description: 'Short description used on category listings.' }),
    defineField({ name: 'order', title: 'Display order', type: 'number', description: 'Lower numbers appear first.' }),
  ],
  preview: { select: { title: 'title', subtitle: 'description' } },
})
