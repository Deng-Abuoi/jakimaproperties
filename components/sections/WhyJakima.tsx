import { ShieldCheck, Wallet, Map } from "lucide-react";

export function WhyJakima() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Trusted Agents",
      description: "With over 10 years of experience, we have built a reputation for transparency and reliability."
    },
    {
      icon: Wallet,
      title: "Flexible Plans",
      description: "We offer properties with tailored payment plans and mortgage options, making homeownership accessible."
    },
    {
      icon: Map,
      title: "Wide Portfolio",
      description: "From luxury villas to affordable off-plan studios, we have something for every budget and lifestyle."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">The Jakima Difference</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight">Setting the Standard in Real Estate.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="mb-6">
                <reason.icon className="w-8 h-8 stroke-[1.5] text-black" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{reason.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}