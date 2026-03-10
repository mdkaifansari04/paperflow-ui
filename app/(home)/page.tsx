import { HeroSection } from "@/components/containers/landing";
import CustomCrowd from "@/components/containers/landing/heroCrowd";
import { Footer, Header } from "@/components/shared";

export default function HomePage() {
  return (
    <div className="bg-paper-base text-ink-black">
      <Header />
      <main>
        <HeroSection />
        <CustomCrowd />
      </main>
      <Footer />
    </div>
  );
}
