import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-8 px-6 md:px-12 bg-gradient-to-r from-[#af2896] to-[#509bf5] relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col text-white mb-6 md:mb-0">
        <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-1">Ready to collaborate?</p>
        <h2 className="text-xl md:text-2xl font-bold">Let's build something extraordinary together.</h2>
      </div>
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-8 py-3 text-sm md:text-base font-bold rounded-full whitespace-nowrap hover:bg-gray-100 transition-colors cursor-pointer" 
        href="mailto:yetithakur007@gmail.com"
      >
        yetithakur007@gmail.com
      </motion.a>
    </section>
  )
}
