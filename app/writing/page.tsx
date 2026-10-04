import WritingList from '@/components/WritingList'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Writing · Vignesh Kanike',
  description: 'Papers and writing by Vignesh Kanike.',
}

export default function WritingPage() {
  return (
    <div className="column pb-16 pt-8 sm:pt-12">
      <main id="main">
        <p className="mb-8 text-sm">
          <Link href="/" className="text-muted no-underline hover:text-fg">
            Home
          </Link>
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-fg"># Writing</h1>
        <WritingList />
      </main>
    </div>
  )
}
