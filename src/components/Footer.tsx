import { Link } from 'react-router-dom';
import { WashingMachine as Laundry, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="text-primary transition-transform group-hover:scale-110">
                <Laundry size={32} strokeWidth={2.5} />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">
                Adoration
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Premium laundry and dry cleaning services in Nigeria. We take pride in providing the highest quality care for your garments with convenient pickup and delivery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Company</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold text-slate-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
              <li><Link to="/book" className="hover:text-primary transition-colors">Book a Pickup</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Latest Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Services</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold text-slate-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Dry Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Wash & Fold</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Ironing Services</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Corporate Laundry</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Express Delivery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contact</h3>
            <ul className="flex flex-col gap-6 text-sm font-bold text-slate-400">
              <li className="flex gap-4">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>123 Adoration Way, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-primary shrink-0" />
                <span>info@adorationlaundry.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <p>© {currentYear} Adoration Laundry and Dry Cleaning Services.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
