import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-black py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/about-bg/1200/800" alt="About" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6 uppercase tracking-tighter"
          >
            OUR STORY.<br />
            <span className="text-primary">OUR PASSION.</span>
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Providing premium garment care and laundry solutions across Nigeria since 2018.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about-story/800/800" 
              alt="Our Story" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-[2rem] shadow-2xl hidden md:block">
              <p className="text-6xl font-black mb-1 tracking-tighter">8+</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Years of Excellence</p>
            </div>
          </div>
          <div>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-tight">WE REINVENTED THE WAY YOU DO LAUNDRY.</h2>
            <div className="space-y-6 text-slate-500 leading-relaxed font-medium">
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
        <div className="container-custom grid md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 group hover:border-primary transition-all duration-500">
            <div className="w-20 h-20 bg-primary/5 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Target size={40} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              To provide exceptional laundry and dry cleaning services that exceed customer expectations through innovation, quality, and a commitment to convenience.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 group hover:border-primary transition-all duration-500">
            <div className="w-20 h-20 bg-primary/5 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Eye size={40} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Our Vision</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              To be the leading garment care provider in West Africa, recognized for our excellence, reliability, and contribution to a cleaner, more organized lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Our DNA</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">CORE VALUES</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Heart className="text-primary" />, title: 'Care', desc: 'We treat every garment as if it were our own.' },
              { icon: <ShieldCheck className="text-primary" />, title: 'Integrity', desc: 'Honesty and transparency in all our dealings.' },
              { icon: <Award className="text-primary" />, title: 'Quality', desc: 'Never compromising on the standard of our work.' },
              { icon: <Users className="text-primary" />, title: 'Customer First', desc: 'Your satisfaction is our ultimate priority.' }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {value.icon}
                </div>
                <h4 className="font-black mb-3 uppercase tracking-tight">{value.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
