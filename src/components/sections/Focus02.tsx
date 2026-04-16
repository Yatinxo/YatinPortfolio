import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const videos = [
  { src: "/Atlas_V3.mp4", alt: "Atlas Trailer" },
  { src: "/BlazeV1.mp4", alt: "Blaze Knife Promo" },
  { src: "/Porsche_live.mp4", alt: "Porsche Kinetic Run" },
  { src: "/Video_9.mp4", alt: "Motion Reel IX" },
  { src: "/ed_1.3.mp4", alt: "Editorial Flow 1.3" },
];

// Duplicate massively to simulate an endless scroll
const infiniteVideos = [...videos, ...videos, ...videos, ...videos, ...videos, ...videos];

export default function Focus02() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Jump to the middle on mount so we have runway to scroll left and right
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
    
    // Jump back to the center stealthily when we approach the edges
    if (scrollLeft <= clientWidth) {
      scrollRef.current.scrollLeft = (scrollWidth / 2) - (clientWidth / 2);
    } else if (scrollLeft + clientWidth >= scrollWidth - clientWidth) {
      scrollRef.current.scrollLeft = (scrollWidth / 2) - (clientWidth / 2);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      // Scroll by exactly one viewport width
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      // Scroll by exactly one viewport width
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 bg-[#131313] overflow-hidden relative border-t border-surface-container-high">
      <div className="px-8 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="order-2 md:order-1">
          <p className="max-w-xs text-[#E5E2E1]/60 text-sm font-medium leading-relaxed">
            Kinetic structures. Exploring the velocity of digital monoliths in motion.
          </p>
        </div>
        <div className="text-right order-1 md:order-2">
          <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-4">Focus 02</p>
          <h2 className="text-5xl font-black uppercase monolith-text text-[#E5E2E1]">Motion Graphics</h2>
        </div>
      </div>
      
      {/* 1-by-1 Infinite Video Scroll Display */}
      <div className="relative w-full group">
        
        {/* Left Arrow */}
        <button 
          onClick={scrollLeft}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#7B2C1F] text-white p-4 md:p-6 rounded-full backdrop-blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer shadow-2xl border border-white/10"
          aria-label="Previous video"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#7B2C1F] text-white p-4 md:p-6 rounded-full backdrop-blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer shadow-2xl border border-white/10"
          aria-label="Next video"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteVideos.map((video, index) => (
            <div 
              key={index}
              className="flex-none snap-start relative w-full aspect-video flex items-center justify-center p-8 md:p-24"
            >
              {/* Internal Video Box */}
              <div className="relative w-full h-full bg-[#0a0a0a] rounded-md overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#2A2A2A]">
                <video 
                  src={video.src} 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
                
                {/* Overlay Label */}
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-10 pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  <span className="surgical-label text-[10px] md:text-[12px] text-primary font-bold uppercase tracking-[0.3em]">
                    {video.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
