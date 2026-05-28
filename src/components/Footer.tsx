import { Waves, MapPin, Phone, Mail, Facebook, Instagram, Chrome } from 'lucide-react';
import { NAV_LINKS } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100 font-sans text-sm text-slate-600 scroll-mt-16">
      
      {/* Top Footer Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 items-start">
          
          {/* Column 1: Brand description */}
          <div className="lg:pr-10 space-y-5">
            <a href="#home" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white shadow-sm transition-transform active:scale-95 group-hover:scale-105">
                <Waves className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  BlueWave
                </span>
                <span className="font-sans text-[9px] font-bold tracking-widest text-slate-400 uppercase -mt-1">
                  Dental Clinic
                </span>
              </div>
            </a>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              We are dedicated to providing gentle, high-quality dental care in a modern, comfortable environment. Your smile is our number one pride.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-10 lg:border-l lg:border-slate-100 space-y-4">
            <h4 className="font-display font-black text-slate-900 text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 transition-colors font-medium text-slate-500 hover:pl-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="lg:pl-10 lg:border-l lg:border-slate-100 space-y-4">
            <h4 className="font-display font-black text-slate-900 text-xs uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-slate-500">
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors font-medium">Cosmetic Dentistry</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors font-medium">Invisalign & Braces</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors font-medium">Dental Implants</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors font-medium">Teeth Whitening</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors font-medium">General Dentistry</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinate info */}
          <div className="lg:pl-10 lg:border-l lg:border-slate-100 space-y-4">
            <h4 className="font-display font-black text-slate-900 text-xs uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-slate-500">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  1234 Smile Way, Suite 100,<br />
                  San Diego, CA 92101
                </span>
              </li>
              <li>
                <a href="tel:6195557820" className="flex items-center gap-3 hover:text-blue-600 transition-colors group">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="font-bold font-display group-hover:underline text-slate-750">(619) 555-7820</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@bluewavedental.com" className="flex items-center gap-3 hover:text-blue-600 transition-colors group">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="group-hover:underline break-all">hello@bluewavedental.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom copy / socials bar */}
      <div className="bg-slate-50/50 border-t border-slate-100 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="font-sans font-medium text-center sm:text-left">
            &copy; 2026 BlueWave Dental Clinic. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook link"
              className="p-2 bg-white hover:bg-blue-50 hover:text-blue-600 text-slate-400 rounded-lg border border-slate-200/60 shadow-sm transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram link"
              className="p-2 bg-white hover:bg-rose-50 hover:text-rose-600 text-slate-400 rounded-lg border border-slate-200/60 shadow-sm transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google maps location link"
              className="p-2 bg-white hover:bg-yellow-50 hover:text-yellow-600 text-slate-400 rounded-lg border border-slate-200/60 shadow-sm transition-all"
            >
              <Chrome className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
