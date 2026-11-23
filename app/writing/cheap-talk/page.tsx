import CheapTalk from '@/components/paper/CheapTalk'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Cheap Talk: Answer Engines Ignore Failed Signature Checks and Trust Forgeable Signals · Vignesh Kanike',
  description:
    'A sprint study of which trust signals answer engines follow: free forgeries, copied sources, and real signature checks.',
  authors: [{ name: 'Vignesh Kanike' }],
}

export default function CheapTalkPage() {
  return (
    <div className="column pb-8 pt-10 sm:pt-14">
      <main id="main">
        <CheapTalk />
      </main>
    </div>
  )
}
