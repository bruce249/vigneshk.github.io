import { writing } from '@/lib/content'
import Link from 'next/link'
import type { ReactNode } from 'react'

function ItemLink({
  href,
  external,
  className,
  children,
}: {
  href: string
  external: boolean
  className?: string
  children: ReactNode
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default function WritingList() {
  return (
    <ul className="mt-8 space-y-4">
      {writing.map((post) => (
        <li key={post.href}>
          <ItemLink
            href={post.href}
            external={post.external}
            className="block overflow-hidden rounded-xl border border-line bg-card no-underline transition-colors hover:border-[color-mix(in_srgb,var(--fg)_28%,transparent)] hover:text-fg sm:grid sm:grid-cols-[13.5rem_minmax(0,1fr)]"
          >
            <div className="flex h-40 items-center justify-center bg-white sm:h-full sm:min-h-44">
              {post.image ? (
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-contain p-2"
                />
              ) : (
                <p className="px-4 text-center text-sm leading-snug text-neutral-700">
                  Six observations on answer alignment
                </p>
              )}
            </div>
            <div className="px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm text-muted">
                {post.displayDate}
                <span aria-hidden="true"> · </span>
                {post.authors}
              </p>
              <p className="mt-2 text-lg font-medium leading-snug">{post.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.summary}</p>
              <p className="mt-3 text-sm text-fg">
                {post.external ? 'Read post' : 'Read paper'}
                <span aria-hidden="true"> →</span>
              </p>
            </div>
          </ItemLink>
        </li>
      ))}
    </ul>
  )
}
