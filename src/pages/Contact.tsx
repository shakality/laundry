import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://picsum.photos/seed/contact-hero/1920/1080" alt="Contact" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-8">
                  <Phone size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Call Us</h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">Available Mon-Sat, 8am-6pm</p>
                <a href="tel:+2348001234567" className="text-2xl font-black text-primary hover:underline">+234 800 123 4567</a>
              </div>

              <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">WhatsApp</h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">Quick chat for support</p>
                <a href="https://wa.me/2348001234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-500/20">
                  Chat Now
                </a>
              </div>

              <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Email Us</h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">We'll respond within 24 hours</p>
                <a href="mailto:info@adorationlaundry.com" className="text-xl font-black text-primary hover:underline">info@adorationlaundry.com</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-20 rounded-[4rem] shadow-2xl border border-slate-100">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">Send us a Message</h2>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all font-bold"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Subject</label>
                    <input 
                      type="text" 
                      placeholder="How can we help?"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                    <textarea 
                      placeholder="Write your message here..."
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all resize-none font-bold"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Visit Our Main Office</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-slate-100">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600 text-sm">123 Adoration Way, Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-slate-100">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-slate-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] bg-slate-200 rounded-[2.5rem] overflow-hidden relative shadow-inner">
              {/* Placeholder for Google Map */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
                <MapPin size={48} />
                <p className="font-medium">Google Maps Embed Section</p>
                <p className="text-xs">Victoria Island, Lagos, Nigeria</p>
              </div>
              {/* In a real app, you'd use an iframe here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728551469032!2d3.424482314770154!3d6.42805559534932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e4953f%3A0x8cd93b273a6c0f31!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1650000000000!5m2!1sen!2sng" 
                className="w-full h-full border-0 grayscale opacity-80"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
