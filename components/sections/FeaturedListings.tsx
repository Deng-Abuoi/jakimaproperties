import Link from "next/link";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/properties";
import { ArrowRight } from "lucide-react";

export function FeaturedListings() {
  const featured = properties.filter(p => p.isFeatured).slice(0, 6);
  
  if (featured.length < 6) {
    const others = properties.filter(p => !p.isFeatured).slice(0, 6 - featured.length);
    featured.push(...others);
  }

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">Exclusive Portfolio</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight">Featured Properties</h2>
          </div>
          <Link 
            href="/properties" 
            className="group flex items-center gap-3 text-sm font-medium tracking-wide border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            Explore all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}