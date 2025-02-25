import Header from "@/components/layouts/Header";
import Features from "@/components/widgets/Features";
import Hero from "@/components/widgets/Hero";
import HeroImage from "@/components/widgets/HeroImage";
import Pricing from "@/components/widgets/Pricing";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Header />
      <Hero />
      <HeroImage />
      <Features />
      <Pricing />
    </div>
  );
}
