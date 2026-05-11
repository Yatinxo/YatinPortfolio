import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const posters = [
  { src: "/R_singh.png", alt: "Rocket Singh", type: "Single", year: "2024" },
  { src: "/Boy%20(dark).png", alt: "2Hollis Boy", type: "Album", year: "2023" },
  { src: "/after%20hours%20(dark).png", alt: "After Hours", type: "EP", year: "2023" },
  { src: "/Potrait%20Announcement%20Template%20Light.png", alt: "Atlas Game", type: "Single", year: "2022" },
  { src: "/Blazy2.png", alt: "Blaze Knife 1", type: "EP", year: "2022" },
  { src: "/Blazy3.png", alt: "Blaze Knife 2", type: "Single", year: "2021" },
];

const infinitePosters = [...posters, ...posters, ...posters, ...posters];

export default function Focus01() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="py-24 md:py-32 bg-spotify-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Popular Releases</h2>
      </div>
      
      {/* Horizontal Scroll Area */}
      <div className="relative w-full group">
        
        {/* Left Arrow Button */}
        <button 
          onClick={scrollLeft}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer backdrop-blur-md shadow-lg"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Right Arrow Button */}
        <button 
          onClick={scrollRight}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer backdrop-blur-md shadow-lg"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 md:gap-8 px-6 md:px-12 snap-x snap-mandatory pb-12 [&::-webkit-scrollbar]:hidden scroll-smooth max-w-7xl mx-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infinitePosters.map((poster, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex-none snap-start group/item relative bg-black/40 aspect-[2/3] w-[75vw] sm:w-[260px] md:w-[360px] cursor-pointer rounded-[24px] shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
            >
              <img 
                src={poster.src} 
                alt={poster.alt}
                className="w-full h-full object-contain grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700 p-4"
              />

              {/* Play Button Overlay (Spotify Style) */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-6 right-6 opacity-0 translate-y-2 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-300 w-14 h-14 md:w-16 md:h-16 bg-spotify-green rounded-full flex items-center justify-center text-black shadow-xl z-20 pointer-events-auto"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current ml-1"><path d="M8 5v14l11-7z"/></svg>
              </motion.div>

              <div className="absolute inset-0 bg-transparent flex items-end p-6 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col">
                  <span className="font-bold uppercase tracking-[0.2em] text-[#E5E2E1] font-['Inter'] text-sm md:text-base drop-shadow-md">
                    {poster.alt}
                  </span>
                  <span className="text-spotify-text-secondary text-xs md:text-sm font-medium mt-1">
                    {poster.year} • {poster.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
