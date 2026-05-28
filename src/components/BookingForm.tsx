import { useState, FormEvent, ChangeEvent } from 'react';
import { Sparkles, Calendar, Clock, Phone, Mail, User, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '10:00',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all contact fields.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 md:py-24 bg-gradient-to-b from-white to-sky-50/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main curved gradient block */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 rounded-[40px] shadow-2xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden" id="booking-container">
          
          {/* Decorative Wave Lines of the Wave Clinic */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -ml-44 -mb-44" />

          <div className="grid lg:grid-cols-12 gap-12 relative z-10 items-center">
            
            {/* Left Content Card Info */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Outer logo/branding mark */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Sparkles className="w-8 h-8 text-sky-300" />
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl sm:text-4.5xl font-black text-white tracking-tight leading-[1.1]">
                  Start Your Smile <br />
                  Transformation <span className="text-sky-300">Today</span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-md">
                  Book your New Patient Consultation and take the first step toward a healthier, more confident you.
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-4 pt-2">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-sm text-white">Easy Online Booking</h4>
                    <p className="font-sans text-xs text-sky-200">Takes less than 1 minute to submit your request.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-sm text-white">Flexible Scheduling</h4>
                    <p className="font-sans text-xs text-sky-200">Convenient morning, evening, and select weekend slots.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-sm text-white">Limited-Time Offer</h4>
                    <p className="font-sans text-xs text-sky-200">Free baseline custom treatment plan included.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Booking Card Form */}
            <div className="lg:col-span-6">
              
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-xl space-y-5 border border-slate-100"
                  id="consultation-booking-form"
                >
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-black text-slate-900">
                      Book Your Free Consultation
                    </h3>
                    <p className="font-sans text-xs text-slate-500">
                      Fill out the details below and we will contact you immediately.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Full name input */}
                    <div className="space-y-1">
                      <label htmlFor="name-input" className="font-sans text-xs font-bold text-slate-500 uppercase tracking-wider block">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          id="name-input"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Dr. John Doe"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-slate-400/80"
                        />
                      </div>
                    </div>

                    {/* Contact row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-1">
                        <label htmlFor="phone-input" className="font-sans text-xs font-bold text-slate-500 uppercase tracking-wider block">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            id="phone-input"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(619) 555-0199"
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-slate-400/80"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label htmlFor="email-input" className="font-sans text-xs font-bold text-slate-500 uppercase tracking-wider block">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            id="email-input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-slate-400/80"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Booking time row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Date */}
                      <div className="space-y-1">
                        <label htmlFor="date-input" className="font-sans text-xs font-bold text-slate-500 uppercase tracking-wider block">Preferred Date</label>
                        <input
                          type="date"
                          id="date-input"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-700"
                        />
                      </div>

                      {/* Time slot picker */}
                      <div className="space-y-1">
                        <label htmlFor="time-input" className="font-sans text-xs font-bold text-slate-500 uppercase tracking-wider block">Preferred Time</label>
                        <select
                          id="time-input"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-700"
                        >
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="13:00">01:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-sans font-extrabold text-sm rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                    id="submit-booking-btn"
                  >
                    <span>Book My Dental Consultation</span>
                    <ArrowRight className="w-4 h-4 text-sky-200" />
                  </button>

                  <p className="font-sans text-[11px] font-semibold text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                    <span className="text-emerald-500">🔒</span>
                    Your privacy and diagnostic inputs are 100% secure.
                  </p>
                </form>
              ) : (
                // Beautiful Confirmation success frame
                <div
                  className="bg-white rounded-3xl p-8 sm:p-10 text-slate-800 shadow-xl space-y-6 border border-slate-100 text-center relative overflow-hidden animate-zoom-in"
                  id="booking-confirmation-box"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-400 text-emerald-500 mb-2">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-black text-slate-900">
                      Request Confirmed!
                    </h3>
                    <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                      Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. We have saved your spot for <span className="font-bold text-blue-600">{formData.date}</span> at <span className="font-bold text-blue-600">{formData.time}</span>. Our representative will text you shortly to verify insurance.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-3 font-sans text-xs max-w-xs mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold uppercase tracking-wider">Patient Name</span>
                      <span className="font-bold text-slate-800">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold uppercase tracking-wider">Phone</span>
                      <span className="font-bold text-slate-800">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold uppercase tracking-wider">Preferred Consult</span>
                      <span className="font-bold text-slate-800">{formData.date} - {formData.time}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', date: '', time: '10:00' });
                    }}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans font-bold text-xs rounded-xl transition-colors"
                  >
                    Schedule Another Consultation
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
