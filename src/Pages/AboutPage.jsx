import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutPage = () => {
  const stats = [
    { label: "World wide clients", value: "2.8k+" },
    { label: "Happy customers", value: "300+" },
    { label: "Completed projects", value: "42k" }
  ]

  const cards = [
    {
      title: "Advance your business with tech expertise",
      desc: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation, easy access to information."
    },
    {
      title: "Accelerate success through technology",
      desc: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation, easy access to information."
    },
    {
      title: "Optimize operations with smart technology",
      desc: "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation, easy access to information."
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
        staggerChildren: 0.2
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
          <h1 className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">About Us</h1>
          <div className="w-20 h-1.5 bg-[#1a6e8e] mx-auto rounded-full mt-4"></div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
               className="relative"
             >
                 <div className="rounded-[3rem] aspect-square overflow-hidden relative group shadow-lg border border-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                      alt="Growva Digital Pioneer Team" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors flex flex-col items-center justify-center p-12 text-center">
                       <motion.div 
                         animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                         className="text-5xl mb-4 filter drop-shadow-md"
                       >🚀</motion.div>
                       <h3 className="text-3xl font-black text-white drop-shadow-md">Digital Pioneer</h3>
                    </div>
                 </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-10 -right-10 bg-[#1a6e8e] p-12 rounded-[2.5rem] text-white shadow-2xl max-w-sm hidden sm:block"
                >
                   <p className="text-xl font-medium italic leading-relaxed mb-6">
                     "IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation, easy access to information."
                   </p>
                    <div className="flex items-center gap-4">
                       <img 
                         src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" 
                         alt="Michael Ramirez CEO" 
                         className="w-12 h-12 rounded-full object-cover border border-cyan-200 shadow-md"
                       />
                       <div>
                          <p className="font-bold">Michael Ramirez</p>
                          <p className="text-xs text-cyan-200 uppercase tracking-widest">CEO & Founder</p>
                       </div>
                    </div>
                </motion.div>
             </motion.div>

             <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
               className="lg:pl-8"
             >
                <motion.h2 variants={fadeUp} className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Shape the future with digital innovation</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                  IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation, easy access to information.
                </motion.p>
                <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-12 leading-relaxed">
                  IT company that provides a seamless to and intuitive experience for users. The a design will focus on clear navigation, is easy access to information IT company that provides a seamless.
                </motion.p>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                   {stats.map((stat, i) => (
                     <motion.div variants={fadeUp} key={i} className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#1a6e8e]/20 transition-colors">
                        <p className="text-4xl font-black text-[#1a6e8e] mb-2">{stat.value}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">{stat.label}</p>
                     </motion.div>
                   ))}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Link to="/contact" className="inline-block bg-[#1a6e8e] text-white px-12 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                    Start Now
                  </Link>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
            >
               <div className="max-w-2xl">
                  <h6 className="text-[#1a6e8e] font-bold tracking-widest uppercase mb-4 text-sm">Tech Expertise</h6>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Accelerate success through technology</h2>
               </div>
               <Link to="/services" className="bg-[#1a6e8e] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all">View All</Link>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
               {cards.map((card, i) => (
                 <motion.div variants={fadeUp} key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
                    <div className="w-12 h-12 bg-[#1a6e8e] rounded-xl mb-8 flex items-center justify-center font-bold text-xl">{i+1}</div>
                    <h3 className="text-2xl font-bold mb-6 leading-snug">{card.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">{card.desc}</p>
                    <Link to="/blog" className="text-sm font-bold text-[#1a6e8e] uppercase tracking-widest hover:text-white transition-colors">Read Now →</Link>
                 </motion.div>
               ))}
            </motion.div>
         </div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a6e8e]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="bg-[#1a6e8e] rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
            >
               <div className="relative z-10">
                  <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-5xl md:text-6xl font-black mb-8 leading-tight">Want To work With Us ?</motion.h2>
                  <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                     IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation, easy access to information.
                  </motion.p>
                  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Link to="/contact" className="inline-block bg-white text-[#1a6e8e] px-12 py-5 rounded-full font-black text-xl shadow-xl hover:scale-110 active:scale-95 transition-all">
                       Get Started
                    </Link>
                  </motion.div>
               </div>
               {/* Decorative background shape */}
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"
               ></motion.div>
            </motion.div>
         </div>
      </section>
    </div>
  )
}

export default AboutPage
