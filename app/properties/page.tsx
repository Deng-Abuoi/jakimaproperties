import { Suspense } from "react";
import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { FilterBar } from "@/components/ui/FilterBar";
import { Building2 } from "lucide-react";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const type = typeof params.type === 'string' ? params.type : '';
  const location = typeof params.location === 'string' ? params.location : '';
  const bedrooms = typeof params.bedrooms === 'string' ? params.bedrooms : '';
  const minPrice = typeof params.minPrice === 'string' ? params.minPrice : '';
  const maxPrice = typeof params.maxPrice === 'string' ? params.maxPrice : '';

  let filteredProperties = [...properties];

  if (type) {
    filteredProperties = filteredProperties.filter(p => p.type === type);
  }
  if (location) {
    filteredProperties = filteredProperties.filter(p => p.area.toLowerCase() === location.toLowerCase() || p.location.toLowerCase().includes(location.toLowerCase()));
  }
  if (bedrooms) {
    const beds = parseInt(bedrooms);
    if (beds === 5) {
      filteredProperties = filteredProperties.filter(p => p.bedrooms >= 5);
    } else {
      filteredProperties = filteredProperties.filter(p => p.bedrooms === beds);
    }
  }
  if (minPrice) {
    filteredProperties = filteredProperties.filter(p => p.price >= parseInt(minPrice));
  }
  if (maxPrice) {
    filteredProperties = filteredProperties.filter(p => p.price <= parseInt(maxPrice));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-12 max-w-2xl">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Properties</span>
        <h1 className="font-serif text-4xl lg:text-5xl mt-2 mb-4">All Listings</h1>
        <p className="text-muted-foreground text-lg">
          Browse our portfolio of premium properties in Nairobi and Kiambu.
        </p>
      </div>

      <Suspense fallback={<div className="h-16 bg-muted/30 rounded-xl mb-8 animate-pulse" />}>
        <FilterBar />
      </Suspense>

      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{filteredProperties.length}</span> properties found
        </p>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border rounded-2xl bg-muted/20">
          <Building2 className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-semibold mb-2">No properties found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
}