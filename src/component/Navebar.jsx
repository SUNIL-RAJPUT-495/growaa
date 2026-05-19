import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import mainLogo from "../assets/Logo.png";

export const Navebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 flex justify-center ${
        isScrolled ? 'top-4 px-4 sm:px-6' : 'top-0 px-0'
      }`}
    >
      <div 
        className={`w-full transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'max-w-5xl bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 rounded-xl' 
            : 'max-w-7xl bg-gradient-to-b from-black/5 to-transparent py-4 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className={`flex justify-between items-center ${isScrolled ? 'px-4 sm:px-6 py-4' : 'px-0 py-2'}`}>
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group relative z-50">
            <motion.img 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-auto object-contain transition-all duration-300 -my-10 ${isScrolled ? 'h-20 sm:h-[100px]' : 'h-28 sm:h-[140px]'}`} 
              src={mainLogo} 
              alt="Growva Logo" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/');
              return (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="relative px-5 py-2 rounded-full text-[15px] font-medium transition-colors duration-300"
                >
                  <span className={`relative z-10 ${isActive ? 'text-white font-semibold' : 'text-slate-700 hover:text-slate-900'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-[#1a6e8e] to-[#258ab0] rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="group relative overflow-hidden bg-slate-900 text-white px-7 py-3 rounded-full font-medium text-[15px] flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(26,110,142,0.3)]"
            >
              <span className="relative z-10">Let's Talk</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a6e8e] to-[#258ab0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center relative z-50">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                isMenuOpen || isScrolled ? 'bg-slate-100 text-slate-800 shadow-sm' : 'bg-white/50 text-slate-800'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[110%] left-4 right-4 p-5 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-white/60 md:hidden origin-top"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/');
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-5 py-3.5 rounded-2xl text-[16px] font-medium transition-all ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#1a6e8e]/10 to-transparent text-[#1a6e8e]' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-5 mt-3 border-t border-slate-100"
              >
                <button 
                  onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-medium transition-all active:scale-95 shadow-lg shadow-slate-900/20"
                >
                  Let's Talk
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
