import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

import Navbar from './components/Navbar'
import CaseStudyCard from './components/CaseStudy'
import { PremiumBackground } from './components/PremiumGradients'
import useAnalytics from './components/Analytics'

function App() {
  const bookingUrl = useMemo(() => (
    import.meta.env.VITE_BOOKING_URL || 'https://cal.com'
  ), [])

  const track = useAnalytics()

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      <PremiumBackground />

      {/* Top nav */}
      <Navbar onTrack={track} />

      {/* Hero with Spline */}
      <section className="relative pt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full px-3 py-1 mb-4 ring-1 ring-inset ring-indigo-200"
            >
              Premium portfolio redesign
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Convert premium clients with a world‑class portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 max-w-xl"
            >
              Narrative‑driven case studies, crystal‑clear services, and a frictionless path to book a strategy call.
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-5 py-3 font-medium shadow-sm hover:shadow-indigo-500/30 transition-all"
                onClick={() => track('cta_click', { location: 'hero', label: 'Book a strategy call' })}
              >
                Book a strategy call
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-3 font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => track('nav_click', { label: 'See case studies' })}
              >
                See case studies
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Limited weekly availability. Average project ROI +25–40% in 90 days.
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/5"
          >
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured case studies</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Proof over promises. Real metrics from production builds.</p>
          </div>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-indigo-500/30 transition-all" onClick={() => track('cta_click', { location: 'case_studies_header', label: 'Book a call' })}>
            Book a call
          </a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard
            company="SaaSFinch"
            industry="Fintech SaaS"
            summary="Revamped onboarding and pricing flow, optimized for qualified trials and enterprise demos."
            metrics={[
              { label: 'Qualified demos', value: '+68%' },
              { label: 'Paywall CTR', value: '+32%' },
              { label: 'Sales cycle', value: '-29%' },
            ]}
            image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
            href="#"
          />
          <CaseStudyCard
            company="DevTools Co."
            industry="Developer Tools"
            summary="Shipped a narrative portfolio with deep dives on performance wins and DX improvements."
            metrics={[
              { label: 'MQL quality', value: '+61%' },
              { label: 'Newsletter growth', value: '×3.4' },
              { label: 'Avg. deal size', value: '+22%' },
            ]}
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            href="#"
          />
          <CaseStudyCard
            company="HealthFlow"
            industry="Digital Health"
            summary="Refocused story on outcomes and risk reversal; embedded calendar for immediate booking."
            metrics={[
              { label: 'Call-book rate', value: '↑ 2.3×' },
              { label: 'Lead qual', value: '≥ 62%' },
              { label: 'Price uplift', value: '+27%' },
            ]}
            image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
            href="#"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          <li className="rounded-lg border border-gray-200 p-5">Portfolio redesign and conversion optimization</li>
          <li className="rounded-lg border border-gray-200 p-5">Case study production and narrative strategy</li>
          <li className="rounded-lg border border-gray-200 p-5">Brand positioning and pricing enablement</li>
        </ul>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
        <p className="mt-3 max-w-2xl text-gray-600">I help software pros land premium clients with a portfolio that actually sells. Less fluff, more outcomes.</p>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <div className="relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
          <div className="rounded-2xl bg-white">
            <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Ready to talk?</h3>
                <p className="text-gray-600">Grab a 20‑minute fit call. No pressure, just clarity.</p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-5 py-3 font-medium shadow-sm hover:shadow-indigo-500/30 transition-all"
                onClick={() => track('cta_click', { location: 'contact', label: 'Book now' })}
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-gray-100 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Flames Portfolio. All rights reserved.
      </footer>
    </div>
  )
}

export default App
