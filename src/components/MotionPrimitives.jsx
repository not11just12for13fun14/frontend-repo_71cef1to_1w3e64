import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

// MagneticButton: subtle magnetic hover pull and press bounce
export function MagneticButton({
  href,
  children,
  className = '',
  onClick,
  target,
  rel,
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)

  const reset = useCallback(() => {
    animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 })
    animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 })
    animate(scale, 1, { type: 'spring', stiffness: 300, damping: 20 })
  }, [x, y, scale])

  useEffect(() => reset, [reset])

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    animate(x, relX * 0.15, { type: 'spring', stiffness: 400, damping: 30 })
    animate(y, relY * 0.15, { type: 'spring', stiffness: 400, damping: 30 })
  }

  const handleMouseLeave = () => reset()
  const handleMouseDown = () => animate(scale, 0.97, { type: 'spring', stiffness: 400, damping: 20 })
  const handleMouseUp = () => animate(scale, 1, { type: 'spring', stiffness: 400, damping: 20 })

  const style = {
    x,
    y,
    scale,
    willChange: 'transform',
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={className + ' relative overflow-hidden'}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Shine */}
      <span className="pointer-events-none absolute -inset-px rounded-md">
        <span className="absolute -inset-6 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
          <span className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/30 blur-xl" />
        </span>
      </span>
      {children}
    </motion.a>
  )
}

// ParallaxContainer: gentle parallax following cursor or tilt on scroll
export function ParallaxContainer({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-40, 40], [8, -8])
  const rotateY = useTransform(x, [-40, 40], [-8, 8])

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    animate(x, Math.max(-40, Math.min(40, relX * 0.1)), { type: 'spring', stiffness: 200, damping: 20 })
    animate(y, Math.max(-40, Math.min(40, relY * 0.1)), { type: 'spring', stiffness: 200, damping: 20 })
  }

  const onMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 200, damping: 20 })
    animate(y, 0, { type: 'spring', stiffness: 200, damping: 20 })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}

// FloatIn: reusable entrance animation
export function FloatIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
