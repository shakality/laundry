import { motion } from 'motion/react';
import { 
  Shirt, 
  WashingMachine as Laundry, 
  Sparkles, 
  Briefcase, 
  Zap, 
  Droplets,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Dry Cleaning',
    description: 'Our professional dry cleaning service uses advanced technology to clean delicate fabrics that cannot be washed with water. Perfect for suits, silk dresses, and wool coats.',
    icon: <Shirt size={40} />,
    priceHint: 'From ₦2,500 per item',
    features: ['Eco-friendly solvents', 'Stain removal expertise', 'Hand-finished pressing', 'Protective packaging']
  },
  {
    title: 'Wash & Fold',
    description: 'The ultimate convenience for your everyday laundry. We wash, dry, and fold your clothes so they are ready to go straight into your drawer.',
    icon: <Laundry size={40} />,
    priceHint: 'From ₦1,200 per kg',
    features: ['Premium detergents', 'Color sorting', 'Temperature control', 'Neat folding']
  },
  {
    title: 'Ironing Services',
    description: 'Don\'t have time to iron? Let us handle it. We provide professional pressing for all types of garments to ensure you always look your best.',
    icon: <Sparkles size={40} />,
    priceHint: 'From ₦500 per item',
    features: ['Steam pressing', 'Crisp finish', 'Hanger or folded options', 'Crease-free delivery']
  },
  {
    title: 'Corporate Laundry',
    description: 'Tailored laundry solutions for businesses, hotels, and restaurants. We handle large volumes with consistent quality and reliable scheduling.',
    icon: <Briefcase size={40} />,
    priceHint: 'Custom quotes available',
    features: ['Bulk processing', 'Scheduled pickups', 'Invoicing options', 'Dedicated account manager']
  },
  {
    title: 'Express Same-Day Service',
    description: 'In a hurry? Our express service ensures your clothes are cleaned and delivered back to you on the same day.',
    icon: <Zap size={40} />,
    priceHint: '+50% service fee',
    features: ['Priority processing', '6-hour turnaround', 'Real-time tracking', 'Direct delivery']
  },
  {
    title: 'Stain Removal',
    description: 'Tough stains? Our experts use specialized treatments to remove even the most stubborn marks without damaging the fabric.',
    icon: <Droplets size={40} />,
    priceHint: 'Based on assessment',
    features: ['Expert analysis', 'Safe chemicals', 'Multiple treatments', 'Fabric protection']
  }
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-black py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/services-bg/1200/800" alt="Services" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6 uppercase tracking-tighter"
          >
            OUR EXPERTISE.<br />
            <span className="text-primary">YOUR GARMENTS.</span>
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Comprehensive garment care solutions designed for your lifestyle and business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group"
              >
                <div className="w-20 h-20 bg-primary/5 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow font-medium">
                  {service.description}
                </p>
                <div className="mb-8">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-slate-900 font-black tracking-tight">{service.priceHint}</span>
                  <Link to="/book" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-dark transition-colors flex items-center gap-2">
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Care Banner */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-sm border border-slate-100 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Specialized Care</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-none">SPECIAL CARE FOR SPECIAL ITEMS</h2>
              <p className="text-slate-500 mb-10 leading-relaxed font-medium text-lg">
                We understand that some items require extra attention. Whether it's a wedding dress, heirloom quilt, or designer leather jacket, our specialists have the expertise to handle them safely.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="font-black text-slate-900 mb-1 uppercase tracking-tight">Wedding Gowns</p>
                  <p className="text-xs text-slate-500 font-medium">Cleaning & Preservation</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="font-black text-slate-900 mb-1 uppercase tracking-tight">Leather & Suede</p>
                  <p className="text-xs text-slate-500 font-medium">Specialized Treatment</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="font-black text-slate-900 mb-1 uppercase tracking-tight">Curtains & Rugs</p>
                  <p className="text-xs text-slate-500 font-medium">Deep Cleaning</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="font-black text-slate-900 mb-1 uppercase tracking-tight">Bedding</p>
                  <p className="text-xs text-slate-500 font-medium">Hygienic Wash</p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">
                Inquire About Special Items
              </Link>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/special-care/800/800" 
                alt="Special Item Care" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
