function idsOf(n: number | readonly number[]) {
  return Array.isArray(n) ? n : [n]
}

export default function Cite({ n }: { n: number | readonly number[] }) {
  const ids = idsOf(n)
  return (
    <span>
      [
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 ? ', ' : ''}
          <a href={`#ref-${id}`}>{id}</a>
        </span>
      ))}
      ]
    </span>
  )
}
