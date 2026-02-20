import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How to Care for Your Clothes Properly',
    excerpt: 'Learn the essential tips and tricks to make your favorite garments last longer and look fresh.',
    author: 'Adoration Team',
    date: 'May 15, 2026',
    category: 'Clothing Care',
    image: 'https://picsum.photos/seed/blog1/800/600'
  },
  {
    id: 2,
    title: 'Why Professional Dry Cleaning Matters',
    excerpt: 'Discover the science behind dry cleaning and why some fabrics require expert handling.',
    author: 'Expert Cleaner',
    date: 'May 10, 2026',
    category: 'Expert Tips',
    image: 'https://picsum.photos/seed/blog2/800/600'
  },
  {
    id: 3,
    title: 'Laundry Tips for Busy Professionals',
    excerpt: 'Struggling to balance work and chores? These laundry hacks will save you hours every week.',
    author: 'Lifestyle Coach',
    date: 'May 05, 2026',
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/blog3/800/600'
  }
];

export default function Blog() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://picsum.photos/seed/blog-hero/1920/1080" alt="Blog" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6"
          >
            Our Blog
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Insights, tips, and news from the world of professional garment care.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Main Feed */}
            <div className="lg:w-2/3 space-y-20">
              {blogPosts.map((post, i) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-[3rem] mb-8 shadow-2xl">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <div className="flex items-center gap-6 text-[10px] font-black text-primary uppercase tracking-widest mb-6">
                    <span>{post.category}</span>
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                    <span className="text-slate-400 flex items-center gap-2">
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors leading-none">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 text-lg font-medium mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-3 font-black text-xs uppercase tracking-widest text-primary group/link">
                    Read Full Article <ArrowRight size={20} className="transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-16">
              {/* Search */}
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-8">Search Blog</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..."
                    className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold"
                  />
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                </div>
              </div>

              {/* Categories */}
              <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-8">Categories</h3>
                <ul className="space-y-4">
                  {['Clothing Care', 'Expert Tips', 'Lifestyle', 'Company News', 'Fabric Science'].map((cat, i) => (
                    <li key={i}>
                      <a href="#" className="flex justify-between items-center text-base font-bold text-slate-500 hover:text-primary transition-colors">
                        <span>{cat}</span>
                        <span className="px-3 py-1 bg-slate-50 rounded-lg text-[10px] font-black">12</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="p-10 bg-primary rounded-[3rem] text-white">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Newsletter</h3>
                <p className="text-base text-white/80 font-medium mb-8">Get the latest laundry tips and exclusive offers delivered to your inbox.</p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white outline-none focus:bg-white/20 transition-all font-bold"
                  />
                  <button className="w-full bg-white text-primary font-black uppercase tracking-widest text-xs py-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
    </div>
  );
}
