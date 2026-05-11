import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { TrendingUp } from "lucide-react";

export default function OffPlanPage() {
  const offPlanProperties = properties.filter((p) => p.type === "off-plan");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-2xl mb-12">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Off-Plan</span>
        <h1 className="font-serif text-4xl lg:text-5xl mt-2 mb-4">Invest Early</h1>
        <p className="text-muted-foreground text-lg">
          Invest in high-potential developments with flexible payment plans and capital appreciation opportunities.
        </p>
      </div>

      {offPlanProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offPlanProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border rounded-2xl bg-muted/20">
          <TrendingUp className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">Check back soon for new off-plan opportunities.</p>
        </div>
      )}
    </div>
  );
}