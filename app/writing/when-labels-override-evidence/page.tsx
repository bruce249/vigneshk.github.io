import WhenLabelsOverrideEvidence from '@/components/paper/WhenLabelsOverrideEvidence'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When Labels Override Evidence · Vignesh Kanike',
  description:
    'A label shortcut in Laya, an encoder decision model: its circuit, its training origin, and how to remove it.',
  authors: [{ name: 'Vignesh Kanike' }],
}

export default function WhenLabelsOverrideEvidencePage() {
  return (
    <div className="column pb-8 pt-10 sm:pt-14">
      <main id="main">
        <WhenLabelsOverrideEvidence />
      </main>
    </div>
  )
}
