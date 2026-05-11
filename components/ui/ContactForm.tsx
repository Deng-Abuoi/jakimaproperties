"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  if (formState === "success") {
    return (
      <div className="bg-white border border-black/10 p-12 text-center h-full flex flex-col items-center justify-center">
        <CheckCircle2 className="w-12 h-12 text-black mb-6" strokeWidth={1} />
        <h3 className="font-serif text-3xl text-black mb-4">Message Sent</h3>
        <p className="text-gray-500 font-light mb-8 max-w-sm mx-auto">
          Thank you for reaching out. One of our property consultants will contact you shortly.
        </p>
        <button 
          className="px-8 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
          onClick={() => setFormState("idle")}
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full h-12 border-b border-black/20 bg-transparent text-sm focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-400"
            required
          />
        </div>
        <div className="flex flex-col">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full h-12 border-b border-black/20 bg-transparent text-sm focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-400"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full h-12 border-b border-black/20 bg-transparent text-sm focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-400"
            required
          />
        </div>
        <div className="flex flex-col">
          <select defaultValue="" className="w-full h-12 border-b border-black/20 bg-transparent text-sm focus:outline-none focus:border-black transition-colors rounded-none text-gray-500 cursor-pointer appearance-none">
            <option value="" disabled>Select Enquiry Type</option>
            <option value="buy">Buy a Property</option>
            <option value="rent">Rent a Property</option>
            <option value="sell">Sell a Property</option>
            <option value="offplan">Invest in Off-Plan</option>
            <option value="land">Land/Plot Inquiry</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col pt-4">
        <textarea 
          placeholder="How can we help you today?" 
          rows={4}
          className="w-full p-0 border-b border-black/20 bg-transparent text-sm focus:outline-none focus:border-black transition-colors resize-none rounded-none placeholder:text-gray-400"
          required
        ></textarea>
      </div>

      <button 
        type="submit"
        disabled={formState === "submitting"}
        className="w-full h-14 mt-8 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {formState === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}