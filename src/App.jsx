import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const bookingUrl = useMemo(() => (
    import.meta.env.VITE_BOOKING_URL || 'https://cal.com'
  ), [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">
            <span className="text-blue-600">Flames</span>.Portfolio
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="/test" className="hover:text-gray-900">Test</a>
          </nav>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Book a call
          </a>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative pt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-3 py-1 mb-4">
              Premium portfolio redesign
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Convert premium clients with a world‑class portfolio
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Narrative‑driven case studies, crystal‑clear services, and a frictionless path to book a strategy call.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                Book a strategy call
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                See case studies
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Limited weekly availability. Average project ROI +25–40% in 90 days.
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/5">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
          </div>
        </div>

        {/* subtle gradient backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_50%_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />
      </section>

      {/* Simple sections to scroll to */}
      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold">Featured work</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">High‑impact case studies that show measurable outcomes, not just pretty screens.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-100 rounded-md mb-4" />
              <div className="font-semibold">Project {i}</div>
              <div className="text-sm text-gray-600">Outcome‑focused summary and metric lift.</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          <li className="rounded-lg border border-gray-200 p-5">Portfolio redesign and conversion optimization</li>
          <li className="rounded-lg border border-gray-200 p-5">Case study production and narrative strategy</li>
          <li className="rounded-lg border border-gray-200 p-5">Brand positioning and pricing enablement</li>
        </ul>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
        <p className="mt-3 max-w-2xl text-gray-600">I help software pros land premium clients with a portfolio that actually sells. Less fluff, more outcomes.</p>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Ready to talk?</h3>
            <p className="text-gray-600">Grab a 20‑minute fit call. No pressure, just clarity.</p>
          </div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Book now
          </a>
        </div>
      </section>

      <footer className="py-10 border-t border-gray-100 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Flames Portfolio. All rights reserved.
      </footer>
    </div>
  )
}

export default App
