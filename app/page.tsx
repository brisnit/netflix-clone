import { AdsBanner } from "@/components/AdsBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PrototypeProvider } from "@/components/PrototypeProvider";
import { TrendingNow } from "@/components/TrendingNow";
import { ValueProps } from "@/components/ValueProps";

export default function Home() {
  return (
    <PrototypeProvider>
      <main className="overflow-x-clip">
        <Hero />
        <AdsBanner />
        <TrendingNow />
        <ValueProps />
        <Faq />
        <Footer />
      </main>
    </PrototypeProvider>
  );
}
