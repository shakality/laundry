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
      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our Blog
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Insights, tips, and news from the world of professional garment care.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Feed */}
            <div className="lg:w-2/3 space-y-12">
              {blogPosts.map((post, i) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-[2rem] mb-6 shadow-lg">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <div className="flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 font-bold text-primary group/link">
                    Read Full Article <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Search */}
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="text-lg font-bold mb-6">Search Blog</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              {/* Categories */}
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Categories</h3>
                <ul className="space-y-3">
                  {['Clothing Care', 'Expert Tips', 'Lifestyle', 'Company News', 'Fabric Science'].map((cat, i) => (
                    <li key={i}>
                      <a href="#" className="flex justify-between items-center text-sm text-slate-600 hover:text-primary transition-colors">
                        <span>{cat}</span>
                        <span className="px-2 py-1 bg-slate-50 rounded text-[10px] font-bold">12</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="p-8 bg-primary rounded-[2rem] text-white">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-sm text-blue-100 mb-6">Get the latest laundry tips and exclusive offers delivered to your inbox.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white outline-none focus:bg-white/20 transition-all"
                  />
                  <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
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
