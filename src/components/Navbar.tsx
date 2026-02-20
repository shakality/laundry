import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, WashingMachine as Laundry, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg text-white transition-transform group-hover:rotate-12">
            <Laundry size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-none text-primary">Adoration</span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">Laundry & Dry Cleaning</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-slate-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book" className="btn-primary py-2 px-5 text-sm">
            Book Pickup
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg font-medium py-2 transition-colors',
                location.pathname === link.path ? 'text-primary' : 'text-slate-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book" className="btn-primary text-center mt-2">
            Book Pickup
          </Link>
          <div className="flex items-center gap-2 text-slate-500 text-sm mt-4 pt-4 border-t border-slate-100">
            <Phone size={16} />
            <span>+234 800 123 4567</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
