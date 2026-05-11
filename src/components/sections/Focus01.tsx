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
    <section className="py-16 bg-spotify-black overflow-hidden relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Popular Releases</h2>
      </div>
      
      {/* Horizontal Scroll Area */}
      <div className="relative w-full group max-w-7xl mx-auto">
        
        {/* Left Arrow Button */}
        <button 
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Right Arrow Button */}
        <button 
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infinitePosters.map((poster, index) => (
            <motion.div 
              key={index}
              className="flex-none snap-start group/card relative spotify-card w-[200px] md:w-[240px] p-4 rounded-lg cursor-pointer"
            >
              <div className="relative aspect-square w-full mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-md overflow-hidden bg-black">
                <img 
                  src={poster.src} 
                  alt={poster.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-2 right-2 opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center text-black shadow-xl"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current ml-1"><path d="M8 5v14l11-7z"/></svg>
                </motion.div>
              </div>
              
              <h3 className="font-bold text-white text-base truncate">{poster.alt}</h3>
              <p className="text-spotify-text-secondary text-sm font-medium mt-1">
                {poster.year} • {poster.type}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
