import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, WashingMachine as Laundry, MapPin, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Services and Pricing', path: '/services' },
  { name: 'Rinse Repeat', path: '/pricing' },
  { name: 'For Business', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-primary transition-transform group-hover:scale-110">
              <Laundry size={32} strokeWidth={2.5} />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">
              Adoration
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-bold transition-all hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-white/90'
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="flex items-center gap-1 text-sm font-bold text-white/90 hover:text-primary transition-all">
              Locations <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-white/90 font-bold text-sm cursor-pointer hover:text-primary transition-all">
            <MapPin size={16} className="text-primary" />
            <span>Lagos, NG</span>
            <ChevronDown size={14} />
          </div>
          <Link 
            to="/contact" 
            className="text-sm font-bold text-white hover:text-primary transition-all"
          >
            Log in
          </Link>
          <Link to="/book" className="btn-primary py-2.5 px-6 text-sm">
            Book Pickup
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container-custom py-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-2xl font-black tracking-tight py-2 transition-colors',
                location.pathname === link.path ? 'text-primary' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-4"></div>
          <Link to="/book" className="btn-primary text-xl py-5">
            Book Pickup
          </Link>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2 text-white font-bold">
              <MapPin size={20} className="text-primary" />
              <span>Lagos, Nigeria</span>
            </div>
            <Link to="/contact" className="text-white font-bold">Log in</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
