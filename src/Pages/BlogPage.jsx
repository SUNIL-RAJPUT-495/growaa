import React from 'react'
import { motion } from 'framer-motion'

const BlogPage = () => {
  const blogs = [
    {
      title: "Why SEO Services for Businesses are Essential in 2026",
      category: "SEO",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Choosing the Right Social Media Marketing Agency",
      category: "Marketing",
      date: "May 8, 2026",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80"
    }
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeUp} 
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 text-center md:text-left"
        >
          Insights & <span className="text-[#1a6e8e]">Trends</span>
        </motion.h1>
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogs.map((blog, i) => (
            <motion.div 
              variants={fadeUp} key={i} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-[#1a6e8e]/20 hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden relative">
                 <img 
                   src={blog.image} 
                   alt={blog.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <span className="absolute top-6 left-6 text-xs font-bold text-white bg-[#1a6e8e] px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">{blog.category}</span>
              </div>
              <div className="p-8 md:p-10">
                 <span className="block text-sm font-medium text-slate-400 mb-4">{blog.date}</span>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#1a6e8e] transition-colors leading-snug">{blog.title}</h3>
                 <p className="text-slate-500 mb-8 leading-relaxed">Learn more about how to grow your business online with our expert tips and industry news.</p>
                 
                 <div className="flex items-center text-sm font-bold text-[#1a6e8e] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                   Read Article <span className="ml-2">→</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BlogPage
