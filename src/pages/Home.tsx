import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  WashingMachine as Laundry,
  Shirt,
  Sparkles,
  Apple,
  Play,
  ArrowRight as ArrowIcon
} from 'lucide-react';

const servicesPreview = [
  {
    title: 'Dry Cleaning',
    description: 'Specialized cleaning for delicate fabrics and formal wear.',
    icon: <Shirt className="text-primary" size={32} />,
    link: '/services'
  },
  {
    title: 'Wash & Fold',
    description: 'Everyday laundry washed, dried, and perfectly folded.',
    icon: <Laundry className="text-primary" size={32} />,
    link: '/services'
  },
  {
    title: 'Ironing Services',
    description: 'Professional pressing to keep you looking sharp.',
    icon: <Sparkles className="text-primary" size={32} />,
    link: '/services'
  }
];

const steps = [
  {
    title: 'Book Online',
    description: 'Schedule your pickup through our website or call us.',
    icon: <Clock size={24} />
  },
  {
    title: 'We Pickup',
    description: 'Our team collects your laundry from your doorstep.',
    icon: <Truck size={24} />
  },
  {
    title: 'Clean & Deliver',
    description: 'We clean, pack, and deliver back within 24-48 hours.',
    icon: <CheckCircle2 size={24} />
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/laundry-machines/1920/1080" 
            alt="Laundry Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        </div>

        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase">
              WE'LL TAKE THE LAUNDRY.<br />
              <span className="text-primary">YOU TAKE THE TIME.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl font-medium">
              Adoration picks up, cleans, and delivers your laundry and dry cleaning.
            </p>

            {/* Input Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-2xl md:rounded-full p-2 md:p-1.5 max-w-2xl shadow-2xl mb-12">
              <div className="flex-1 flex items-center px-6 py-4 md:py-0 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Pickup</span>
                  <span className="text-slate-900 font-bold">Tonight</span>
                </div>
              </div>
              <div className="flex-[1.5] flex items-center px-6 py-4 md:py-0">
                <div className="flex flex-col w-full">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Where</span>
                  <input 
                    type="text" 
                    placeholder="Add address" 
                    className="bg-transparent border-none p-0 focus:ring-0 text-slate-900 font-bold placeholder:text-slate-300 w-full"
                  />
                </div>
              </div>
              <Link to="/book" className="bg-primary hover:bg-primary-dark text-white w-full md:w-14 h-14 rounded-xl md:rounded-full flex items-center justify-center transition-all shadow-lg shadow-primary/30 group">
                <ArrowIcon size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Ratings & Apps */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                    <Apple size={20} fill="currentColor" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                    <Star size={18} fill="currentColor" />
                  </div>
                </div>
                <div className="pr-4">
                  <div className="flex text-primary">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] text-white font-black uppercase tracking-widest">6,000+ reviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Our Services</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                PREMIUM CARE FOR<br />EVERY GARMENT.
              </h2>
            </div>
            <Link to="/services" className="text-primary font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {servicesPreview.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15 }}
                className="card-hover p-10 group"
              >
                <div className="mb-8 inline-block p-5 bg-primary/5 rounded-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
                <Link to={service.link} className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500">
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Simple Process</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">HOW IT WORKS</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white text-primary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-200 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative">
                  {step.icon}
                  <span className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-sm">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://picsum.photos/seed/laundry-cta/1200/800" 
                alt="Laundry" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-none">
                READY TO SAVE<br />YOUR TIME?
              </h2>
              <p className="text-slate-400 mb-12 text-lg md:text-xl font-medium">
                Join thousands of satisfied customers in Nigeria. Book your first pickup today and experience the Adoration difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/book" className="btn-primary text-xl px-12 py-6">
                  Book Your Pickup
                </Link>
                <Link to="/contact" className="btn-secondary text-xl px-12 py-6">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
