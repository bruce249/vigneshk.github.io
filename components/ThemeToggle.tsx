'use client'

import { useTheme } from '@/lib/theme'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <p className="flex items-center gap-1.5 text-sm text-muted">
      <button
        type="button"
        data-set-theme="light"
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        className={theme === 'light' ? 'text-accent' : 'text-muted hover:text-fg'}
      >
        light
      </button>
      <span className="text-muted" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        data-set-theme="dark"
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        className={theme === 'dark' ? 'text-accent' : 'text-muted hover:text-fg'}
      >
        dark
      </button>
    </p>
  )
}
