import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow py-20">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl font-bold font-heading mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
            <p className="text-sm text-slate-500">Last Updated: January 16, 2026</p>
            
            <p>At Veera Enterprises, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Veera Enterprises and how we use it.</p>

            <h2 className="text-xl font-bold text-foreground">Information We Collect</h2>
            <p>We collect information you provide directly to us when you fill out a contact form or communicate with us via WhatsApp. This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Phone Number</li>
              <li>Service Address</li>
              <li>Details of the service request</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Process your service requests and appointments</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service</li>
              <li>Send you updates and other information relating to the website</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground">Google Ads & Analytics</h2>
            <p>We use Google Ads and Google Analytics to understand how visitors interact with our website and to measure the effectiveness of our advertising. These services may use cookies and similar technologies to collect data about your browsing behavior. We do not share your personally identifiable information (PII) with Google for advertising purposes without your consent.</p>

            <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
            <p><strong>Veera Enterprises</strong><br/>Pragati Chowk, Pachgaon, Kolhapur – 416013<br/>Phone: 9146637761</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
