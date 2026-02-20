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
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={48} />
            </div>
            <h1 className="text-3xl font-display font-bold mb-4">Booking Successful!</h1>
            <p className="text-slate-600 mb-8">
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
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-display font-bold mb-6">Book a Pickup</h1>
              <p className="text-slate-600 leading-relaxed">
                Schedule your laundry pickup in less than a minute. We'll handle the rest!
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: <Calendar className="text-primary" />, title: 'Flexible Scheduling', desc: 'Choose a date and time that works for you.' },
                { icon: <Truck className="text-primary" />, title: 'Free Pickup & Delivery', desc: 'On all orders above ₦10,000 in Lagos.' },
                { icon: <ShieldCheck className="text-primary" />, title: 'Safe Handling', desc: 'Your garments are insured and handled with care.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-primary rounded-3xl text-white">
              <p className="text-sm font-medium opacity-80 mb-2">Need help booking?</p>
              <p className="text-xl font-bold mb-4">Call us directly</p>
              <a href="tel:+2348001234567" className="flex items-center gap-2 text-2xl font-display font-bold hover:underline">
                <Phone size={24} /> +234 800 123 4567
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <User size={16} className="text-slate-400" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Phone size={16} className="text-slate-400" /> Phone Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Mail size={16} className="text-slate-400" /> Email Address
                  </label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MapPin size={16} className="text-slate-400" /> Pickup Address
                  </label>
                  <textarea 
                    required
                    placeholder="Enter your full address in Nigeria"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <ClipboardList size={16} className="text-slate-400" /> Service Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-white">
                      <option>Wash & Fold</option>
                      <option>Dry Cleaning</option>
                      <option>Ironing Only</option>
                      <option>Corporate Laundry</option>
                      <option>Traditional Wear Care</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Calendar size={16} className="text-slate-400" /> Preferred Date
                    </label>
                    <input 
                      required
                      type="date" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Special Instructions (Optional)</label>
                  <textarea 
                    placeholder="Any specific care instructions or landmark for delivery?"
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={isLoading}
                  type="submit" 
                  className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Confirm Pickup Request'
                  )}
                </button>
                <p className="text-center text-xs text-slate-400">
                  By clicking confirm, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
