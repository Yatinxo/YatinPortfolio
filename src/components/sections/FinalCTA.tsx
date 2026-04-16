import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-48 px-8 bg-primary-container text-on-primary-container relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="monolith-text text-6xl md:text-9xl font-black uppercase mb-12">Let's Build.</h2>
        <motion.a 
          whileHover={{ y: -6, backgroundColor: "#3a3939" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface text-on-surface px-12 py-5 text-lg font-bold uppercase tracking-widest cursor-pointer rounded-full shadow-lg hover:shadow-2xl transition-shadow" 
          href="mailto:Yetithakur007@gmail.com"
        >
          Start a project
        </motion.a>
      </div>
    </section>
  )
}
