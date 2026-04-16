import { motion } from "framer-motion";

export default function Focus02() {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="order-2 md:order-1">
          <p className="max-w-xs text-on-surface-variant text-sm font-medium">Kinetic structures. Exploring the velocity of digital monoliths in motion.</p>
        </div>
        <div className="text-right order-1 md:order-2">
          <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-4">Focus 02</p>
          <h2 className="text-5xl font-black uppercase monolith-text">Motion Graphics</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover="hover"
          className="aspect-square bg-surface-container-high relative overflow-hidden cursor-pointer"
        >
          <motion.img 
            variants={{ hover: { scale: 1.05, filter: "grayscale(0%)" } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover grayscale" 
            alt="Motion Reel 1" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2iWJfNSHmJMT0L3fGlyVo8WYIoMcnS5jaGnzxkDs9tGBZ2n0QPcaG6nVdP7fmfyv5BI3rZjsyig4Qsw0OA57XLCKonPA8bcTk3RQ037gftZrk27JjwWLDEOhSuzyu15RqiBKmw7OSaeBKpK0uVkWjxpA9bbmznSTisSFl5y7P5uHkMZAr1uykjig64QGcjctaAKScWbvrBIEClhw0aIL7BGJPsocGvRrRrUHnEwcPfMRvqzGZAi2K9297aQFAalwUEjT9SsiLHkQ"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            <motion.span 
              variants={{ hover: { scale: 1.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="material-symbols-outlined text-6xl text-primary drop-shadow-md"
            >
              play_circle
            </motion.span>
          </div>
          <div className="absolute bottom-6 left-6 z-10">
            <span className="surgical-label text-[10px] text-primary font-bold">REEL_01 // 2024</span>
          </div>
        </motion.div>

        <motion.div 
          whileHover="hover"
          className="aspect-square bg-surface-container-high relative overflow-hidden cursor-pointer"
        >
          <motion.img 
            variants={{ hover: { scale: 1.05, filter: "grayscale(0%)" } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover grayscale" 
            alt="Motion Reel 2" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUU5pz2hIYH2dT8sRdjcHSGbM6lkQCYnLwE4E3KcIuS8-jxeuhw2r3UagaH7gWDBByHOh5GhiSBDhckZRnSBfvFotvIy3nsq3qzeR-BdGfvvhwcuMMZJU-hUQjsrRGNHQfxBa8my9GVVpEIOQZ3NPkjQnNdGwe6oga6imiU7vQ_L0n6uuj8NLBV2HFi2nkhWTVOxANfpZ82enkyO0P4yQIWt4uG-Y-E7ZKkw7kxfN-_AiHFplZxnJkwRAnAHJDdjgV3Ikfgxcfj6M"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            <motion.span 
              variants={{ hover: { scale: 1.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="material-symbols-outlined text-6xl text-primary drop-shadow-md"
            >
              play_circle
            </motion.span>
          </div>
          <div className="absolute bottom-6 left-6 z-10">
            <span className="surgical-label text-[10px] text-primary font-bold">KINETIC_ID // VOL.4</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
