import LanguageAsAnOversightSurface from '@/components/paper/LanguageAsAnOversightSurface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Language as an Oversight Surface in Agent-to-Agent Systems · Vignesh Kanike',
  description:
    'A benchmark of routing, collaboration, monitorability and language selection under evasion pressure.',
  authors: [{ name: 'Vignesh Kanike' }],
}

export default function LanguageAsAnOversightSurfacePage() {
  return (
    <div className="column pb-8 pt-10 sm:pt-14">
      <main id="main">
        <LanguageAsAnOversightSurface />
      </main>
    </div>
  )
}
