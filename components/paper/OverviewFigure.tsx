import type { ReactNode } from 'react'
import Math from './Math'

function Box({
  children,
  muted,
}: {
  children: ReactNode
  muted?: boolean
}) {
  return (
    <div
      className={`rounded-sm border border-[var(--line)] px-3 py-2 text-center text-sm leading-snug ${
        muted ? 'bg-[var(--line)]/40' : ''
      }`}
    >
      {children}
    </div>
  )
}

export default function OverviewFigure() {
  return (
    <figure id="fig-overview" className="my-8">
      <div className="space-y-3 text-sm">
        <div className="grid gap-3 sm:grid-cols-3 sm:items-center">
          <Box muted>
            Provider
            <br />
            serves <Math tex="\tilde\theta" /> or <Math tex="\theta" />
          </Box>
          <Box>
            Per-layer top-<Math tex="k" />
            <br />
            every 32 tokens
          </Box>
          <Box muted>
            Validator prefill
            <br />
            with <Math tex="\theta" />
          </Box>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 sm:items-center">
          <Box>
            Disagreement profile
            <br />
            <Math tex="x \in \mathbb{R}^{4 \times 28}" />
          </Box>
          <Box>
            Classifier
            <br />
            <Math tex="\hat y \in \{0,\dots,4\}" />
          </Box>
          <Box muted>
            Contract
            <br />
            stake, bond, class history
          </Box>
        </div>
        <p className="text-center text-xs text-muted">
          <span className="font-mono">resolve</span>
          {' · '}
          <span className="font-mono">submitProof</span>: proof hash; stake held
        </p>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        <span className="font-medium text-fg">Figure 2.</span> Overview. Per-layer
        top-<Math tex="k" /> activations from the provider are compared with a
        validator prefill under the committed weights (Section 4.1); the
        disagreement profile is classified (Section 4.2); an upheld challenge
        slashes the stake and records the class (Section 4.3).
      </figcaption>
    </figure>
  )
}
