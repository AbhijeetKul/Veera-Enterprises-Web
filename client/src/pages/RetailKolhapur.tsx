import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CheckCircle2, MapPin, Clock, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/professional_ro_water_purifier_service_technician_working_in_a_modern_clean_kitchen.png";

export default function RetailKolhapur() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Best RO Service in Kolhapur"
          subtitle="Expert Repair, Installation & Maintenance at your doorstep. Fast response within city limits."
          image={heroImage}
          type="retail"
          ctaText="Call 8624979599"
          ctaLink="tel:8624979599"
        />

        <div className="container-custom py-16 -mt-20 relative z-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Why Choose Veera Enterprises in Kolhapur?</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We are Kolhapur's most trusted water purifier service center. Located at Pragati Chowk, Pachgaon, we serve the entire city and nearby areas within 25km. Our technicians are trained to handle all major brands including Kent, Aquaguard, Pureit, and Livpure.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "90-Minute Response Time",
                    "Genuine Spare Parts",
                    "3-Month Service Warranty",
                    "Expert Technicians",
                    "Affordable AMC Plans",
                    "No Hidden Charges"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold font-heading mb-4 text-blue-900">Service Coverage Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {["Pachgaon", "Rajarampuri", "Tarabai Park", "Nagala Park", "Ruikar Colony", "Kasaba Bawada", "New Shahupuri", "Unchgaon", "Kalamba"].map((area) => (
                    <span key={area} className="bg-white px-3 py-1.5 rounded-md text-sm text-blue-800 font-medium border border-blue-100 shadow-sm">
                      {area}
                    </span>
                  ))}
                  <span className="bg-white px-3 py-1.5 rounded-md text-sm text-blue-800 font-medium border border-blue-100 shadow-sm">+ Nearby 25km</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm />
                <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                  <p className="text-muted-foreground text-sm mb-2">Direct Service Line</p>
                  <a href="tel:8624979599" className="flex items-center justify-center gap-2 text-2xl font-bold text-primary hover:text-primary/90">
                    <Phone className="w-6 h-6" /> 8624979599
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Available 9 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton phone="918624979599" />
    </div>
  );
}
