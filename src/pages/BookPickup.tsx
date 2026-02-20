import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Phone, User, Mail, ClipboardList, CheckCircle, Truck, ShieldCheck } from 'lucide-react';

export default function BookPickup() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-slate-50">
        <div className="container-custom max-w-lg text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100"
          >
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={48} />
            </div>
            <h1 className="text-3xl font-display font-black mb-4 uppercase tracking-tight">Booking Successful!</h1>
            <p className="text-slate-500 mb-8 font-medium">
              Thank you for choosing Adoration Laundry. We've received your pickup request. Our representative will contact you shortly to confirm the details.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="btn-primary w-full"
            >
              Book Another Pickup
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="container-custom py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Quick Booking</span>
              <h1 className="text-5xl font-display font-black mb-6 uppercase tracking-tighter leading-none">BOOK A PICKUP</h1>
              <p className="text-slate-500 leading-relaxed font-medium">
                Schedule your laundry pickup in less than a minute. We'll handle the rest with professional care!
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: <Calendar className="text-primary" />, title: 'Flexible Scheduling', desc: 'Choose a date and time that works for you.' },
                { icon: <Truck className="text-primary" />, title: 'Free Pickup & Delivery', desc: 'On all orders above ₦10,000 in Lagos.' },
                { icon: <ShieldCheck className="text-primary" />, title: 'Safe Handling', desc: 'Your garments are insured and handled with care.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-sm mb-1 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-black rounded-[2.5rem] text-white">
              <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">Need help booking?</p>
              <p className="text-xl font-black mb-6 uppercase tracking-tight">Call us directly</p>
              <a href="tel:+2348001234567" className="flex items-center gap-3 text-3xl font-display font-black text-primary hover:underline tracking-tighter">
                <Phone size={28} /> +234 800 123 4567
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <User size={14} className="text-primary" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Phone size={14} className="text-primary" /> Phone Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+234 800 000 0000"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={14} className="text-primary" /> Email Address
                  </label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MapPin size={14} className="text-primary" /> Pickup Address
                  </label>
                  <textarea 
                    required
                    placeholder="Enter your full address in Nigeria"
                    rows={3}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none font-bold"
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <ClipboardList size={14} className="text-primary" /> Service Type
                    </label>
                    <select className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold appearance-none">
                      <option>Wash & Fold</option>
                      <option>Dry Cleaning</option>
                      <option>Ironing Only</option>
                      <option>Corporate Laundry</option>
                      <option>Traditional Wear Care</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Calendar size={14} className="text-primary" /> Preferred Date
                    </label>
                    <input 
                      required
                      type="date" 
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Special Instructions (Optional)</label>
                  <textarea 
                    placeholder="Any specific care instructions or landmark for delivery?"
                    rows={2}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none font-bold"
                  ></textarea>
                </div>

                <button 
                  disabled={isLoading}
                  type="submit" 
                  className="btn-primary w-full py-6 text-xl flex items-center justify-center gap-3 disabled:opacity-70 uppercase tracking-widest"
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Confirm Pickup'
                  )}
                </button>
                <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Secure booking powered by Adoration Garment Care.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
