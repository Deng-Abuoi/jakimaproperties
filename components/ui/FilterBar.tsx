"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react";
import { properties } from "@/lib/properties";

export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: searchParams.get("type") || "",
    location: searchParams.get("location") || "",
    bedrooms: searchParams.get("bedrooms") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  });

  const locations = Array.from(new Set(properties.map(p => p.area))).sort();

  const handleChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    router.push(`/properties?${params.toString()}`);
    setIsOpen(false);
  };

  const resetFilters = () => {
    setFilters({ type: "", location: "", bedrooms: "", minPrice: "", maxPrice: "" });
    router.push("/properties");
    setIsOpen(false);
  };

  useEffect(() => {
    setFilters({
      type: searchParams.get("type") || "",
      location: searchParams.get("location") || "",
      bedrooms: searchParams.get("bedrooms") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
    });
  }, [searchParams]);

  return (
    <div className="mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center gap-2 px-4 py-2.5 border rounded-full text-sm font-medium w-full justify-center"
      >
        <SlidersHorizontal className="w-4 h-4" />
        {isOpen ? "Hide Filters" : "Show Filters"}
      </button>

      <div className={`${isOpen ? "block" : "hidden"} lg:block bg-card border rounded-xl p-5`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</label>
            <div className="relative">
              <select 
                className="w-full appearance-none border rounded-lg h-11 px-4 pr-10 bg-background text-sm cursor-pointer"
                value={filters.type}
                onChange={(e) => handleChange("type", e.target.value)}
              >
                <option value="">All Types</option>
                <option value="sale">For Sale</option>
                <option value="rent">To Let</option>
                <option value="off-plan">Off-Plan</option>
                <option value="land">Land</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</label>
            <div className="relative">
              <select 
                className="w-full appearance-none border rounded-lg h-11 px-4 pr-10 bg-background text-sm cursor-pointer"
                value={filters.location}
                onChange={(e) => handleChange("location", e.target.value)}
              >
                <option value="">All Locations</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Bedrooms</label>
            <div className="relative">
              <select 
                className="w-full appearance-none border rounded-lg h-11 px-4 pr-10 bg-background text-sm cursor-pointer"
                value={filters.bedrooms}
                onChange={(e) => handleChange("bedrooms", e.target.value)}
              >
                <option value="">Any</option>
                <option value="1">1 Bed</option>
                <option value="2">2 Beds</option>
                <option value="3">3 Beds</option>
                <option value="4">4 Beds</option>
                <option value="5">5+ Beds</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Min Price</label>
            <input 
              type="number" 
              placeholder="Min KES"
              className="w-full border rounded-lg h-11 px-4 bg-background text-sm"
              value={filters.minPrice}
              onChange={(e) => handleChange("minPrice", e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button 
              onClick={applyFilters}
              className="flex-1 flex items-center justify-center gap-2 h-11 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
            {(filters.type || filters.location || filters.bedrooms || filters.minPrice || filters.maxPrice) && (
              <button 
                onClick={resetFilters}
                className="h-11 w-11 flex items-center justify-center border rounded-lg hover:bg-muted transition-colors"
                aria-label="Reset"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}