import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const posters = [
  { src: "/R_singh.png", alt: "Rocket Singh" },
  { src: "/Boy%20(dark).png", alt: "2Hollis Boy" },
  { src: "/after%20hours%20(dark).png", alt: "After Hours" },
  { src: "/Potrait%20Announcement%20Template%20Light.png", alt: "Atlas Game" },
  { src: "/Blazy2.png", alt: "Blaze Knife 1" },
  { src: "/Blazy3.png", alt: "Blaze Knife 2" },
];

// Create a heavily duplicated array to simulate endless scrolling seamlessly
const infinitePosters = [...posters, ...posters, ...posters, ...posters, ...posters, ...posters];

export default function Focus01() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Start in the middle so the user can immediately scroll left or right
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth / 2) - (clientWidth / 2);
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    // Pseudo-infinite logic: jump quietly back to the middle when near the ends
    if (scrollLeft <= 200) {
      scrollRef.current.scrollLeft = (scrollWidth / 2) - (clientWidth / 2);
    } else if (scrollLeft + clientWidth >= scrollWidth - 200) {
      scrollRef.current.scrollLeft = (scrollWidth / 2) - (clientWidth / 2);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 bg-[#131313] overflow-hidden relative border-t border-surface-container-high">
      <div className="px-8 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-4">Focus 01</p>
          <h2 className="text-5xl font-black uppercase monolith-text text-[#E5E2E1]">Posters & Print</h2>
        </div>
        <p className="max-w-xs text-[#E5E2E1]/60 text-sm font-medium leading-relaxed">
          A continuous horizontal exploration of cinematic, musical, and gaming narratives through raw visual aesthetics.
        </p>
      </div>
      
      {/* Horizontal Scroll Area */}
      <div className="relative w-full group">
        
        {/* Left Gradient Edge Blur */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-32 bg-gradient-to-r from-[#131313] via-[#131313]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Left Arrow Button */}
        <button 
          onClick={scrollLeft}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#7B2C1F] text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Right Arrow Button */}
        <button 
          onClick={scrollRight}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#7B2C1F] text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Right Gradient Edge Blur */}
        <div className="absolute top-0 right-0 h-full w-24 md:w-32 bg-gradient-to-l from-[#131313] via-[#131313]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-8 px-[30vw] snap-x snap-mandatory py-12 [&::-webkit-scrollbar]:hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infinitePosters.map((poster, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex-none snap-center group/item relative bg-black/40 aspect-[2/3] w-[260px] md:w-[360px] cursor-pointer rounded-[24px] shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Changed object-cover to object-contain so posters are never cropped */}
              <img 
                src={poster.src} 
                alt={poster.alt}
                className="w-full h-full object-contain grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700 p-2 rounded-[24px]"
              />
              <div className="absolute inset-0 bg-transparent flex items-end p-6 pointer-events-none">
                <span className="font-bold uppercase tracking-[0.2em] text-[#E5E2E1] font-['Inter'] text-xs drop-shadow-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  {poster.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
