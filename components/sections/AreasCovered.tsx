export function AreasCovered() {
  const areas = [
    "Ruiru", "Ruaka", "Kilimani", "Runda", "Lavington", 
    "Tigoni", "Kiambu", "Kenyatta Rd", "Kitisuru", 
    "Lower Kabete", "Thindigua", "Ngecha"
  ];

  return (
    <section className="py-16 border-y border-black/5 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">Locations We Serve</h2>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex gap-12 animate-marquee items-center py-4">
          {areas.map((area, idx) => (
            <span 
              key={idx} 
              className="inline-block text-xl md:text-2xl font-serif text-gray-300 whitespace-nowrap hover:text-black transition-colors duration-300"
            >
              {area}
            </span>
          ))}
          {areas.map((area, idx) => (
            <span 
              key={`dup-${idx}`} 
              className="inline-block text-xl md:text-2xl font-serif text-gray-300 whitespace-nowrap hover:text-black transition-colors duration-300"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}