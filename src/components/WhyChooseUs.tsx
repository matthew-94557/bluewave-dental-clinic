import { UserCheck, Cpu, HeartHandshake, FileText, Waves, LucideIcon } from 'lucide-react';
import { BENEFIT_ITEMS } from '../data';

const iconMap: Record<string, LucideIcon> = {
  UserCheck: UserCheck,
  Cpu: Cpu,
  HeartHandshake: HeartHandshake,
  FileText: FileText,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-24 bg-slate-50 border-y border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column contents */}
          <div className="lg:col-span-6 space-y-8 animate-fade-in">
            
            {/* Header tags */}
            <div className="space-y-3">
              <span className="font-display text-sm font-extrabold text-blue-600 tracking-wider uppercase block">
                Why Choose BlueWave Dental Clinic?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                Care You Can <br />
                Feel Good About
              </h2>
              <div className="w-12 h-1 bg-blue-600/20 rounded-full mt-2" />
            </div>

            {/* Benefits 2x2 grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {BENEFIT_ITEMS.map((benefit) => {
                const Icon = iconMap[benefit.iconName] || HeartHandshake;
                return (
                  <div key={benefit.id} className="space-y-2.5 p-4 bg-white rounded-2xl border border-slate-100/80 shadow-sm" id={`benefit-item-${benefit.id}`}>
                    <div className="p-2 bg-blue-50 border border-blue-100 rounded-xl inline-flex text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-black text-slate-800 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column Lobby / Reception image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden border-8 border-white shadow-xl aspect-[16/10] bg-slate-100">
              <img
                src="/src/assets/images/clinic_reception_1779979690463.png"
                alt="BlueWave Dental Clinic luxury reception desk and waiting lounge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Brand Logo Sticker Overlay */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100/50 flex items-center gap-3 animate-pulse duration-1000">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white shadow-sm">
                  <Waves className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-display font-black text-slate-900 text-xs">BlueWave</p>
                  <p className="font-sans text-[8px] font-bold tracking-widest text-slate-400 uppercase -mt-0.5">Dental Clinic</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
