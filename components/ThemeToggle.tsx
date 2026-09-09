'use client'

import { useTheme } from '@/lib/theme'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <p className="flex items-center gap-1 text-sm">
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        className={theme === 'light' ? 'text-fg' : 'text-muted hover:text-fg'}
      >
        light
      </button>
      <span className="text-muted" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        className={theme === 'dark' ? 'text-fg' : 'text-muted hover:text-fg'}
      >
        dark
      </button>
    </p>
  )
}
