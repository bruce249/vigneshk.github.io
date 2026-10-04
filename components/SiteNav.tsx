'use client'

import ThemeToggle from '@/components/ThemeToggle'

export default function SiteNav() {
  return (
    <header className="column flex justify-end pt-6">
      <ThemeToggle />
    </header>
  )
}
