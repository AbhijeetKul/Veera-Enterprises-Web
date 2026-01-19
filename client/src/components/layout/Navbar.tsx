import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, ShoppingBag, Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Retail Services", href: "/retail-kolhapur", icon: MapPin },
    { name: "Wholesale", href: "/wholesale", icon: ShoppingBag },
    { name: "Digital Card", href: "/card", icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary hover:opacity-90 transition-opacity">
            <span className="bg-primary text-white p-1 rounded-md">VE</span>
            <span className="hidden sm:inline-block text-foreground">Veera Enterprises</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <a href="tel:9146637761">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4 animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="flex items-center gap-3 text-sm font-medium p-2 rounded-md hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-4 h-4 text-primary" />
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Locations</p>
              <div className="grid grid-cols-2 gap-2">
                 <Link href="/retail-kolhapur" className="text-center p-2 bg-secondary/20 text-primary text-sm rounded hover:bg-secondary/40" onClick={() => setIsOpen(false)}>
                    Kolhapur
                 </Link>
                 <Link href="/retail-pune" className="text-center p-2 bg-secondary/20 text-primary text-sm rounded hover:bg-secondary/40" onClick={() => setIsOpen(false)}>
                    Pune PCMC
                 </Link>
              </div>
            </div>
            <a href="tel:9146637761" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Expert
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
