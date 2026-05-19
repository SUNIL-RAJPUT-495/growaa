import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContactPage = () => {
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
          <h1 className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">Contact Us</h1>
          <div className="w-20 h-1.5 bg-[#1a6e8e] mx-auto rounded-full mt-4"></div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h6 variants={fadeUp} className="text-[#1a6e8e] font-bold tracking-widest uppercase mb-4 text-sm">Contact us</motion.h6>
              <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-slate-900 mb-8">Let's Get to Work</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-12">
                We’re thrilled to connect and explore the amazing possibilities that lie ahead for your brand!
              </motion.p>
              
              <motion.div variants={staggerContainer} className="space-y-10">
                {[
                  { icon: "📍", title: "Office Location", desc: "117/118, Karma Patel Marg, Sector 72, Agarwal Farm, Sector 9, Mansarovar, Jaipur, Rajasthan 302020" },
                  { icon: "📞", title: "Phone Number", desc: "+91 63788 29431" },
                  { icon: "✉️", title: "Email Address", desc: "growvaa01@gmail.com" }
                ].map((item, i) => (
                  <motion.div variants={fadeUp} key={i} className="flex items-start gap-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-100 group-hover:bg-[#1a6e8e] group-hover:text-white transition-all duration-300 group-hover:scale-110">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#1a6e8e] transition-colors">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="bg-slate-50 p-12 rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgb(0,0,0,0.05)]"
            >
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                       <input type="text" className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a6e8e]/20 focus:border-[#1a6e8e] transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                       <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                       <input type="email" className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a6e8e]/20 focus:border-[#1a6e8e] transition-all" placeholder="john@example.com" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Subject</label>
                    <input type="text" className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a6e8e]/20 focus:border-[#1a6e8e] transition-all" placeholder="Project Inquiry" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                    <textarea rows="5" className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a6e8e]/20 focus:border-[#1a6e8e] transition-all" placeholder="How can we help?"></textarea>
                 </div>
                 <motion.button 
                   whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                   className="w-full bg-[#1a6e8e] text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
                 >
                    Send Message
                 </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <motion.section 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="h-96 relative overflow-hidden shadow-inner border-t border-slate-100"
      >
         <iframe 
           title="Growva Office Location"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.227448375836!2d75.76022837633634!3d26.853043876682705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dc477b8307%3A0x6b4f738a164b3c95!2sMansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen="" 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
         ></iframe>
      </motion.section>
    </div>
  )
}

export default ContactPage
