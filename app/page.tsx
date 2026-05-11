import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { FeaturedListings } from "@/components/sections/FeaturedListings";
import { WhyJakima } from "@/components/sections/WhyJakima";
import { OffPlanSpotlight } from "@/components/sections/OffPlanSpotlight";
import { AreasCovered } from "@/components/sections/AreasCovered";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <FeaturedListings />
      <WhyJakima />
      <OffPlanSpotlight />
      <AreasCovered />
      <Testimonials />
      <CTABanner />
    </>
  );
}
