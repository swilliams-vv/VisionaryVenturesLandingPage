// Sanity env config. Resolves to safe placeholders during build if not yet
// configured, so `next build` never crashes before the project is wired up.
// /learn (Sanity-backed) and /studio only work once real values are set.
// Local: .env.local. Production: Vercel → Settings → Environment Variables.

const DEFAULT_API_VERSION = '2024-10-01'
const PLACEHOLDER_PROJECT_ID = 'missingprojectid'
const PLACEHOLDER_DATASET = 'production'

function sanitizeApiVersion(raw) {
  const trimmed = (raw ?? '').trim().replace(/^v/, '')
  return /^(1|\d{4}-\d{2}-\d{2})$/.test(trimmed) ? trimmed : DEFAULT_API_VERSION
}

function sanitize(raw, fallback) {
  const trimmed = (raw ?? '').trim()
  return trimmed || fallback
}

export const apiVersion = sanitizeApiVersion(process.env.NEXT_PUBLIC_SANITY_API_VERSION)
export const dataset = sanitize(process.env.NEXT_PUBLIC_SANITY_DATASET, PLACEHOLDER_DATASET)
export const projectId = sanitize(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, PLACEHOLDER_PROJECT_ID)

// True only when a real project id has been provided (not the build placeholder).
export const isConfigured = projectId !== PLACEHOLDER_PROJECT_ID

// Optional server-only token for fetching drafts/preview.
export const readToken = process.env.SANITY_API_READ_TOKEN
