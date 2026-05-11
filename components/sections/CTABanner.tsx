export function CTABanner() {
  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
          Ready to begin?
        </h2>
        <p className="text-lg text-white/60 mb-12 font-light max-w-xl">
          Connect with our advisory team to discuss your real estate aspirations in confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <a 
            href="tel:+254799872747"
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-colors text-center"
          >
            Call Us Now
          </a>
          <a 
            href="https://wa.me/254799872747"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-colors text-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}