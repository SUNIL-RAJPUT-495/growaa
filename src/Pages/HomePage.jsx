import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomePage = () => {
  const services = [
    {
      title: "Web Development",
      description: "Crafting seamless, responsive websites that blend innovation with functionality, ensuring an unforgettable user experience.",
      icon: "🌐"
    },
    {
      title: "Content Creation",
      description: "Compelling, creative content that tells your brand's story, designed to captivate and convert across all platforms.",
      icon: "✍️"
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights that empower you to make smarter business decisions and refine your digital strategy for sustained growth.",
      icon: "📊"
    },
    {
      title: "UX/UI Design",
      description: "Elevating digital experiences through intuitive design and user-centric solutions that turn visitors into customers.",
      icon: "🎨"
    }
  ]

  const stats = [
    { label: "Happy Clients", value: "100+" },
    { label: "Team Member", value: "18" },
    { label: "Years", value: "3" },
    { label: "Project Completed", value: "250" }
  ]

  const pricing = [
    {
      name: "Basic",
      price: "$59",
      features: ["Design Revisions", "SEO Optimization", "Normal Customer Support"],
      button: "Choose Basic"
    },
    {
      name: "Standard",
      price: "$99",
      features: ["Design Revisions", "SEO Optimization", "Normal Customer Support"],
      button: "Choose Standard",
      popular: true
    },
    {
      name: "Premium",
      price: "$199",
      features: ["Design Revisions", "SEO Optimization", "Normal Customer Support"],
      button: "Go Premium"
    }
  ]

  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Startup Founder",
      text: "We had worked with a few agencies before, but the experience here was noticeably smoother. Communication was clear, deadlines were met, and the final product actually matched what we had in mind.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      text: "What impressed me the most was their attention to small details. They didn’t just build what we asked—they suggested improvements that genuinely helped our business grow online.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Arjun Verma",
      role: "E-commerce Owner",
      text: "Honestly, I was a bit unsure at the start, but they handled everything professionally. The delivery was on time, and the support after launch has been just as good.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Neha Gupta",
      role: "Tech Lead",
      text: "Outstanding service! They delivered a robust and scalable solution that exceeded our expectations. Highly recommended for any growing business.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Vikram Singh",
      role: "Creative Director",
      text: "The design aesthetics and the user experience they crafted are phenomenal. Our user engagement has doubled since the new launch.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Anjali Desai",
      role: "Product Manager",
      text: "Their team is incredibly responsive and talented. They understood our complex requirements and delivered a flawless product ahead of schedule.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-[#1a6e8e] text-sm font-bold mb-6">Drive innovation with advanced technology</motion.span>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                Growva: Engineered for <span className="text-[#1a6e8e]">Growth</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-slate-600 mb-10 leading-relaxed">
                IT company that provides a seamless and intuitive experience for users. The design will focus on clear navigation, easy access.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-[#1a6e8e] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  Get Started
                </Link>
                <Link to="/services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg shadow-sm hover:shadow-md transition-all">
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
              animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="bg-white p-4 rounded-[2rem] shadow-2xl relative z-10 border border-slate-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                  alt="Growva Digital Tech" 
                  className="w-full h-[250px] md:h-[300px] object-cover rounded-2xl mb-6 shadow-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-cyan-50 rounded-2xl text-center">
                      <span className="block text-2xl md:text-3xl font-black text-[#1a6e8e]">99.9%</span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Uptime / Success</span>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-2xl text-center">
                      <span className="block text-2xl md:text-3xl font-black text-blue-600">24/7</span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tech Support</span>
                    </div>
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#1a6e8e]/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h6 className="text-[#1a6e8e] font-bold tracking-widest uppercase mb-4 text-sm">What We Offer</h6>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Services: Tailored for Your Success</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Engaging your audience where they spend the most time building brand loyalty, fostering community, and amplifying your audience.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                variants={fadeUp} key={index} 
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#1a6e8e]/30 hover:shadow-[0_20px_40px_rgba(26,110,142,0.08)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1a6e8e]/5 to-transparent rounded-bl-[4rem] group-hover:from-[#1a6e8e]/10 transition-colors"></div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#1a6e8e] transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-[#1a6e8e] font-bold text-sm hover:underline">Learn More →</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div variants={fadeUp} key={i}>
                <p className="text-5xl font-extrabold text-[#1a6e8e] mb-2">{stat.value}</p>
                <p className="text-slate-400 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      {/* Work Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h6 className="text-[#1a6e8e] font-bold tracking-widest uppercase mb-4 text-sm">Work process</h6>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-16">Lets see how we work</h2>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {[
              { id: "01", title: "Choose a Service" },
              { id: "02", title: "Request a Meeting" },
              { id: "03", title: "Receive Custom Plan" },
              { id: "04", title: "Let’s Make it Happen" }
            ].map((step, i) => (
              <motion.div variants={fadeUp} key={i} className="relative">
                <div className="text-6xl font-black text-slate-100 mb-4">{step.id}</div>
                <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-slate-200"></div>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-16 md:mt-20 py-16 md:py-24 bg-slate-900 rounded-3xl md:rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 text-white relative overflow-hidden mb-16 md:mb-24">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1a6e8e]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] md:blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 md:mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h6 className="text-cyan-400 font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">Testimonial</h6>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">What Our <span className="text-[#1a6e8e]">Client Say!</span></h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">Hear from the people who have experienced our digital transformation services firsthand.</p>
          </motion.div>
        </div>

        {/* Auto Scrolling Carousel */}
        <div className="relative z-10 flex overflow-hidden group">
          <div 
            className="flex w-max space-x-4 md:space-x-8 px-4 animate-infinite-scroll group-hover:[animation-play-state:paused]"
          >
            {/* We duplicate the testimonials array to create a seamless infinite loop */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[300px] md:w-[400px] flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="text-3xl md:text-4xl mb-4 md:mb-6">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-slate-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg line-clamp-4">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  {t.image ? (
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#1a6e8e] shadow-md"
                    />
                  ) : (
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a6e8e] rounded-full flex items-center justify-center font-bold text-lg md:text-xl text-white">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-white text-base md:text-lg">{t.name}</h4>
                    <p className="text-[#1a6e8e] text-xs md:text-sm font-medium tracking-wide uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Digital Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
             className="bg-[#1a6e8e]/5 p-12 rounded-[3rem] border border-[#1a6e8e]/10"
           >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                    <motion.h6 variants={fadeUp} className="text-[#1a6e8e] font-bold tracking-widest uppercase mb-4 text-sm">Our Impact</motion.h6>
                    <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Building Digital Solutions for Growing Businesses</motion.h2>
                    <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-10 leading-relaxed">
                      We partner with startups and small businesses to build scalable websites, apps, and digital products.
                    </motion.p>
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm font-bold text-slate-500 uppercase tracking-wide">
                       <span>Startup Client</span> • <span>E-commerce Brand</span> • <span>Local Business</span> • <span>Tech Startup</span>
                    </motion.div>
                 </motion.div>
                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 gap-4">
                    <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 font-bold text-slate-800 italic">Service Company</motion.div>
                    <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 font-bold text-slate-800 italic">Digital Brand</motion.div>
                    <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 font-bold text-slate-800 italic">New Venture</motion.div>
                    <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 font-bold text-slate-800 italic">Growing Business</motion.div>
                 </motion.div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h6 className="text-[#1a6e8e] font-bold tracking-widest uppercase mb-4 text-sm">FAQ</h6>
            <h2 className="text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
            {[
              { q: "What services do you provide?", a: "We provide website development, mobile app development, custom software solutions, and game development. Our focus is on building scalable and user-friendly digital products." },
              { q: "How long does a project take?", a: "Project timelines depend on complexity. A basic website may take 1–2 weeks, while larger applications can take several weeks or months. We always provide a clear timeline before starting." },
              { q: "Do you work with startups?", a: "Yes, we primarily work with startups and growing businesses. We understand budget constraints and help you build scalable solutions that grow with your business." },
              { q: "Do you provide support after launch?", a: "Yes, we provide post-launch support and maintenance to ensure everything runs smoothly. We can also help with updates, improvements, and scaling your project." }
            ].map((item, i) => (
              <motion.div variants={fadeUp} key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-4">{item.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
