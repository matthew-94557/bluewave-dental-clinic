import { useState, useEffect } from 'react';
import { Phone, Menu, X, Waves } from 'lucide-react';
import { NAV_LINKS } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none" id="nav-logo">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-sm transition-transform active:scale-95 group-hover:scale-105">
              <Waves className="w-6 h-6 text-white" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                BlueWave
              </span>
              <span className="font-sans text-[10px] font-bold tracking-widest text-slate-400 uppercase -mt-1">
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans font-medium text-sm text-slate-600 hover:text-blue-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:6195557820"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-400 font-sans font-semibold text-sm text-slate-800 transition-all hover:shadow-sm"
              id="cta-call-us"
            >
              <div className="p-1 px-1.5 bg-blue-100 rounded-full text-blue-600">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left flex flex-col pl-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Call Us Today</span>
                <span className="text-sm font-extrabold text-blue-700 font-display mt-0.5">(619) 555-7820</span>
              </div>
            </a>
            
            <a
              href="#booking"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-sm rounded-xl shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
              id="header-btn-book"
            >
              Book Appt
            </a>
          </div>

          {/* Hamburger / Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:6195557820"
              className="flex items-center justify-center p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-blue-600 md:hidden"
              aria-label="Call clinic"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden animate-in fade-in slide-in-from-top duration-200 bg-white border-b border-slate-100 shadow-lg px-4 pt-4 pb-6 absolute top-full left-0 right-0">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-semibold text-base text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="tel:6195557820"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-700">(619) 555-7820</span>
              </a>
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-center rounded-xl shadow-sm text-sm"
              >
                Book Dental Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
