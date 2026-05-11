import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Users, Target, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Properties Listed" },
    { value: "500+", label: "Happy Clients" },
    { value: "Nairobi & Kiambu", label: "Coverage" },
  ];

  const values = [
    {
      icon: CheckCircle2,
      title: "Integrity",
      description: "We operate with absolute transparency, ensuring all listings are verified and clients are fully informed."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every interaction, from property selection to final handover."
    },
    {
      icon: Users,
      title: "Client-First",
      description: "Our clients' investment goals and lifestyle needs are at the heart of everything we do."
    },
    {
      icon: Target,
      title: "Vision",
      description: "We identify high-growth areas and projects that offer long-term value for investors."
    }
  ];

  const team = [
    {
      name: "Professional Team",
      role: "Dedicated Agents",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
    },
    {
      name: "Property Services",
      role: "Sales & Rentals",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
    }
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Modern cityscape buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <span className="text-white/80 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
            About Us
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight max-w-4xl mx-auto mb-8">
            Building Dreams.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light">
            Your trusted partner in Nairobi & Kiambu real estate since 2014.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">Our Story</span>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">
                Redefining Real Estate<br />in Kenya.
              </h2>
              <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                <p>
                  Founded in 2014, Jakima Properties emerged from a simple vision: to help Kenyans find greater returns by investing in a place to call home.
                </p>
                <p>
                  Based in Nairobi, we've grown into one of the most trusted property agencies in the region, specializing in residential sales, rentals, off-plan developments, and land.
                </p>
                <p>
                  Over the past 10 years, we have built a reputation for transparency, deep market knowledge, and unwavering commitment to client success.
                </p>
              </div>
              <div className="mt-12">
                <Link 
                  href="/properties"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-colors"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80"
                alt="Modern luxury home interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
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

      {/* Team Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 block mb-4">Our People</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">The Team</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="relative aspect-[16/10] overflow-hidden group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute bottom-8 left-8">
                  <p className="font-serif text-3xl text-white mb-1">{member.name}</p>
                  <p className="text-white/80 text-sm tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-gray-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 block mb-4">Core Values</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, idx) => (
              <div key={idx} className="group">
                <div className="mb-6">
                  <value.icon className="w-8 h-8 stroke-[1.5] text-black" />
                </div>
                <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg text-white/60 mb-12 font-light max-w-xl">
            Whether you're buying, selling, or investing, we're here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link 
              href="/properties"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-colors text-center"
            >
              Browse Properties
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}