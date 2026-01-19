import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-white">Veera Enterprises</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner for RO water purifier sales, service, and wholesale spare parts. Serving Maharashtra, Karnataka, and Goa.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/retail-kolhapur" className="hover:text-primary transition-colors">Kolhapur Services</Link></li>
              <li><Link href="/retail-pune" className="hover:text-primary transition-colors">Pune PCMC Services</Link></li>
              <li><Link href="/wholesale" className="hover:text-primary transition-colors">Wholesale Parts</Link></li>
              <li><Link href="/card" className="hover:text-primary transition-colors">Digital Card</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div>
                  <a href="tel:9146637761" className="block hover:text-white">9146637761</a>
                  <a href="tel:7887746318" className="block hover:text-white">7887746318</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>Pragati Chowk, Pachgaon,<br />Kolhapur – 416013</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Kolhapur</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Pune PCMC</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Sangli</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Satara</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Belgaum</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Veera Enterprises. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
