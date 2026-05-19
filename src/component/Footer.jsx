import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import mainLogo from "../assets/Logo.png"

export const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative z-10"
        >
          {/* Brand Info */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                className="h-12 w-auto mb-8 grayscale brightness-200 hover:grayscale-0 transition-all duration-300" 
                src={mainLogo} 
                alt="Growva Logo" 
              />
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Growva is engineered for growth. We help businesses navigate the digital landscape with precision and expertise. Drive innovation with advanced technology.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'FB', url: 'https://facebook.com' },
                { name: 'TW', url: 'https://twitter.com' },
                { name: 'LN', url: 'https://linkedin.com' },
                { name: 'IN', url: 'https://instagram.com' }
              ].map((social) => (
                <motion.a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1a6e8e] transition-colors cursor-pointer text-sm shadow-lg hover:shadow-[#1a6e8e]/50 text-white font-semibold"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Resources */}
          <motion.div variants={fadeUp}>
            <h4 className="text-lg font-bold mb-8">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Projects', path: '/projects' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.label} className="group">
                  <Link to={item.path} className="inline-flex items-center hover:text-white transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#1a6e8e]">&gt; </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Use cases */}
          <motion.div variants={fadeUp}>
            <h4 className="text-lg font-bold mb-8">Use cases</h4>
            <ul className="space-y-4 text-slate-400">
              {[
                { label: 'Know Your Business', path: '/about' },
                { label: 'TechSphere Solutions', path: '/services' },
                { label: 'Know Your Customer', path: '/contact' },
                { label: 'Onboarding', path: '/contact' }
              ].map((item) => (
                <li key={item.label} className="group">
                  <Link to={item.path} className="inline-flex items-center hover:text-white transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#1a6e8e]">&gt; </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Products & Developers */}
          <motion.div variants={fadeUp}>
            <h4 className="text-lg font-bold mb-8">Developers</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="group"><Link to="/about" className="inline-flex items-center hover:text-white transition-colors"><span className="w-0 overflow-hidden group-hover:w-3 transition-all text-[#1a6e8e]">&gt; </span>Documentation</Link></li>
              <li className="group"><Link to="/services" className="inline-flex items-center hover:text-white transition-colors"><span className="w-0 overflow-hidden group-hover:w-3 transition-all text-[#1a6e8e]">&gt; </span>API Reference</Link></li>
            </ul>
            <div className="mt-8">
               <h4 className="text-lg font-bold mb-4">Language</h4>
               <select className="bg-slate-800 text-slate-400 text-sm rounded-lg px-4 py-2 outline-none border border-slate-700 hover:border-[#1a6e8e] focus:border-[#1a6e8e] transition-colors cursor-pointer">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
               </select>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 relative z-10"
        >
          <p>© Growva 2026 | All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {['Privacy', 'Terms', 'Sitemap', 'Help'].map((item) => (
                <Link key={item} to="/contact" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#1a6e8e] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">
                  {item}
                </Link>
             ))}
          </div>
        </motion.div>

        {/* Decorative Background Blob */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#1a6e8e] rounded-full blur-[150px] pointer-events-none"
        ></motion.div>
      </div>
    </footer>
  )
}
