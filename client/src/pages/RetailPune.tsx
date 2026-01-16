import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CheckCircle2, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/professional_ro_water_purifier_service_technician_working_in_a_modern_clean_kitchen.png";

export default function RetailPune() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Expert RO Service in Pune PCMC"
          subtitle="Specialized water purifier repair and maintenance for Pimpri Chinchwad. Reliable technicians near you."
          image={heroImage}
          type="retail"
          ctaText="Call 8668217696"
          ctaLink="tel:8668217696"
        />

        <div className="container-custom py-16 -mt-20 relative z-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Reliable RO Repair in PCMC Area</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Living in PCMC? Don't let bad water affect your health. Veera Enterprises brings professional RO service directly to your doorstep in Pimpri-Chinchwad. We understand the specific water quality issues in Pune and provide tailored solutions for membranes and filters.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Same Day Service in PCMC",
                    "Hard Water Solutions",
                    "Transparent Pricing",
                    "Multi-Brand Expertise",
                    "Annual Maintenance (AMC)",
                    "Filter Change Reminders"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
                <h3 className="text-xl font-bold font-heading mb-4 text-indigo-900">PCMC Coverage Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {["Wakad", "Pimpri", "Chinchwad", "Nigdi", "Bhosari", "Akurdi", "Ravet", "Thergaon", "Sangvi"].map((area) => (
                    <span key={area} className="bg-white px-3 py-1.5 rounded-md text-sm text-indigo-800 font-medium border border-indigo-100 shadow-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm />
                <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                  <p className="text-muted-foreground text-sm mb-2">PCMC Helpline</p>
                  <a href="tel:8668217696" className="flex items-center justify-center gap-2 text-2xl font-bold text-indigo-600 hover:text-indigo-700">
                    <Phone className="w-6 h-6" /> 8668217696
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Fast Response in PCMC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton phone="918668217696" />
    </div>
  );
}
