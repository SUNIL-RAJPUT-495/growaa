import React from 'react'
import { motion } from 'framer-motion'

const ProjectsPage = () => {
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      category: "Web Development & Shopify",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      category: "UI/UX Design & Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "SEO Ranking Booster",
      category: "Digital Marketing & SEO",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Social Growth Campaign",
      category: "Social Media Management",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      text: "Growva transformed our digital presence completely. Their attention to detail and innovative approach to design is simply unmatched.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "David Chen",
      role: "Marketing Director",
      text: "The team's expertise in both development and marketing strategy helped us achieve our quarterly goals in just two months.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StyleVibe",
      text: "Working with them was a seamless experience. They understood our vision perfectly and delivered a product that exceeded expectations.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <div className="pt-32 pb-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Recent <span className="text-[#1a6e8e]">Work</span></h1>
          <p className="text-xl text-slate-600">Showcasing excellence in website design and digital marketing.</p>
        </motion.div>
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.div 
              variants={fadeUp} key={project.id} 
              className="group relative overflow-hidden rounded-3xl bg-slate-200 aspect-video shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-cyan-100 font-medium tracking-wide uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <section className="mt-16 md:mt-32 py-16 md:py-24 bg-slate-900 rounded-3xl md:rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 text-white relative overflow-hidden mb-16 md:mb-0">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1a6e8e]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] md:blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">What Our <span className="text-[#1a6e8e]">Client Say!</span></h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">Hear from the people who have experienced our digital transformation services firsthand.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {testimonials.map((client, i) => (
              <motion.div 
                variants={fadeUp} key={i} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 rounded-3xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-4 md:mb-6">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-slate-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">"{client.text}"</p>
                <div className="flex items-center gap-4">
                  {client.image ? (
                    <img 
                      src={client.image} 
                      alt={client.name} 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#1a6e8e] shadow-md"
                    />
                  ) : (
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a6e8e] rounded-full flex items-center justify-center font-bold text-lg md:text-xl text-white">
                      {client.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-white text-base md:text-lg">{client.name}</h4>
                    <p className="text-[#1a6e8e] text-xs md:text-sm font-medium tracking-wide uppercase">{client.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
