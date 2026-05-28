import { MapPin, Heart, Calendar, ArrowRight, Star, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import heroImgSrc from "../assets/images/dentist_hero_1779979666708.png";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-gradient-to-b from-blue-50/50 via-sky-50/20 to-white overflow-hidden">
      {/* Background Decorative Ripples */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/60 shadow-sm animate-fade-in" id="hero-badge-pin">
              <MapPin className="w-4 h-4 text-sky-500 animate-bounce" />
              <span className="font-sans text-xs font-bold text-blue-900 tracking-wide">
                Proudly Serving San Diego & Surrounding Areas
              </span>
            </div>

            {/* Main Premium Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] max-w-xl">
              Your Healthiest, <br />
              Brightest <span className="relative inline-block text-blue-600 bg-clip-text">Smile</span> <br />
              Starts Here
            </h1>

            {/* Heart Sub-title Hook */}
            <div className="flex items-center gap-3 py-1" id="hero-subline">
              <div className="p-1.5 bg-rose-50 border border-rose-100 rounded-lg text-rose-500">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <p className="font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Gentle Care You Can Trust.
              </p>
            </div>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              We help you smile with confidence using advanced, painless technology and a caring, friendly touch. Experience dentistry designed around your comfort.
            </p>

            {/* Patient Special Card */}
            <div className="max-w-md p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 shadow-sm space-y-4" id="hero-offer-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm border border-blue-100 mt-1">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-blue-100 text-[10px] font-extrabold text-blue-800 uppercase tracking-wider mb-1">
                    New Patient Special
                  </span>
                  <h3 className="font-display text-xl font-black text-slate-800 leading-snug">
                    FREE Dental Consultation
                  </h3>
                  <p className="font-sans text-xs font-semibold text-slate-500">
                    Limited Time Offer! Schedule your consult today.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA and Trust indicators */}
            <div className="space-y-4 pt-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-between w-full max-w-md p-4 bg-blue-600 hover:bg-blue-700 text-white font-sans font-extrabold text-base rounded-2xl shadow-md shadow-blue-500/10 hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
                id="hero-btn-book-large"
              >
                <span>Book My Dental Consultation</span>
                <ArrowRight className="w-5 h-5 text-sky-200" />
              </a>

              {/* Badges line */}
              <div className="flex flex-wrap gap-4 items-center pl-1 font-sans font-bold text-slate-500 text-[11px] uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  No Pressure
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  No Judgment
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Just Honest Care
                </span>
              </div>
            </div>

          </div>

          {/* Right Column Dentist & Trust Card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Elegant Outer Rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/40 via-transparent to-blue-200/40 rounded-full scale-105 filter blur-sm pointer-events-none" />

            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Main Dentist Image inside curved premium container */}
              <div className="relative rounded-[40px] overflow-hidden border-[12px] border-white shadow-xl aspect-square w-full bg-slate-100">
                <img
                  src="{heroImgSrc}"
                  alt="Dr. Alexander Chen, lead dentist at BlueWave Dental Clinic"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Star Rating Badge */}
              <div className="absolute -bottom-6 -left-6 sm:left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex flex-col items-center gap-1.5 w-44 hover:scale-105 transition-transform" id="hero-badge-floating">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-lg border border-yellow-200">
                  <span className="text-sm font-extrabold text-yellow-700">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-display font-black text-slate-800 text-sm">500+ Happy Patients</p>
                  <p className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider">Top Rated Clinic</p>
                </div>
                
                {/* Avatars Stack */}
                <div className="flex -space-x-2 mt-1">
                  <img
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150"
                    alt="Patient Reviewer"
                  />
                  <img
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150"
                    alt="Patient Reviewer"
                  />
                  <img
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
                    alt="Patient Reviewer"
                  />
                  <img
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150"
                    alt="Patient Reviewer"
                  />
                </div>
              </div>
              
              {/* Badge outside photo container, anchoring top-right border */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-blue-600/95 backdrop-blur-sm text-white rounded-xl px-4 py-2 flex items-center gap-1.5 text-xs font-black border border-blue-500 shadow-lg transition-transform hover:scale-105">
                <Sparkles className="w-3.5 h-3.5 text-sky-200 animate-pulse" />
                <span>Dr. Alex Chen, DDS</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
