import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { Star, Quote, Heart, MapPin, Grid } from 'lucide-react';
import { TESTIMONIAL_ITEMS } from '../data';
import testimonialsImgSrc from "../assets/images/clinic_team_1779979713717.png";


export default function Testimonials() {
  // Before / After Slider Position State (Percentage: 0 - 100)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-16 space-y-2">
          <span className="font-display text-sm font-extrabold text-blue-600 tracking-wider uppercase block">
            Real Smiles. Real Stories.
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Transformations That Change Lives
          </h2>
          <div className="w-16 h-1 bg-blue-600/20 rounded-full mt-2" />
        </div>

        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: BEFORE / AFTER Interactive Smile Comparison Slider */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-black text-slate-800">
                Visual Results
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500">
                Drag the slider center handle to explore a typical dental transformation.
              </p>
            </div>

            {/* Slider Container */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-square mt-6 rounded-[24px] overflow-hidden shadow-lg border border-slate-100 select-none cursor-pointer group"
              id="smile-slider-container"
            >
              {/* After Image (Pristine Bright Smile) */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600"
                  alt="Smile After Dental Treatment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-110 contrast-[1.03] saturate-[1.05]"
                />
                {/* AFTER label badge */}
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white font-sans font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-20">
                  After
                </div>
              </div>

              {/* Before Image (Slightly Stained Smile) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600"
                  alt="Smile Before Dental Treatment"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88] saturate-[0.8] sepia-[0.35] contrast-[0.95]"
                  style={{ width: containerRef.current?.getBoundingClientRect().width || '100vw' }}
                />
                {/* BEFORE label badge */}
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white font-sans font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-20">
                  Before
                </div>
              </div>

              {/* Slider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-blue-600 border border-slate-200 shadow-xl flex items-center justify-center font-bold text-xs hover:scale-115 transition-transform">
                  ↔
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Written Patient Testimonials */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <h3 className="font-display text-lg font-black text-slate-800">
              Verified Feedback
            </h3>

            {TESTIMONIAL_ITEMS.map((test) => (
              <div
                key={test.id}
                className="relative flex flex-col justify-between bg-blue-50/50 hover:bg-blue-50 border border-blue-100 rounded-3xl p-6 transition-colors duration-300 shadow-sm flex-1"
                id={`patient-testimonial-${test.id}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-blue-300 fill-blue-100" />
                    <div className="flex">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="font-sans text-sm text-slate-700 leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-blue-100/50 flex justify-between items-center">
                  <span className="font-display font-black text-slate-900 text-sm">
                    {test.name}
                  </span>
                  <span className="font-sans text-[10px] font-bold text-blue-700 uppercase tracking-wide bg-blue-100 px-2.5 py-0.5 rounded-full">
                    Verified Patient
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Google 5.0 Rating & In-Clinic Team Card */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <h3 className="font-display text-lg font-black text-slate-800 mb-6">
              Our Community
            </h3>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 shadow-xl space-y-6 flex-1 flex flex-col justify-between hover:shadow-2xl transition-shadow" id="testimonials-stats-card">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-2xl font-black tracking-tight text-white leading-none">500+</h4>
                    <p className="font-sans text-xs text-sky-200 mt-1">Happy Patients Served</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-2xl text-rose-400">
                    <Heart className="w-6 h-6 fill-rose-500" />
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                {/* Team photo frame */}
                <div className="space-y-2">
                  <p className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest pl-0.5">Meet the Practice</p>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 bg-slate-800">
                    <img
                      src={testimonialsImgSrc}
                      alt="BlueWave Dental Clinic practitioner team"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Google rating badge */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between mt-4">
                <div>
                  <span className="font-display text-xl font-extrabold block leading-none">5.0</span>
                  <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-slate-400">Google Rating</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-sans text-[9px] text-sky-200 font-semibold mt-1">based on 230+ reviews</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
