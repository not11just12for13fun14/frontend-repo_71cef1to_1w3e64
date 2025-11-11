import { memo } from 'react'
import { motion } from 'framer-motion'

function Metric({ label, value }) {
  return (
    <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-black/5 p-4">
      <div className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  )
}

function CaseStudyCard({ company, industry, summary, metrics = [], logo, image, href }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden border border-black/5 bg-gradient-to-b from-white to-white/60 dark:from-gray-950 dark:to-gray-950/60 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video bg-gray-100 dark:bg-gray-900 relative">
        {image ? (
          <img src={image} alt={company} className="w-full h-full object-cover" />
        ) : null}
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          {logo ? <img src={logo} alt={company + ' logo'} className="h-6 w-6 rounded" /> : null}
          <div className="text-sm text-gray-500">{industry}</div>
        </div>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">
          {company}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">{summary}</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {metrics.map((m) => (
            <Metric key={m.label} label={m.label} value={m.value} />
          ))}
        </div>
        {href ? (
          <a href={href} className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700">Read case study →</a>
        ) : null}
      </div>
    </motion.article>
  )
}

export default memo(CaseStudyCard)
