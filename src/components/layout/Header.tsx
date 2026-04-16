import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-8 py-6 max-w-none no-line-rule">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="YATIN THAKUR Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-black tracking-[-0.04em] text-[#E5E2E1] font-['Inter'] uppercase">YATIN THAKUR</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="text-[#7B2C1F] font-bold font-['Inter'] uppercase tracking-[-0.04em] hover:bg-[#2A2A2A] transition-colors duration-200 px-4 py-2 cursor-crosshair" 
          onClick={() => setIsContactOpen(true)}
        >
          Contact
        </motion.button>
      </nav>

      {/* Cinematic Gallery Modal System */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto px-4">
            
            {/* Glassmorphic Background Blur defined in "Glass & Gradient" Rule */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-[#121315]/80 backdrop-blur-2xl"
            />
            
            {/* Modal Body: surface-container-low mapped to #1b1c1e */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              // Uses Ambient Glow rule (primary fixed at low opacity) instead of standard dropshadows
              className="relative w-full max-w-2xl bg-[#1b1c1e] p-8 md:p-12 shadow-[0_0_80px_rgba(255,86,37,0.06)] flex flex-col gap-10 overflow-hidden"
            >
              {/* Ghost Borders for structural separation without solid lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#5d4038] opacity-15"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5d4038] opacity-15"></div>

              {/* Header */}
              <div className="flex justify-between items-start z-10">
                <div>
                  <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-2 text-[#ffb5a0]">Ping</p>
                  <h3 className="text-3xl md:text-5xl font-black uppercase text-[#e3e2e5] monolith-text">Transmission</h3>
                </div>
                <button onClick={() => setIsContactOpen(false)} className="text-[#e3e2e5]/30 hover:text-[#ffb5a0] transition-colors p-2 cursor-pointer">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              {/* Platform Grid using Layering Principle: surface-container-high base */ }
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 z-10">
                
                {/* Twitter / X */}
                <a href="#" className="flex flex-col items-center justify-center gap-4 py-8 bg-[#292a2c] hover:bg-[#38393b] hover:scale-[1.02] active:scale-[0.98] transition-all group duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#e3e2e5]/80 group-hover:text-[#ffb5a0] transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span className="font-['Inter'] font-bold text-xs md:text-sm text-[#e3e2e5]/80 group-hover:text-[#ffb5a0] uppercase tracking-[0.2em] transition-colors">Twitter</span>
                </a>
                
                {/* Instagram */}
                <a href="#" className="flex flex-col items-center justify-center gap-4 py-8 bg-[#292a2c] hover:bg-[#38393b] hover:scale-[1.02] active:scale-[0.98] transition-all group duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#e3e2e5]/80 group-hover:text-[#ffb5a0] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span className="font-['Inter'] font-bold text-xs md:text-sm text-[#e3e2e5]/80 group-hover:text-[#ffb5a0] uppercase tracking-[0.2em] transition-colors">Instagram</span>
                </a>

                {/* Telegram */}
                <a href="#" className="flex flex-col items-center justify-center gap-4 py-8 bg-[#292a2c] hover:bg-[#38393b] hover:scale-[1.02] active:scale-[0.98] transition-all group duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#e3e2e5]/80 group-hover:text-[#ffb5a0] transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="m20.665.467-17.568 6.77c-2.316.924-2.302 2.203-.43 2.775l4.5 1.405 10.428-6.574c.49-.297.94-.138.57.194l-8.45 7.625-.332 4.962c.485 0 .696-.226 1.018-.54l2.443-2.378 5.08 3.753c.937.517 1.61.25 1.846-.864L23.113 2.21C23.473.743 22.42.062 20.665.467z"/></svg>
                  <span className="font-['Inter'] font-bold text-xs md:text-sm text-[#e3e2e5]/80 group-hover:text-[#ffb5a0] uppercase tracking-[0.2em] transition-colors">Telegram</span>
                </a>

                {/* Discord */}
                <a href="#" className="flex flex-col items-center justify-center gap-4 py-8 bg-[#292a2c] hover:bg-[#38393b] hover:scale-[1.02] active:scale-[0.98] transition-all group duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#e3e2e5]/80 group-hover:text-[#ffb5a0] transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M19.27 5.335A16.148 16.148 0 0 0 15.342 4c-.13.236-.277.564-.378.822a15.289 15.289 0 0 0-5.928 0c-.102-.258-.25-.586-.38-.822A16.148 16.148 0 0 0 4.73 5.335C1.045 10.824.088 16.19.57 21.503a16.313 16.313 0 0 0 4.982 2.496c.4-.537.76-1.104 1.074-1.693-.418-.157-.817-.354-1.2-.582.096-.073.19-.148.28-.225 2.585 1.18 5.378 1.18 7.944 0 .092.077.186.152.28.225-.38.228-.782.425-1.2.582.314.59.673 1.156 1.074 1.693a16.313 16.313 0 0 0 4.98-2.496c.55-6.002-1.077-11.458-4.22-16.168Zm-9.155 11.23c-1.173 0-2.133-1.043-2.133-2.32 0-1.278.94-2.322 2.133-2.322 1.196 0 2.146 1.044 2.133 2.322 0 1.277-.937 2.32-2.133 2.32Zm6.77 0c-1.173 0-2.133-1.043-2.133-2.32 0-1.278.94-2.322 2.133-2.322 1.196 0 2.146 1.044 2.133 2.322 0 1.277-.937 2.32-2.133 2.32Z"/></svg>
                  <span className="font-['Inter'] font-bold text-xs md:text-sm text-[#e3e2e5]/80 group-hover:text-[#ffb5a0] uppercase tracking-[0.2em] transition-colors">Discord</span>
                </a>
              </div>

              {/* Primary CTA Rule: Primary to Primary-Container, xl-rounded, Beveled light edge */}
              <a href="mailto:Yetithakur007@gmail.com" className="z-10 mt-6 w-full py-6 text-center text-sm md:text-base font-black uppercase tracking-[0.3em] font-['Space_Grotesk'] text-[#121315] rounded-[0.75rem] bg-gradient-to-br from-[#ffb5a0] to-[#ff5625] hover:opacity-90 active:scale-[0.98] shadow-[inset_0_2px_0px_rgba(255,255,255,0.4),0_0_20px_rgba(255,86,37,0.3)] transition-all">
                Initiate Direct Line
              </a>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
