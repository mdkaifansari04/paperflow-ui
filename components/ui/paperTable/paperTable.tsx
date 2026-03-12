import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperTableColumn<T> {
  key: keyof T
  header: string
  className?: string
}

export interface PaperTableProps<T extends Record<string, React.ReactNode>>
  extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: PaperTableColumn<T>[]
  rows: T[]
}

function PaperTableInner<T extends Record<string, React.ReactNode>>(
  { columns, rows, className, ...props }: PaperTableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>
) {
  return (
    <div className="overflow-x-auto border-2 border-ink-black">
      <table ref={ref} className={cn('w-full border-collapse font-body text-sm text-ink-medium', className)} {...props}>
        <thead>
          <tr className="border-b-2 border-ink-black bg-paper-light">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn('px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-ink-light', column.className)}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-ink-faint transition-colors hover:bg-paper-aged/50 last:border-b-0">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-4 py-3">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const PaperTableBase = React.forwardRef(PaperTableInner)

PaperTableBase.displayName = 'PaperTable'

const PaperTable = PaperTableBase as <T extends Record<string, React.ReactNode>>(
  props: PaperTableProps<T> & { ref?: React.ForwardedRef<HTMLTableElement> }
) => React.ReactElement

export { PaperTable }
