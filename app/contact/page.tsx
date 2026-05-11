import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 799 872 747", "+254 712 345 678"],
      action: "Call us",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@jakimaproperties.com", "sales@jakimaproperties.com"],
      action: "Drop a line",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Jakima Plaza, 4th Floor", "Nairobi, Kenya"],
      action: "Visit us",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern office space"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <span className="text-black/50 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black leading-tight max-w-4xl mx-auto mb-8">
            Let&apos;s Talk.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Whether you&apos;re looking to buy, sell, or invest, our experts are here to guide you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Info */}
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">Contact Details</span>
              <h2 className="font-serif text-4xl lg:text-5xl mb-12 leading-tight">
                We&apos;re Here to Help.
              </h2>
              
              <div className="space-y-12">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="mt-1">
                      <item.icon className="w-6 h-6 stroke-[1.5] text-black" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                      <div className="space-y-1 mb-3 text-gray-500 font-light text-lg">
                        {item.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </div>
                      <span className="text-xs uppercase tracking-widest text-black/50 font-semibold group-hover:text-black transition-colors cursor-pointer">
                        {item.action} &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Actions */}
              <div className="mt-16 pt-16 border-t border-black/10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-serif text-xl mb-4 flex items-center gap-3">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </h4>
                    <p className="text-gray-500 font-light mb-4">Fastest response for urgent inquiries.</p>
                    <a href="https://wa.me/254799872747" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity">
                      Chat Now &rarr;
                    </a>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-4 flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      Hours
                    </h4>
                    <div className="text-gray-500 font-light space-y-1">
                      <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:pl-12">
              <div className="bg-gray-50 p-8 sm:p-12 h-full flex flex-col justify-center">
                <div className="mb-12">
                  <h3 className="font-serif text-3xl mb-4">Send a Message</h3>
                  <p className="text-gray-500 font-light">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Width Map area */}
      <section className="h-[50vh] min-h-[400px] w-full bg-gray-100 relative">
        {/* Placeholder for actual Google Maps embed */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400">
          <MapPin className="w-12 h-12 mb-4 stroke-1" />
          <p className="font-serif text-2xl text-black">Find Us on the Map</p>
          <p className="font-light mt-2">Interactive Map Integration</p>
        </div>
      </section>
    </div>
  );
}