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
      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            High-quality laundry services shouldn't break the bank. Choose the plan that fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-[2.5rem] border ${plan.popular ? 'border-primary shadow-xl ring-4 ring-primary/5' : 'border-slate-100 shadow-sm'} bg-white`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 text-sm">{plan.unit}</span>
                  </div>
                  <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <Check size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={plan.name === 'Corporate Plan' ? '/contact' : '/book'} 
                  className={`w-full block text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Itemized Pricing</h2>
            <p className="text-slate-600">Need specific items cleaned? Here is a breakdown of our standard rates.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {itemPricing.map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold mb-6 text-primary border-b border-slate-50 pb-4">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">{item.name}</span>
                      <span className="font-bold text-slate-900">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4 max-w-3xl mx-auto">
            <Info className="text-primary shrink-0 mt-0.5" size={20} />
            <div className="text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-900 mb-1">Important Note:</p>
              Prices listed are estimates and may vary based on fabric type, degree of soiling, or special treatment requirements. Express same-day service attracts a 50% surcharge. Pickup and delivery is free for orders above ₦10,000.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
