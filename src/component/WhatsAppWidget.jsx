import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show a friendly tooltip bubble after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    // Automatically hide tooltip after 10 seconds to keep UI clean
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 13000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  const phoneNumber = "916378829431"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello!%20I'm%20interested%20in%20Growva's%20services.%20Please%20provide%20more%20details.`

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans">
      <AnimatePresence>
        {/* Chat Window Popup */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-4 w-[290px] xs:w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header section with Growva branding & Online Dot */}
            <div className="bg-gradient-to-r from-[#1a6e8e] to-[#258ab0] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg select-none">
                    G
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#1a6e8e] rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Growva Support</h4>
                  <p className="text-xs text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Online & Ready to Help
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Body simulating a WhatsApp conversation background */}
            <div 
              className="p-4 sm:p-5 min-h-[140px] flex flex-col justify-end relative" 
              style={{ 
                backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', 
                backgroundSize: 'contain',
                backgroundColor: '#e5ddd5'
              }}
            >
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[85%] self-start relative after:content-[''] after:absolute after:top-0 after:-left-2 after:w-0 after:h-0 after:border-t-[8px] after:border-t-white after:border-l-[8px] after:border-l-transparent">
                <p className="text-[11px] font-semibold text-[#1a6e8e] mb-0.5">Growva Representative</p>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                  Namaste! 🙏 Welcome to Growva. How can we help you grow your business today?
                </p>
                <span className="text-[9px] text-gray-400 block text-right mt-1">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>

            {/* CTA Button to WhatsApp Web / App */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#1a6e8e] to-[#258ab0] hover:shadow-[0_4px_15px_rgba(26,110,142,0.35)] text-white font-medium rounded-xl transition-all shadow-md transform active:scale-95 text-sm sm:text-base"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.489 0 9.957-4.43 9.961-9.892.002-2.645-1.023-5.133-2.887-7.001C16.582 1.844 14.1 .816 11.456.815 5.969.815 1.503 5.244 1.5 10.707c-.001 1.637.433 3.238 1.256 4.678l-.955 3.49 3.58-.94c1.552.846 3.12 1.218 4.672 1.218zm11.309-7.754c-.326-.162-1.927-.945-2.224-1.053-.297-.108-.513-.162-.73.162-.216.324-.838 1.053-1.027 1.269-.19.216-.379.243-.705.081-.326-.162-1.375-.505-2.62-1.612-.969-.861-1.62-1.927-1.81-2.25-.19-.324-.02-.5-.182-.661-.147-.146-.326-.379-.488-.567-.162-.189-.216-.324-.326-.54-.108-.217-.054-.405-.027-.567.027-.162.216-.513.326-.729.108-.216.162-.379.243-.54.081-.162.04-.324-.013-.486-.054-.162-.513-1.216-.703-1.675-.185-.444-.37-.384-.513-.391-.132-.007-.284-.008-.436-.008-.152 0-.401.056-.61.281-.209.225-.798.777-.798 1.896s.814 2.201.928 2.353c.114.152 1.602 2.43 3.882 3.409.542.233.965.373 1.295.477.544.172 1.039.148 1.43.09.436-.064 1.927-.783 2.2-1.5.272-.716.272-1.329.19-1.46-.081-.13-.297-.21-.623-.372z"/>
                </svg>
                <span>Start Chat</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-2">
        {/* Automatic Tooltip Speech Bubble */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              onClick={() => {
                setIsOpen(true)
                setShowTooltip(false)
              }}
              className="bg-white text-gray-800 font-semibold py-2.5 px-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 cursor-pointer whitespace-nowrap hover:bg-gray-50 transition-colors select-none text-xs sm:text-sm"
            >
              <span className="w-2.5 h-2.5 bg-[#1a6e8e] rounded-full animate-ping"></span>
              <span>Need help? Chat with us!</span>
              {/* Arrow Indicator */}
              <div className="absolute right-4 bottom-[-6px] w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing Floating Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen)
            if (showTooltip) setShowTooltip(false)
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={!isOpen ? {
            y: [0, -6, 0],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          } : {}}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all focus:outline-none cursor-pointer ${
            isOpen 
              ? 'bg-gray-800 hover:bg-gray-900' 
              : 'bg-gradient-to-r from-[#1a6e8e] to-[#258ab0] hover:shadow-[0_0_20px_rgba(26,110,142,0.5)]'
          }`}
          aria-label="Contact us on WhatsApp"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.489 0 9.957-4.43 9.961-9.892.002-2.645-1.023-5.133-2.887-7.001C16.582 1.844 14.1 .816 11.456.815 5.969.815 1.503 5.244 1.5 10.707c-.001 1.637.433 3.238 1.256 4.678l-.955 3.49 3.58-.94c1.552.846 3.12 1.218 4.672 1.218zm11.309-7.754c-.326-.162-1.927-.945-2.224-1.053-.297-.108-.513-.162-.73.162-.216.324-.838 1.053-1.027 1.269-.19.216-.379.243-.705.081-.326-.162-1.375-.505-2.62-1.612-.969-.861-1.62-1.927-1.81-2.25-.19-.324-.02-.5-.182-.661-.147-.146-.326-.379-.488-.567-.162-.189-.216-.324-.326-.54-.108-.217-.054-.405-.027-.567.027-.162.216-.513.326-.729.108-.216.162-.379.243-.54.081-.162.04-.324-.013-.486-.054-.162-.513-1.216-.703-1.675-.185-.444-.37-.384-.513-.391-.132-.007-.284-.008-.436-.008-.152 0-.401.056-.61.281-.209.225-.798.777-.798 1.896s.814 2.201.928 2.353c.114.152 1.602 2.43 3.882 3.409.542.233.965.373 1.295.477.544.172 1.039.148 1.43.09.436-.064 1.927-.783 2.2-1.5.272-.716.272-1.329.19-1.46-.081-.13-.297-.21-.623-.372z"/>
            </svg>
          )}

          {/* Unread Alert Notification Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white font-extrabold text-[10px] flex items-center justify-center rounded-full border border-white animate-bounce select-none">
              1
            </span>
          )}
        </motion.button>
      </div>
    </div>
  )
}
