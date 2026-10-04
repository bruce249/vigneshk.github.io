import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="column pb-24 pt-16 sm:pt-24">
      <main id="main">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mast mt-3 text-6xl text-fg sm:text-7xl">Not found</h1>
        <p className="mt-8">
          <Link href="/" className="nav-link">
            Back home
          </Link>
        </p>
      </main>
    </div>
  )
}
