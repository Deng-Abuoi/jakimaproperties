import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function OffPlanSpotlight() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">Investment Opportunities</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-8 leading-tight text-black">
              Off-Plan.<br/>Build Wealth.
            </h2>
            <p className="text-lg text-gray-500 mb-10 font-light leading-relaxed max-w-lg">
              Secure premium properties in high-growth areas. Benefit from early pricing and flexible payment structures tailored to serious investors.
            </p>
            <Link 
              href="/off-plan"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-colors"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
              alt="Off-Plan Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white text-black text-xs font-semibold tracking-[0.1em] uppercase">Kitisuru</span>
                <span className="px-4 py-2 bg-white text-black text-xs font-semibold tracking-[0.1em] uppercase">Ruaka</span>
                <span className="px-4 py-2 bg-white text-black text-xs font-semibold tracking-[0.1em] uppercase">Lower Kabete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}