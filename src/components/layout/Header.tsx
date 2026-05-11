import { motion } from "framer-motion"

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000000]/90 backdrop-blur-md flex justify-between items-center px-4 md:px-8 py-4 max-w-none no-line-rule transition-all duration-300 border-b border-white/5">
      
      {/* Logo & Name */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* We can use the logo image, but maybe make it a green circle or keep as is */}
        <div className="w-8 h-8 md:w-10 md:h-10 bg-spotify-green rounded-full flex items-center justify-center">
          <span className="text-black font-black text-xs md:text-sm">YT</span>
        </div>
        <span className="text-lg md:text-xl font-bold tracking-tight text-white font-sans hidden sm:inline-block">Yatin Thakur</span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3 md:gap-4">
        
        {/* Twitter / X */}
        <motion.a href="https://x.com/0xYatin" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="text-white p-2.5 md:p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-colors"
          aria-label="Twitter"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </motion.a>
        
        {/* Instagram */}
        <motion.a href="https://www.instagram.com/cr3a4e_?igsh=NXoxd3VsZnAyZzYx" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="text-white p-2.5 md:p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-colors"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </motion.a>

        {/* Telegram */}
        <motion.a href="https://t.me/Yatinxo" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="text-white p-2.5 md:p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-colors"
          aria-label="Telegram"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="m20.665.467-17.568 6.77c-2.316.924-2.302 2.203-.43 2.775l4.5 1.405 10.428-6.574c.49-.297.94-.138.57.194l-8.45 7.625-.332 4.962c.485 0 .696-.226 1.018-.54l2.443-2.378 5.08 3.753c.937.517 1.61.25 1.846-.864L23.113 2.21C23.473.743 22.42.062 20.665.467z"/></svg>
        </motion.a>

        {/* Discord */}
        <motion.a href="https://discordapp.com/users/1196343574103609395" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="text-white p-2.5 md:p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-colors"
          aria-label="Discord"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
        </motion.a>

      </div>
    </nav>
  )
}
