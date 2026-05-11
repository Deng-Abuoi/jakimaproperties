"use client";

import { useEffect, useState } from "react";
import { MapPin, Navigation } from "lucide-react";

interface PropertyMapProps {
  address?: string;
  lat?: number;
  lng?: number;
  className?: string;
}

export function PropertyMap({ address, lat = -1.2921, lng = 36.8219, className = "" }: PropertyMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.03}%2C${lat - 0.02}%2C${lng + 0.03}%2C${lat + 0.02}&layer=mapnik&marker=${lat}%2C${lng}&zoom=13`;

  if (!isMounted) {
    return (
      <div className={`aspect-[16/10] bg-muted rounded-2xl flex items-center justify-center border ${className}`}>
        <div className="text-center p-6">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden border ${className}`}>
      <iframe
        src={mapUrl}
        className="w-full aspect-[16/10]"
        title="Property Location"
        loading="lazy"
      />
      {address && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-72">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{address}</p>
              <p className="text-xs text-muted-foreground">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ContactMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-72 lg:h-80 bg-muted flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-72 lg:h-80 relative">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=36.7%2C-1.4%2C37.0%2C-1.1&layer=mapnik&marker=-1.2921%2C36.8219&zoom=10"
        className="w-full h-full"
        title="Jakima Properties Coverage Area - Nairobi and Kiambu"
        loading="lazy"
      />
      <div className="absolute bottom-4 left-4 md:right-4 md:left-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
            <Navigation className="w-4 h-4 text-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium">Serving Nairobi & Kiambu</p>
            <p className="text-xs text-muted-foreground">Runda, Kilimani, Lavington, Ruiru & more</p>
          </div>
        </div>
      </div>
    </div>
  );
}