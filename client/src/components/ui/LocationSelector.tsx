import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

export function LocationSelector() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto -mt-16 relative z-20 px-4">
      <Link href="/retail-kolhapur">
        <a className="block">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-colors"
          >
            <div className="bg-blue-100 p-4 rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground">Kolhapur & Nearby</h3>
              <p className="text-muted-foreground text-sm">Retail Service, Repair & Installation</p>
            </div>
          </motion.div>
        </a>
      </Link>
      
      <Link href="/retail-pune">
        <a className="block">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-colors"
          >
            <div className="bg-indigo-100 p-4 rounded-full">
              <MapPin className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground">Pune (PCMC Area)</h3>
              <p className="text-muted-foreground text-sm">Fast Service in Wakad, Pimpri, Chinchwad</p>
            </div>
          </motion.div>
        </a>
      </Link>
    </div>
  );
}
