import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, ShieldCheck } from 'lucide-react';

export default function About() {
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
            About Adoration Laundry
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing premium garment care and laundry solutions across Nigeria since 2018.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about-story/800/800" 
              alt="Our Story" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">8+</p>
              <p className="text-sm font-medium opacity-80">Years of Excellence</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Adoration Laundry and Dry Cleaning Services was founded with a simple mission: to provide Nigerians with a laundry service that combines premium quality with ultimate convenience.
              </p>
              <p>
                What started as a small local operation in Lagos has grown into one of the most trusted names in garment care. We recognized that in today's fast-paced world, people need more than just clean clothes—they need time.
              </p>
              <p>
                By integrating modern technology with traditional craftsmanship, we've created a seamless experience that allows our clients to focus on what matters most while we handle their laundry with the utmost care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide exceptional laundry and dry cleaning services that exceed customer expectations through innovation, quality, and a commitment to convenience.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the leading garment care provider in West Africa, recognized for our excellence, reliability, and contribution to a cleaner, more organized lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do at Adoration Laundry.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-red-500" />, title: 'Care', desc: 'We treat every garment as if it were our own.' },
              { icon: <ShieldCheck className="text-green-500" />, title: 'Integrity', desc: 'Honesty and transparency in all our dealings.' },
              { icon: <Award className="text-amber-500" />, title: 'Quality', desc: 'Never compromising on the standard of our work.' },
              { icon: <Users className="text-blue-500" />, title: 'Customer First', desc: 'Your satisfaction is our ultimate priority.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h4 className="font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
