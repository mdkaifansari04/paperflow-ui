interface PropRow {
  name: string
  type: string
  defaultValue: string
  description: string
}

interface PropsTableProps {
  rows: PropRow[]
}

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <table className="w-full border-collapse font-body text-sm">
      <thead>
        <tr className="border-b-2 border-ink-black">
          <th className="py-3 pr-6 text-left font-mono text-xs uppercase tracking-wider text-ink-light">
            Prop
          </th>
          <th className="py-3 pr-6 text-left font-mono text-xs uppercase tracking-wider text-ink-light">
            Type
          </th>
          <th className="py-3 pr-6 text-left font-mono text-xs uppercase tracking-wider text-ink-light">
            Default
          </th>
          <th className="py-3 text-left font-mono text-xs uppercase tracking-wider text-ink-light">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} className="border-b border-ink-faint transition-colors hover:bg-paper-aged/50">
            <td className="py-3 pr-6">
              <code className="border border-ink-faint bg-paper-aged px-1.5 py-0.5 font-mono text-xs">
                {row.name}
              </code>
            </td>
            <td className="py-3 pr-6">
              <code className="font-mono text-xs text-accent-blue">{row.type}</code>
            </td>
            <td className="py-3 pr-6">
              <code className="font-mono text-xs text-ink-light">{row.defaultValue}</code>
            </td>
            <td className="py-3 text-ink-medium">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
