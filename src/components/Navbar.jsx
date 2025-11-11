import { useState, useMemo, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onTrack }) {
  const bookingUrl = useMemo(() => (
    import.meta.env.VITE_BOOKING_URL || 'https://cal.com'
  ), [])

  const [open, setOpen] = useState(false)

  const handleTrack = useCallback((event, payload = {}) => {
    if (typeof onTrack === 'function') onTrack(event, payload)
  }, [onTrack])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/60 dark:bg-gray-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="text-indigo-600">Flames</span>.Portfolio
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-200">
          <a href="#work" className="hover:text-gray-900 dark:hover:text-white" onClick={() => handleTrack('nav_click', { label: 'Work' })}>Work</a>
          <a href="#services" className="hover:text-gray-900 dark:hover:text-white" onClick={() => handleTrack('nav_click', { label: 'Services' })}>Services</a>
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white" onClick={() => handleTrack('nav_click', { label: 'About' })}>About</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white" onClick={() => handleTrack('nav_click', { label: 'Contact' })}>Contact</a>
          <a href="/test" className="hover:text-gray-900 dark:hover:text-white" onClick={() => handleTrack('nav_click', { label: 'Test' })}>Test</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-indigo-500/30 transition-all"
            onClick={() => handleTrack('cta_click', { location: 'navbar', label: 'Book a call' })}
          >
            Book a call
          </a>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-900/5 dark:hover:bg-white/5"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden absolute inset-x-0 top-16 origin-top rounded-b-2xl border-t border-white/10 bg-white/90 dark:bg-gray-950/90 backdrop-blur"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-2 text-gray-800 dark:text-gray-100">
              {[
                { href: '#work', label: 'Work' },
                { href: '#services', label: 'Services' },
                { href: '#about', label: 'About' },
                { href: '#contact', label: 'Contact' },
                { href: '/test', label: 'Test' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 hover:bg-gray-900/5 dark:hover:bg-white/5"
                  onClick={() => { setOpen(false); handleTrack('nav_click', { label: item.label, device: 'mobile' }) }}
                >
                  {item.label}
                </a>
              ))}

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center rounded-lg px-3 py-2 font-medium text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:opacity-95"
                onClick={() => handleTrack('cta_click', { location: 'mobile_drawer', label: 'Book a call' })}
              >
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
