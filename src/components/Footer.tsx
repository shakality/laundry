import { Link } from 'react-router-dom';
import { WashingMachine as Laundry, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Laundry size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-white">Adoration</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Laundry & Dry Cleaning</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium laundry and dry cleaning services in Nigeria. We take pride in providing the highest quality care for your garments with convenient pickup and delivery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
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
            <h3 className="text-white font-display font-bold mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Dry Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Wash & Fold</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Ironing Services</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Corporate Laundry</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Express Delivery</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Stain Removal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Adoration Way, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@adorationlaundry.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Adoration Laundry and Dry Cleaning Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
