import { motion } from 'motion/react';
import { 
  Shirt, 
  WashingMachine as Laundry, 
  Sparkles, 
  Briefcase, 
  Zap, 
  Droplets,
  CheckCircle2
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
      <section className="bg-primary py-20 text-white">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive garment care solutions designed for your lifestyle and business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What's included:</p>
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-secondary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-primary font-bold">{service.priceHint}</span>
                  <Link to="/book" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    Book Now
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
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-100 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Special Care for Special Items</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We understand that some items require extra attention. Whether it's a wedding dress, heirloom quilt, or designer leather jacket, our specialists have the expertise to handle them safely.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="font-bold text-slate-900 mb-1">Wedding Gowns</p>
                  <p className="text-xs text-slate-500">Cleaning & Preservation</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="font-bold text-slate-900 mb-1">Leather & Suede</p>
                  <p className="text-xs text-slate-500">Specialized Treatment</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="font-bold text-slate-900 mb-1">Curtains & Rugs</p>
                  <p className="text-xs text-slate-500">Deep Cleaning</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="font-bold text-slate-900 mb-1">Bedding</p>
                  <p className="text-xs text-slate-500">Hygienic Wash</p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">
                Inquire About Special Items
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/special-care/800/800" 
                alt="Special Item Care" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
