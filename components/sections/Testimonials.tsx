export function Testimonials() {
  const testimonials = [
    {
      name: "David K.",
      role: "Homebuyer, Ruiru",
      text: "Jakima Properties made buying my first home incredibly smooth. Their transparency and guidance throughout the mortgage process was exceptional."
    },
    {
      name: "Sarah M.",
      role: "Investor",
      text: "I've purchased two off-plan properties through Jakima. They only recommend reputable developers, and the ROI has been exactly as projected."
    },
    {
      name: "James & Mary",
      role: "Tenants, Kilimani",
      text: "Professional, responsive, and always helpful. They found us the perfect apartment that fit our budget within just 48 hours."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">Client Stories</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight">Word of Mouth.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-8">
                <span className="text-6xl font-serif text-gray-200 leading-none">"</span>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 font-light mb-8 flex-1">
                {t.text}
              </p>
              <div>
                <p className="font-medium text-black">{t.name}</p>
                <p className="text-sm text-gray-400 tracking-wide mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}