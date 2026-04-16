import { motion } from "framer-motion"

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-8 py-6 max-w-none no-line-rule">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="YATIN THAKUR Logo" className="h-10 w-auto object-contain" />
        <span className="text-xl font-black tracking-[-0.04em] text-[#E5E2E1] font-['Inter'] uppercase">YATIN THAKUR</span>
      </div>
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="text-[#7B2C1F] font-bold font-['Inter'] uppercase tracking-[-0.04em] hover:bg-[#2A2A2A] transition-colors duration-200 px-4 py-2 cursor-crosshair" 
        href="mailto:contact@yatinthakur.com"
      >
        Contact
      </motion.a>
    </nav>
  )
}
