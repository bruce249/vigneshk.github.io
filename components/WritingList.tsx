import { person, writing } from '@/lib/content'
import Link from 'next/link'

export default function WritingList() {
  return (
    <ul className="mt-5 space-y-4">
      {writing.map((post) => (
        <li key={post.href}>
          <span className="text-sm text-muted">{post.displayDate}</span>
          {post.external ? (
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block"
            >
              {post.title}
            </a>
          ) : (
            <Link href={post.href} className="mt-1 block">
              {post.title}
            </Link>
          )}
          {post.authors !== person.fullName && (
            <span className="text-sm text-muted">with Piush Vaish</span>
          )}
        </li>
      ))}
    </ul>
  )
}
