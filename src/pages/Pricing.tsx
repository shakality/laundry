import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Wash & Fold',
    price: '₦1,200',
    unit: 'per kg',
    description: 'Perfect for everyday casual wear, towels, and bedsheets.',
    features: [
      'Premium detergent wash',
      'Fabric softener included',
      'Tumble dry',
      'Professional folding',
      'Standard 48h delivery'
    ],
    cta: 'Book Now',
    popular: false
  },
  {
    name: 'Dry Cleaning',
    price: '₦2,500',
    unit: 'starting per item',
    description: 'Best for suits, dresses, and delicate professional attire.',
    features: [
      'Eco-friendly dry cleaning',
      'Expert stain removal',
      'Hand-finished pressing',
      'Hanger packaging',
      'Standard 48h delivery'
    ],
    cta: 'Book Now',
    popular: true
  },
  {
    name: 'Corporate Plan',
    price: 'Custom',
    unit: 'monthly billing',
    description: 'Tailored solutions for businesses and high-volume needs.',
    features: [
      'Bulk volume discounts',
      'Priority processing',
      'Scheduled pickups',
      'Monthly invoicing',
      'Dedicated support'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const itemPricing = [
  { category: 'Tops', items: [
    { name: 'Shirt (Wash & Iron)', price: '₦800' },
    { name: 'T-Shirt', price: '₦500' },
    { name: 'Blouse', price: '₦1,000' },
    { name: 'Suit Jacket', price: '₦2,500' }
  ]},
  { category: 'Bottoms', items: [
    { name: 'Trousers', price: '₦1,000' },
    { name: 'Jeans', price: '₦800' },
    { name: 'Skirt', price: '₦1,200' },
    { name: 'Shorts', price: '₦600' }
  ]},
  { category: 'Traditional', items: [
    { name: 'Agbada (3-piece)', price: '₦5,000' },
    { name: 'Senator Wear', price: '₦2,500' },
    { name: 'Native Top & Bottom', price: '₦2,000' },
    { name: 'Wrapper & Blouse', price: '₦3,000' }
  ]}
];

export default function Pricing() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-black py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/pricing-bg/1200/800" alt="Pricing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tighter"
          >
            SIMPLE PRICING.<br />
            <span className="text-primary">NO SURPRISES.</span>
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            High-quality laundry services shouldn't break the bank. Choose the plan that fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-[3rem] border-2 transition-all duration-500 hover:shadow-2xl ${plan.popular ? 'border-primary bg-white' : 'border-slate-50 bg-slate-50/50'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    Most Popular
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-display font-black text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">{plan.unit}</span>
                  </div>
                  <p className="mt-6 text-slate-500 text-sm leading-relaxed font-medium">
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-4 text-sm text-slate-700 font-medium">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={plan.name === 'Corporate Plan' ? '/contact' : '/book'} 
                  className={`w-full block text-center py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/20' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'}`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Item Pricing */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Full Catalog</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">ITEMIZED PRICING</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {itemPricing.map((cat, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="text-xl font-black mb-8 text-primary uppercase tracking-tight border-b border-slate-50 pb-6">{cat.category}</h3>
                <div className="space-y-6">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 font-medium">{item.name}</span>
                      <span className="font-black text-slate-900 tracking-tight">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-8 bg-black rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="shrink-0 w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
              <Info size={32} />
            </div>
            <div className="text-sm text-slate-400 leading-relaxed text-center md:text-left">
              <p className="font-black text-white uppercase tracking-widest mb-2">Important Note:</p>
              Prices listed are estimates and may vary based on fabric type, degree of soiling, or special treatment requirements. Express same-day service attracts a 50% surcharge. Pickup and delivery is free for orders above ₦10,000.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
