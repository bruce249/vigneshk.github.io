import katex from 'katex'

type MathProps = {
  tex: string
  display?: boolean
  className?: string
}

export default function Math({ tex, display = false, className = '' }: MathProps) {
  const html = katex.renderToString(tex, {
    throwOnError: true,
    displayMode: display,
    output: 'html',
  })

  if (display) {
    return (
      <div
        className={`paper-eq overflow-x-auto py-3 text-center ${className}`.trim()}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
