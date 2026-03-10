import { HeroSection } from '@/components/containers/landing'
import { Footer, Header } from '@/components/shared'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper-base text-ink-black">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}
