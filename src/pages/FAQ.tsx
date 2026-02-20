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
      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our laundry and dry cleaning services.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-2xl border transition-all duration-300 ${activeIndex === i ? 'border-primary bg-blue-50/30' : 'border-slate-100 bg-white'}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold transition-colors ${activeIndex === i ? 'text-primary' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact Support CTA */}
          <div className="mt-16 p-10 bg-slate-900 rounded-[2.5rem] text-center text-white">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Still have questions?</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              If you couldn't find the answer you're looking for, please feel free to contact our customer support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+2348001234567" className="btn-primary">
                Call Support
              </a>
              <a href="mailto:support@adorationlaundry.com" className="btn-secondary !border-slate-700 !text-white hover:!bg-slate-800">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
