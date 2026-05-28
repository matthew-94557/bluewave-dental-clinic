import { Sparkles, Activity, Shield, Sun, ArrowRight, LucideIcon } from 'lucide-react';
import { SERVICE_ITEMS } from '../data';

const iconMap: Record<string, LucideIcon> = {
  Sparkles: Sparkles,
  Activity: Activity,
  Shield: Shield,
  Sun: Sun,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-display text-sm font-extrabold text-blue-600 tracking-wider uppercase block">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Complete Dental Care for a Healthy, <br className="hidden sm:inline" />
            <span className="text-blue-600">Beautiful Smile</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600/20 rounded-full mx-auto mt-2" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_ITEMS.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-white border border-slate-100 rounded-3xl p-5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 transform hover:-translate-y-1 h-full"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Service Graphic Container with Icon Overlap */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                    
                    {/* Floating circular icon badge */}
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-blue-600 shadow border border-slate-100">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  {/* Text Contents */}
                  <h3 className="font-display text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More link */}
                <div>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 font-sans font-bold text-xs text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
