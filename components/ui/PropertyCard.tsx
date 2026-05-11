import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, MapPin, ArrowUpRight } from "lucide-react";
import { Property } from "@/lib/properties";
import { Badge } from "./Badge";
import { PriceTag } from "./PriceTag";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link 
      href={`/properties/${property.slug}`}
      className="group block transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-5">
        <Image
          src={property.images[0] || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="w-fit tracking-[0.1em] text-xs font-medium uppercase bg-white text-black rounded-none px-3 py-1">
            {property.type === 'sale' ? 'For Sale' : property.type === 'rent' ? 'To Let' : property.type === 'land' ? 'Land' : 'Off-Plan'}
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <div className="px-1">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl leading-tight truncate group-hover:text-gray-600 transition-colors">{property.title}</h3>
            <div className="flex items-center text-gray-500 text-sm gap-2 mt-2 font-light">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{property.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-3">
          <PriceTag 
            price={property.price} 
            currency={property.priceCurrency} 
            suffix={property.priceSuffix} 
            label={property.priceLabel}
            className="shrink-0 font-medium text-lg"
          />
        </div>
        
        {property.type !== 'land' && (
          <div className="flex items-center gap-5 text-sm text-gray-500 font-light mt-3">
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 stroke-[1.5]" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4 stroke-[1.5]" />
              <span>{property.bathrooms} Baths</span>
            </div>
          </div>
        )}
        
        {property.plotSize && (
          <div className="text-sm text-gray-500 font-light mt-3">
            {property.plotSize}
          </div>
        )}
      </div>
    </Link>
  );
}