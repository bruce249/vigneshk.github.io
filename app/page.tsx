import ThemeToggle from '@/components/ThemeToggle'
import WritingList from '@/components/WritingList'
import { experience, focusAreas, person, socials } from '@/lib/content'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
      <header className="mb-10 flex justify-end">
        <ThemeToggle />
      </header>

      <main id="main">
        <h1 className="font-serif text-4xl tracking-tight text-fg sm:text-5xl">
          {person.fullName}
        </h1>
        <p className="mt-3 text-muted">{person.role}</p>

        <section id="about" className="mt-8 max-w-2xl">
          <p>{person.bio}</p>
        </section>

        <ul className="mt-8 flex flex-wrap gap-2">
          {person.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
          <Link href="/writing">writing</Link>
        </p>

        <section id="experience" className="scroll-mt-8 pt-10">
          <h2 className="font-serif text-2xl text-fg"># Experience</h2>
          <ul className="mt-5 space-y-8">
            {experience.map((job) => (
              <li key={`${job.company}-${job.role}`}>
                <p>
                  <span className="font-medium">{job.company}:</span> {job.role}{' '}
                  <span className="text-muted">({job.dates})</span>
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="focus" className="scroll-mt-8 pt-10">
          <h2 className="font-serif text-2xl text-fg"># Focus</h2>
          <ul className="mt-5 space-y-4">
            {focusAreas.map((area) => (
              <li key={area.id}>
                <span className="italic">{area.title}.</span> {area.body}
              </li>
            ))}
          </ul>
        </section>

        <section id="writing" className="scroll-mt-8 pt-10">
          <h2 className="font-serif text-2xl text-fg"># Writing</h2>
          <WritingList />
        </section>
      </main>
    </div>
  )
}
