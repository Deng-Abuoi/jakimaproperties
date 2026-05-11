export function StatsBanner() {
  const stats = [
    { value: "200+", label: "Properties" },
    { value: "10+", label: "Years" },
    { value: "Nairobi & Kiambu", label: "Coverage" },
  ];

  return (
    <section className="bg-white border-y border-black/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="block font-serif text-4xl lg:text-5xl font-light mb-3 text-black">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}