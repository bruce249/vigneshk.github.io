import WritingList from '@/components/WritingList'
import { experience, focusAreas, person, socials } from '@/lib/content'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="column pb-16 pt-8 sm:pt-12">
      <main id="main">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="min-w-0 flex-1">
            <h1 className="font-serif text-4xl tracking-tight text-fg sm:text-5xl">
              {person.fullName}
            </h1>
            <p className="mt-3 text-muted">{person.role}</p>
            <p className="mt-6 leading-relaxed">{person.bio}</p>
          </div>
          <img
            src="/bio.png"
            alt="Illustration of a figure against a pink sun"
            width={160}
            height={160}
            className="h-28 w-28 shrink-0 rounded-md object-cover sm:h-36 sm:w-36"
          />
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {person.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-sm text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-lg">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-muted no-underline hover:text-fg"
            >
              {social.label}
            </a>
          ))}
          <Link href="/writing" className="text-muted no-underline hover:text-fg">
            writing
          </Link>
        </p>

        <section id="experience" className="mt-14">
          <h2 className="font-serif text-2xl text-fg"># Experience</h2>
          <ul className="mt-6 space-y-8">
            {experience.map((job) => (
              <li key={`${job.company}-${job.role}`}>
                <p>
                  <span className="font-medium">{job.company}</span>
                  {': '}
                  {job.role}
                  <span className="text-muted"> ({job.dates})</span>
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="focus" className="mt-14">
          <h2 className="font-serif text-2xl text-fg"># Focus</h2>
          <ul className="mt-6 space-y-5">
            {focusAreas.map((area) => (
              <li key={area.id}>
                <p className="italic text-muted">{area.title}</p>
                <p className="mt-1 leading-relaxed">{area.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="writing" className="mt-14">
          <h2 className="font-serif text-2xl text-fg"># Writing</h2>
          <WritingList />
        </section>
      </main>
    </div>
  )
}
