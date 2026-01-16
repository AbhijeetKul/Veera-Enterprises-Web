import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { LocationSelector } from "@/components/ui/LocationSelector";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Wrench, ShieldCheck, Settings, ShoppingBag } from "lucide-react";
import heroImage from "@assets/generated_images/professional_ro_water_purifier_service_technician_working_in_a_modern_clean_kitchen.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Pure Water, Healthy Life."
          subtitle="Expert RO Purifier Service, Repair & Wholesale Spare Parts. Trusted by thousands in Maharashtra."
          image={heroImage}
          ctaText="Book Service Now"
          ctaLink="#locations"
        />
        
        <div id="locations">
          <LocationSelector />
        </div>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Our Core Services</h2>
              <p className="text-muted-foreground text-lg">Whether you need a quick repair or wholesale parts, Veera Enterprises delivers quality and trust.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard 
                title="RO Repair" 
                description="Expert diagnosis and repair for all RO brands. We fix leaks, motor issues, and membrane failures."
                icon={Wrench}
              />
              <ServiceCard 
                title="Installation" 
                description="Professional uninstallation and re-installation services for shifting or new units."
                icon={Settings}
              />
              <ServiceCard 
                title="AMC Plans" 
                description="Hassle-free Annual Maintenance Contracts to keep your purifier running perfectly all year."
                icon={ShieldCheck}
              />
              <ServiceCard 
                title="Wholesale Parts" 
                description="Genuine spare parts supply for dealers and technicians across Maharashtra & Karnataka."
                icon={ShoppingBag}
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
             <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                <div className="mb-6 md:mb-0 max-w-xl">
                  <h3 className="text-2xl font-bold font-heading mb-3">Looking for Wholesale Supplies?</h3>
                  <p className="text-muted-foreground">We supply high-quality RO spare parts, filters, and membranes to dealers and technicians across Maharashtra, Karnataka, and Goa.</p>
                </div>
                <a href="/wholesale" className="shrink-0">
                  <button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-lg font-semibold transition-colors">
                    Visit Wholesale Section
                  </button>
                </a>
             </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
