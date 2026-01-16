import { Phone, Mail, MapPin, Share2, Download, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImage from "@assets/generated_images/modern_digital_business_card_background_with_water_flow_abstract_pattern.png";
import { QRCodeSVG } from "qrcode.react";

export default function DigitalCard() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Enterprises;Veera;;;
FN:Veera Enterprises
ORG:Veera Enterprises
TITLE:RO Sales & Service
TEL;TYPE=WORK,VOICE:9146637761
TEL;TYPE=CELL,VOICE:7887746318
ADR;TYPE=WORK:;;Pragati Chowk, Pachgaon;Kolhapur;Maharashtra;416013;India
URL:https://veeraenterprises.com
NOTE:RO Service, Repair, AMC & Wholesale Spare Parts.
END:VCARD`;

  const downloadVCard = () => {
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Veera_Enterprises.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Veera Enterprises Digital Card",
          text: "Check out Veera Enterprises for expert RO Services and Spare Parts!",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed", err);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 relative">
        
        {/* Header / Banner */}
        <div className="h-48 relative bg-slate-900">
           <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-60" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
           <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h1 className="text-3xl font-heading font-bold">Veera Enterprises</h1>
              <p className="text-slate-300">RO Sales, Service & Wholesale</p>
           </div>
        </div>

        <div className="p-6 space-y-6">
           {/* Actions Grid */}
           <div className="grid grid-cols-2 gap-4">
              <a href="tel:9146637761" className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex flex-col items-center justify-center gap-1 transition-transform active:scale-95 shadow-md">
                 <Phone className="w-6 h-6" />
                 <span className="text-sm font-semibold">Call Now</span>
              </a>
              <a href="https://wa.me/919146637761" className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl flex flex-col items-center justify-center gap-1 transition-transform active:scale-95 shadow-md">
                 <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                 <span className="text-sm font-semibold">WhatsApp</span>
              </a>
           </div>

           {/* Contact Details */}
           <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-start gap-3">
                 <Phone className="w-5 h-5 text-primary mt-1" />
                 <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Main Contact</p>
                    <a href="tel:9146637761" className="block text-foreground font-medium">9146637761</a>
                    <a href="tel:7887746318" className="block text-foreground font-medium">7887746318</a>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-primary mt-1" />
                 <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Address</p>
                    <p className="text-foreground">Pragati Chowk, Pachgaon, Kolhapur – 416013</p>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <Globe className="w-5 h-5 text-primary mt-1" />
                 <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Website</p>
                    <a href="https://veeraenterprises.com" className="text-foreground">veeraenterprises.com</a>
                 </div>
              </div>
           </div>

           {/* QR Code */}
           <div className="flex justify-center py-4">
              <div className="bg-white p-4 rounded-xl shadow-inner border">
                  <QRCodeSVG value="https://veeraenterprises.com" size={150} />
              </div>
           </div>
           
           <p className="text-center text-sm text-muted-foreground">Scan to visit website</p>

           {/* Footer Actions */}
           <div className="grid grid-cols-2 gap-4 pt-4">
              <Button onClick={downloadVCard} className="bg-slate-900 text-white hover:bg-slate-800">
                 <Download className="w-4 h-4 mr-2" /> Save Contact
              </Button>
              <Button onClick={shareCard} variant="outline" className="border-slate-300">
                 <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
