export function PremiumBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(99,102,241,0.18),transparent)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-indigo-500/10 via-fuchsia-500/5 to-transparent blur-2xl" />
      <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 blur-3xl" />
    </div>
  )
}
