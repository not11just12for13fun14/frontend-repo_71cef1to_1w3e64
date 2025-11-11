import { useEffect, useRef, useCallback } from 'react'

// Lightweight analytics/event bus that forwards events to dataLayer and console.
// Integrates with GA4/GTM if available (window.dataLayer).
export default function useAnalytics() {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => { mounted.current = false }
  }, [])

  const track = useCallback((event, payload = {}) => {
    const evt = { event, ...payload, ts: Date.now() }

    // Console for dev visibility
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.debug('[track]', evt)
    }

    // GTM/GA4 dataLayer support
    try {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(evt)
    } catch (_) {}

    // Fallback beacon to backend (optional future)
    // navigator.sendBeacon?.(`${import.meta.env.VITE_BACKEND_URL || ''}/analytics`, JSON.stringify(evt))
  }, [])

  return track
}
