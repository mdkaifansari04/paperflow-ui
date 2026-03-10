import type { ReactNode } from 'react'
import { DocsSidebar, Header } from '@/components/shared'

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper-base">
      <Header />
      <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-6xl bg-paper-base px-6 md:px-10">
        <div className="border-r border-ink-faint">
          <DocsSidebar />
        </div>
        <main className="flex-1 px-8 py-10">{children}</main>
      </div>
    </div>
  )
}
