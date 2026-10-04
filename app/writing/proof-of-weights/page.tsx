import ProofOfWeights from '@/components/paper/ProofOfWeights'
import type { Metadata } from 'next'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  title: 'Detecting Weight Tampering in Verifiable LLM Inference · Vignesh Kanike',
  description:
    'Detecting Weight Tampering in Verifiable LLM Inference: Per-Layer Activation Profiles and the Attention-Kernel Loophole.',
  authors: [{ name: 'Vignesh Kanike' }],
}

export default function ProofOfWeightsPage() {
  return (
    <div className="column pb-8 pt-10 sm:pt-14">
      <main id="main">
        <ProofOfWeights />
      </main>
    </div>
  )
}
