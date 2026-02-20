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
  Sparkles
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

const testimonials = [
  {
    name: 'Chidi Okafor',
    role: 'Business Executive',
    content: 'The best laundry service in Lagos. They are punctual and my suits always come back looking brand new.',
    rating: 5
  },
  {
    name: 'Amaka Peters',
    role: 'Fashion Designer',
    content: 'I trust Adoration with my most delicate fabrics. Their attention to detail is unmatched.',
    rating: 5
  },
  {
    name: 'Tunde Williams',
    role: 'Busy Parent',
    content: 'The wash and fold service has saved me so much time. Highly recommended for busy families!',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              #1 Premium Laundry in Nigeria
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Premium Laundry & <span className="text-primary">Dry Cleaning</span> Services in Nigeria
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Experience the ultimate garment care. We pick up, clean, and deliver your clothes with professional precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="btn-primary text-center flex items-center justify-center gap-2">
                Book Pickup <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary text-center">
                View Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-medium">Trusted by 2,000+ happy customers</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/laundry-hero/800/1000"
                alt="Professional Laundry Service"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Quality Guaranteed</p>
                  <p className="font-bold text-slate-900">100% Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Premium Services</h2>
            <p className="text-slate-600">We offer a wide range of laundry and dry cleaning services tailored to your specific needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesPreview.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="card-hover p-8"
              >
                <div className="mb-6 inline-block p-4 bg-primary/5 rounded-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.link} className="text-primary font-bold text-sm flex items-center gap-2 group">
                  Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">How It Works</h2>
            <p className="text-slate-600">Getting your laundry done has never been easier. Just three simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  {step.icon}
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-8">Why Choose Adoration Laundry?</h2>
            <div className="space-y-6">
              {[
                { title: 'Expert Garment Care', desc: 'We use premium detergents and advanced cleaning techniques.' },
                { title: 'Eco-Friendly Cleaning', desc: 'Our processes are safe for your clothes and the environment.' },
                { title: 'Fast Turnaround', desc: 'Get your clothes back fresh and clean within 24-48 hours.' },
                { title: 'Affordable Pricing', desc: 'Premium quality service at competitive rates in Nigeria.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/about" className="btn-primary">
                About Our Company
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/l1/400/500" alt="Laundry" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/l2/400/300" alt="Laundry" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/l3/400/300" alt="Laundry" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/l4/400/500" alt="Laundry" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-slate-600">Don't just take our word for it. Here is what our happy customers have to say.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-accent mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/${t.name}/100/100`} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to experience the best laundry service?</h2>
              <p className="text-blue-100 mb-10 text-lg">
                Join thousands of satisfied customers in Nigeria. Book your first pickup today and get 10% off!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book" className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                  Book Your Pickup Now
                </Link>
                <Link to="/contact" className="bg-primary-dark text-white hover:bg-slate-900 px-8 py-4 rounded-xl font-bold transition-all border border-white/20 active:scale-95">
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
