import type { Metadata } from 'next'

const apart =
  'https://apartresearch.com/sprints/projects/cheap-talk-answer-engines-ignore-failed-signature-checks-and-trust-forgeable-signals-v8442ohnb5'

export const metadata: Metadata = {
  title: 'Cheap Talk · Vignesh Kanike',
  description:
    'Cheap Talk is published on Apart Research. This page redirects there.',
  alternates: { canonical: apart },
}

export default function CheapTalkRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${apart}`} />
      <div className="column pb-16 pt-10">
        <main id="main">
          <p>
            This report is published on Apart Research.{' '}
            <a href={apart}>Continue to the project</a>.
          </p>
        </main>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(apart)})`,
        }}
      />
    </>
  )
}
