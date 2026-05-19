import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServicesPage = () => {
  const allServices = [
    { title: "Cybersecurity", icon: "🛡️", description: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation." },
    { title: "Cloud Solutions", icon: "☁️", description: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation." },
    { title: "IT Consulting", icon: "📊", description: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation." },
    { title: "Tech Consulting", icon: "💡", description: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation." },
    { title: "Sphere Solutions", icon: "🌐", description: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation." },
    { title: "Path Technologies", icon: "🚀", description: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation." },
    { title: "Digital Systems", icon: "💻", description: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation." }
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
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100 text-center">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">Our Services</h1>
          <div className="w-20 h-1.5 bg-[#1a6e8e] mx-auto rounded-full mt-4"></div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
           >
             {allServices.map((service, i) => (
               <motion.div 
                 variants={fadeUp} key={i} 
                 className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#1a6e8e]/30 hover:shadow-[0_20px_40px_rgba(26,110,142,0.1)] transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
               >
                  {/* Glow gradient back effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1a6e8e]/5 to-transparent rounded-bl-[5rem] group-hover:from-[#1a6e8e]/10 transition-colors"></div>
                  
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-8 group-hover:bg-[#1a6e8e] group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-slate-100/50">
                     {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-[#1a6e8e] transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
                  <Link to="/contact" className="inline-flex items-center text-sm font-bold text-[#1a6e8e] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Explore Service <span className="ml-2">→</span>
                  </Link>
               </motion.div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* Extra Info */}
      <section className="py-24 bg-[#1a6e8e] text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                  <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-8">Our Services: Tailored for Your Success</motion.h2>
                  <motion.p variants={fadeUp} className="text-xl text-cyan-100 leading-relaxed">
                    Engaging your audience where they spend the most time building brand loyalty, fostering community, and amplifying your audience.
                  </motion.p>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, rotate: 2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                 className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors"
               >
                  <div className="grid grid-cols-2 gap-8">
                     <div className="text-center">
                        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-4xl font-black mb-2">100+</motion.div>
                        <div className="text-xs uppercase font-bold text-cyan-200">Happy Clients</div>
                     </div>
                     <div className="text-center">
                        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="text-4xl font-black mb-2">250+</motion.div>
                        <div className="text-xs uppercase font-bold text-cyan-200">Projects</div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 8 }}
           className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
         ></motion.div>
      </section>
    </div>
  )
}

export default ServicesPage
