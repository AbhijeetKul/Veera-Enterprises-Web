import React, { useState, useEffect, useRef } from 'react';

import { BUSINESS_DATA } from '../constants';

const DigitalCard: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const [showQR, setShowQR] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(localStorage.getItem('veera_card_logo'));
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Kolhapur',
    message: ''
  });

  const cardUrl = window.location.href;

  useEffect(() => {
    const urlName = params.get('name');
    const urlPhone = params.get('phone');
    const urlCity = params.get('city');

    const savedName = localStorage.getItem('veera_user_name');
    const savedPhone = localStorage.getItem('veera_user_phone');
    const savedCity = localStorage.getItem('veera_user_city');

    setFormData({
      name: urlName || savedName || '',
      phone: urlPhone || savedPhone || '',
      city: (urlCity || savedCity || 'Kolhapur') as 'Kolhapur' | 'Pune PCMC' | 'Other',
      message: ''
    });

    if (urlName || urlPhone) {
      setShowInquiry(true);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem('veera_card_logo', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Veera Enterprises
ORG:Veera Enterprises
TEL;TYPE=WORK,VOICE:${BUSINESS_DATA.contacts.main1}
TEL;TYPE=CELL,VOICE:${BUSINESS_DATA.contacts.main2}
TEL;TYPE=WORK,VOICE:${BUSINESS_DATA.contacts.kolhapur}
TEL;TYPE=WORK,VOICE:${BUSINESS_DATA.contacts.pune}
ADR;TYPE=WORK:;;Pragati Chowk, Pachgaon;Kolhapur;Maharashtra;416013;India
URL:${cardUrl}
X-SOCIALPROFILE;TYPE=facebook:${BUSINESS_DATA.socials.facebook}
X-SOCIALPROFILE;TYPE=instagram:${BUSINESS_DATA.socials.instagram}
NOTE:RO Purifier Service & Wholesale Specialist
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Veera_Enterprises.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=Connect%20with%20Veera%20Enterprises%20for%20RO%20Solutions:%20${encodeURIComponent(cardUrl)}`, '_blank');
  };

  const shareSMS = () => {
    window.open(`sms:?body=Connect%20with%20Veera%20Enterprises%20for%20RO%20Solutions:%20${cardUrl}`);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('veera_user_name', formData.name);
    localStorage.setItem('veera_user_phone', formData.phone);
    localStorage.setItem('veera_user_city', formData.city);

    const whatsappNum = formData.city === 'Pune PCMC' ? BUSINESS_DATA.contacts.pune : BUSINESS_DATA.contacts.kolhapur;
    const text = `*Quick Inquiry from Digital Card*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*City:* ${formData.city}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/91${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-6 px-4 pb-32 animate-fade-in">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        {/* Profile Header */}
        <div className="blue-gradient h-32 relative">
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div 
              className="w-24 h-24 bg-white rounded-2xl shadow-md p-1.5 cursor-pointer group relative animate-scale-in"
              onClick={triggerUpload}
              title="Click to upload logo"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleImageUpload} 
              />
              
              <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-blue-600">
                {profileImage ? (
                  <img src={profileImage} alt="Logo" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-white font-bold text-3xl italic">VE</div>
                )}
              </div>
              
              {/* Upload Overlay */}
              <div className="absolute inset-1.5 rounded-xl bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 pb-8 px-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Veera Enterprises</h1>
          <p className="text-blue-600 font-medium text-sm mt-1 uppercase tracking-wider">RO Purifier Specialists</p>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-4 my-8">
            <a href={`tel:${BUSINESS_DATA.contacts.main1}`} className="flex flex-col items-center animate-fade-in-up delay-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-1 hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Call</span>
            </a>
            <button onClick={shareWhatsApp} className="flex flex-col items-center animate-fade-in-up delay-200">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-1 hover:bg-emerald-100 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">WA</span>
            </button>
            <button onClick={shareSMS} className="flex flex-col items-center animate-fade-in-up delay-300">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-1 hover:bg-amber-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">SMS</span>
            </button>
            <button onClick={() => setShowQR(!showQR)} className="flex flex-col items-center animate-fade-in-up delay-400">
              <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-1 hover:bg-slate-200 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">QR</span>
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up delay-500">
            <a href={BUSINESS_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={BUSINESS_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>

          {/* Quick Inquiry Form */}
          <div className="mb-8 animate-fade-in-up delay-600">
            <button 
              onClick={() => setShowInquiry(!showInquiry)}
              className={`w-full flex items-center justify-between p-4 border rounded-2xl font-bold transition-all ${showInquiry ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-blue-50 border-blue-100 text-blue-700'}`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                {showInquiry ? 'Close Form' : 'Quick Inquiry'}
              </div>
              <svg className={`w-5 h-5 transition-transform ${showInquiry ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            
            {showInquiry && (
              <form onSubmit={handleInquirySubmit} className="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-left animate-fade-in-down">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. 9876543210"
                      className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">City</label>
                    <select 
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value as any})}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm bg-white"
                    >
                      <option value="Kolhapur">Kolhapur</option>
                      <option value="Pune PCMC">Pune PCMC</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Message / Issue</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      placeholder="What service do you need?"
                      rows={3}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center shadow-lg active:scale-95"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Primary In-Card Download Button */}
          <button 
            onClick={handleSaveContact}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-md shadow-lg hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center mb-8 animate-fade-in-up delay-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Download Contact (vCard)
          </button>

          {showQR && (
            <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 animate-fade-in-down flex flex-col items-center">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <svg width="150" height="150" viewBox="0 0 100 100" className="text-slate-900">
                  <path fill="currentColor" d="M10 10h30v30H10zM10 60h30v30H10zM60 10h30v30H60zM60 60h30v30H60z" opacity=".2"/>
                  <path fill="none" stroke="currentColor" strokeWidth="4" d="M15 15h20v20H15zM15 65h20v20H15zM65 15h20v20H65zM65 75h10v10h10v-10h-10zM65 65h10v10h-10zM75 65h10v10h-10z"/>
                  <rect x="45" y="45" width="10" height="10" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">Scan to visit digital card</p>
            </div>
          )}

          {/* Contact Details */}
          <div className="space-y-3 text-left animate-fade-in-up delay-800">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Contact City-wise</h3>
            <a href={BUSINESS_DATA.whatsapp.kolhapur} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-2.096 0-4.14-.54-5.945-1.588L.057 24z"/></svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Kolhapur WhatsApp</p>
                <p className="text-slate-800 font-bold">{BUSINESS_DATA.contacts.kolhapur}</p>
              </div>
            </a>
            <a href={BUSINESS_DATA.whatsapp.pune} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-2.096 0-4.14-.54-5.945-1.588L.057 24z"/></svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Pune PCMC WhatsApp</p>
                <p className="text-slate-800 font-bold">{BUSINESS_DATA.contacts.pune}</p>
              </div>
            </a>
          </div>

          {/* Our Services Section with STAGGERED LIST ANIMATIONS */}
          <div className="mt-8 text-left">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-3 animate-fade-in-up delay-900">Our Services</h3>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
              {BUSINESS_DATA.services.map((s, i) => {
                const delayClass = `delay-${1000 + (i * 100)}`;
                return (
                  <div 
                    key={i} 
                    className={`flex items-center text-sm text-slate-700 font-medium animate-fade-in-up ${delayClass}`}
                  >
                    <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {s}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-6 text-left animate-fade-in-up delay-1000">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-3">Service Areas</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Retail Coverage</p>
                <p className="text-slate-800 text-sm font-semibold">{BUSINESS_DATA.areas.retail}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Wholesale States</p>
                <p className="text-slate-800 text-sm font-semibold">{BUSINESS_DATA.areas.wholesale}</p>
              </div>
            </div>
          </div>

          {/* Main Branch Address */}
          <div className="mt-8 text-left animate-fade-in-up delay-1000">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-3">Main Branch</h3>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-slate-700 text-sm leading-relaxed mb-4">{BUSINESS_DATA.mainAddress}</p>
              <div className="w-full h-32 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-xs italic border border-dashed border-slate-300">
                Google Maps Link Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Floating CTA */}

    </div>
  );
};

export default DigitalCard;
