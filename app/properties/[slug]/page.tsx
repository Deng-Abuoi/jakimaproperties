import { notFound } from "next/navigation";
import { Bed, Bath, Maximize, MapPin, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { properties } from "@/lib/properties";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { ContactSidebar } from "@/components/ui/ContactSidebar";
import { Badge } from "@/components/ui/Badge";
import { PriceTag } from "@/components/ui/PriceTag";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { PropertyMap } from "@/components/ui/Map";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <Link 
        href="/properties" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-foreground text-background">
                {property.type === 'sale' ? 'For Sale' : property.type === 'rent' ? 'To Let' : property.type === 'land' ? 'Land' : 'Off-Plan'}
              </Badge>
              {property.badge && (
                <Badge variant="secondary">{property.badge}</Badge>
              )}
            </div>
            <h1 className="font-serif text-3xl lg:text-4xl mb-3">{property.title}</h1>
            <div className="flex items-center text-muted-foreground gap-2">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
          </div>

          <ImageGallery images={property.images} />

          <div className="flex flex-wrap gap-6 py-8 my-8 border-y">
            <div className="text-center px-4">
              <PriceTag price={property.price} currency={property.priceCurrency} suffix={property.priceSuffix} label={property.priceLabel} />
            </div>
            {property.type !== 'land' && (
              <>
                <div className="flex items-center gap-2 px-4 border-l">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">{property.bedrooms}</span>
                  <span className="text-muted-foreground text-sm">Beds</span>
                </div>
                <div className="flex items-center gap-2 px-4 border-l">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">{property.bathrooms}</span>
                  <span className="text-muted-foreground text-sm">Baths</span>
                </div>
              </>
            )}
            {property.plotSize && (
              <div className="flex items-center gap-2 px-4 border-l">
                <Maximize className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">{property.plotSize}</span>
              </div>
            )}
          </div>

          <div className="mb-10">
            <h2 className="font-serif text-2xl mb-4">About this Property</h2>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-serif text-xl mb-4">Key Features</h3>
              <ul className="space-y-3">
                {property.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-600 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Amenities</h3>
              <ul className="space-y-3">
                {property.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/30 mt-1.5 shrink-0" />
                    <span className="text-sm">{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {property.paymentPlan && (
            <div className="bg-muted/30 border rounded-2xl p-8 mb-10">
              <h3 className="font-serif text-xl mb-4">Payment Plan</h3>
              <p className="text-muted-foreground leading-relaxed">{property.paymentPlan}</p>
              {property.completionDate && (
                <p className="mt-4 text-sm font-medium">Expected Completion: {property.completionDate}</p>
              )}
            </div>
          )}

          <div>
            <h3 className="font-serif text-xl mb-4">Location</h3>
            <PropertyMap address={property.location} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <ContactSidebar />
        </div>
      </div>

      {relatedProperties.length > 0 && (
        <div className="mt-20 pt-16 border-t">
          <h3 className="font-serif text-2xl lg:text-3xl mb-8">Similar Properties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}