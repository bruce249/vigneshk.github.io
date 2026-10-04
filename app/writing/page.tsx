import ThemeToggle from '@/components/ThemeToggle'
import WritingList from '@/components/WritingList'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Writing · Vignesh Kanike',
  description: 'Papers and writing by Vignesh Kanike.',
}

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
      <header className="mb-10 flex items-center justify-between">
        <Link href="/" className="text-sm text-muted">
          Home
        </Link>
        <ThemeToggle />
      </header>
      <main id="main">
        <h1 className="font-serif text-2xl text-fg"># Writing</h1>
        <WritingList />
      </main>
    </div>
  )
}
