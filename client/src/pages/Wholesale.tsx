import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CheckCircle2, Package, Truck, Award, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/organized_warehouse_shelves_filled_with_ro_water_purifier_spare_parts_and_filters.png";

export default function Wholesale() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Premium RO Spare Parts Wholesale"
          subtitle="Supply partner for dealers & technicians across Maharashtra, Karnataka & Goa. Best rates guaranteed."
          image={heroImage}
          type="wholesale"
          ctaText="Contact for Bulk Rates"
          ctaLink="tel:9146637761"
        />

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">B2B Supply Chain</span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">One-Stop Shop for All RO Components</h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Veera Enterprises helps technicians and shop owners scale their business by providing high-quality spare parts at competitive wholesale prices. We maintain a huge inventory to ensure you never run out of stock.
                </p>
                
                <div className="space-y-4">
                  {[
                    "All Major Brands Supported",
                    "Bulk Discounts Available",
                    "Next Day Dispatch",
                    "GST Compliant Invoicing",
                    "Technical Support for Dealers"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                      <span className="font-medium text-lg text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                   <a href="tel:9146637761">
                     <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                        Become a Partner
                     </Button>
                   </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-xl text-center hover:bg-slate-100 transition-colors">
                   <Package className="w-10 h-10 text-primary mx-auto mb-3" />
                   <h3 className="font-bold text-foreground">Filters & Membranes</h3>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl text-center hover:bg-slate-100 transition-colors">
                   <Factory className="w-10 h-10 text-primary mx-auto mb-3" />
                   <h3 className="font-bold text-foreground">Pumps & Motors</h3>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl text-center hover:bg-slate-100 transition-colors">
                   <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                   <h3 className="font-bold text-foreground">Fast Delivery</h3>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl text-center hover:bg-slate-100 transition-colors">
                   <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                   <h3 className="font-bold text-foreground">Quality Assured</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
           <div className="container-custom text-center">
              <h2 className="text-3xl font-bold font-heading mb-12">Supply Network</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Maharashtra</h3>
                    <p className="text-muted-foreground">Pune, Kolhapur, Satara, Sangli, Solapur, Ratnagiri</p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Karnataka</h3>
                    <p className="text-muted-foreground">Belgaum, Hubli, Dharwad, Nippani, Sankeshwar</p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Goa</h3>
                    <p className="text-muted-foreground">Panjim, Margao, Mapusa, Vasco</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
