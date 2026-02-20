import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-slate-500 text-sm mb-4">Available Mon-Sat, 8am-6pm</p>
                <a href="tel:+2348001234567" className="text-primary font-bold hover:underline">+234 800 123 4567</a>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                <p className="text-slate-500 text-sm mb-4">Quick chat for support</p>
                <a href="https://wa.me/2348001234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition-colors">
                  Chat Now
                </a>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-slate-500 text-sm mb-4">We'll respond within 24 hours</p>
                <a href="mailto:info@adorationlaundry.com" className="text-primary font-bold hover:underline">info@adorationlaundry.com</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h2 className="text-3xl font-display font-bold mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input 
                      type="text" 
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      placeholder="Write your message here..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
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
