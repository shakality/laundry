import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does delivery take?',
    answer: 'Our standard turnaround time is 48 hours. However, we also offer express same-day service for orders placed before 10:00 AM, and next-day service for orders placed later in the day.'
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes, we offer express same-day service for most items. This service attracts a 50% surcharge on the standard price. Please ensure your pickup is scheduled before 10:00 AM to qualify for same-day delivery.'
  },
  {
    question: 'What areas do you cover?',
    answer: 'Currently, we cover most major areas in Lagos, including Victoria Island, Ikoyi, Lekki (Phase 1 & 2), Ikeja, and Surulere. We are constantly expanding our reach to other parts of Nigeria.'
  },
  {
    question: 'How are clothes handled?',
    answer: 'Your clothes are handled with the utmost care. We sort items by color and fabric type, use premium eco-friendly detergents, and follow specific care label instructions. Every item undergoes a quality check before being packed for delivery.'
  },
  {
    question: 'What happens if an item is damaged?',
    answer: 'While we take every precaution, in the rare event of damage, we have a comprehensive insurance policy. We will either repair the item, replace it, or provide compensation based on the item\'s value and our terms of service.'
  },
  {
    question: 'Is there a minimum order value?',
    answer: 'There is no minimum order value for drop-offs at our physical locations. For pickup and delivery services, we have a minimum order value of ₦5,000. Orders above ₦10,000 enjoy free delivery.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://picsum.photos/seed/faq-hero/1920/1080" alt="FAQ" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6"
          >
            FAQs
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Everything you need to know about our laundry and dry cleaning services.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${activeIndex === i ? 'border-primary bg-blue-50/20' : 'border-slate-100 bg-white shadow-sm'}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className={`text-xl font-black uppercase tracking-tighter transition-colors ${activeIndex === i ? 'text-primary' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${activeIndex === i ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-slate-500 text-base font-medium leading-relaxed border-t border-slate-100/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact Support CTA */}
          <div className="mt-24 p-12 md:p-20 bg-slate-900 rounded-[4rem] text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="https://picsum.photos/seed/faq-cta/800/800" alt="CTA" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary/20 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <HelpCircle size={40} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Still have questions?</h3>
              <p className="text-white/60 mb-10 max-w-md mx-auto font-medium text-lg">
                If you couldn't find the answer you're looking for, please feel free to contact our customer support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+2348001234567" className="btn-primary">
                  Call Support
                </a>
                <a href="mailto:support@adorationlaundry.com" className="btn-secondary">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
    </div>
  );
}
