import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from './env'

// Public read-only client (CDN-cached) for the Learn pages.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
})
