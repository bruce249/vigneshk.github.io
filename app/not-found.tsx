import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-16">
      <h1 className="text-3xl text-fg">Not found</h1>
      <p className="mt-4">
        <Link href="/">Back home</Link>
      </p>
    </div>
  )
}
