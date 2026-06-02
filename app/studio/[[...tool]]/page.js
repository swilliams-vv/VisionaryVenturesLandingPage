// Embedded Sanity Studio at /studio. The catch-all segment lets the
// Studio's internal router take over.
import Studio from '../../../components/Studio'

export const dynamic = 'force-static'
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}
