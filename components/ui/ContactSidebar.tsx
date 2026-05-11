"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";


export function ContactSidebar() {
  return (
    <div className="bg-card border rounded-2xl p-6 sticky top-24">
      <div className="space-y-3">
        <a 
          href="tel:+254799872747" 
          className="flex items-center justify-center gap-2 w-full h-11 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          0799 872 747
        </a>
        <a 
          href="https://wa.me/254799872747?text=Hello%2C%20I%27m%20interested%20in%20this%20property" 
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full h-11 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>

      <div className="mt-6 pt-6 border-t">
        <h4 className="font-semibold text-sm mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Request Viewing
        </h4>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full h-10 px-4 border rounded-lg bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full h-10 px-4 border rounded-lg bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
            required
          />
          <textarea 
            placeholder="Message"
            rows={3}
            className="w-full p-4 border rounded-lg bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all resize-none"
            defaultValue="I'm interested in this property. Please contact me with more details."
          ></textarea>
          <button className="w-full h-11 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}