import { createClient } from '@supabase/supabase-js'

// Reads public env vars (safe to expose — the anon/publishable key is meant for the browser).
// Returns null until they're configured, so the form falls back to email-only.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = url && anonKey ? createClient(url, anonKey) : null
