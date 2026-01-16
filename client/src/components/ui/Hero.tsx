import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  type?: "retail" | "wholesale" | "home";
  ctaText?: string;
  ctaLink?: string;
}

export function Hero({ title, subtitle, image, type = "home", ctaText = "Book Service", ctaLink = "#contact" }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 text-white py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-40 scale-105 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {type === "wholesale" ? (
               <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium border border-orange-500/30 mb-4">
                 B2B Wholesale Supplier
               </span>
            ) : (
               <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-blue-200 text-sm font-medium border border-primary/30 mb-4">
                 Premium RO Service
               </span>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              {title}
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a href={ctaLink.startsWith("tel") ? ctaLink : undefined}>
                {ctaLink.startsWith("tel") ? (
                     <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8 text-base">
                        <Phone className="mr-2 h-5 w-5" /> {ctaText}
                     </Button>
                ) : (
                    <Link href={ctaLink}>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8 text-base cursor-pointer">
                            {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                )}
            </a>
            
            {type === "retail" && (
                <a href="https://wa.me/919146637761?text=Hi,%20I%20need%20RO%20service" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white h-12 px-8 text-base bg-transparent">
                        WhatsApp Chat
                    </Button>
                </a>
            )}
             {type === "wholesale" && (
                <a href="/card">
                    <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white h-12 px-8 text-base bg-transparent">
                        Download Catalog
                    </Button>
                </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
