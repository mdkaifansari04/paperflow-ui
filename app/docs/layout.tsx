import type { ReactNode } from 'react'
import { DocsSidebar, Header } from '@/components/shared'

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper-base">
      <Header />
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full min-w-0 bg-paper-base px-4 md:px-6 lg:px-8">
        <div className="shrink-0 border-r border-ink-faint">
          <DocsSidebar />
        </div>
        <main className="min-w-0 flex-1 px-6 py-10 lg:px-8">{children}</main>
      </div>
    </div>
  )
}
