import ThemeToggle from '@/components/ThemeToggle'
import ProofOfWeights from '@/components/paper/ProofOfWeights'
import type { Metadata } from 'next'
import Link from 'next/link'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  title: 'Proof of Weights · Vignesh Kanike',
  description:
    'Proof of Weights: Per-Layer Activation Profiles for Attributing Weight Tampering in Verifiable LLM Inference.',
  authors: [{ name: 'Vignesh Kanike', url: 'mailto:ms1240669@iitd.ac.in' }],
}

export default function ProofOfWeightsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
      <header className="mb-10 flex items-center justify-between">
        <p className="flex flex-wrap gap-x-4 text-sm text-muted">
          <Link href="/">Home</Link>
          <Link href="/writing">Writing</Link>
        </p>
        <ThemeToggle />
      </header>
      <main id="main">
        <ProofOfWeights />
      </main>
    </div>
  )
}
