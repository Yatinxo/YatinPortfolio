import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const videos = [
  { src: "/Atlas_V3.mp4", alt: "Atlas Trailer" },
  { src: "/BlazeV1.mp4", alt: "Blaze Knife Promo" },
  { src: "/Porsche_live.mp4", alt: "Porsche Kinetic Run" },
  { src: "/Video_9.mp4", alt: "Motion Reel IX" },
  { src: "/ed_1.3.mp4", alt: "Editorial Flow 1.3" },
];

export default function Focus02() {
  const [channel, setChannel] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play static noise slightly when channel changes
  const switchChannel = (direction: 'up' | 'down') => {
    if (isSwitching) return;
    
    setIsSwitching(true);
    setTimeout(() => {
      setChannel((prev) => {
        if (direction === 'up') return (prev + 1) % videos.length;
        return prev === 0 ? videos.length - 1 : prev - 1;
      });
      setTimeout(() => setIsSwitching(false), 200); // end static after short delay
    }, 150);
  };

  return (
    <section className="py-32 bg-[#131313] overflow-hidden relative border-t border-surface-container-high">
      <div className="px-8 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="order-2 md:order-1">
          <p className="max-w-xs text-[#E5E2E1]/60 text-sm font-medium leading-relaxed">
            Kinetic structures. Exploring the velocity of digital monoliths in motion through retro-futuristic mediums.
          </p>
        </div>
        <div className="text-right order-1 md:order-2">
          <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-4">Focus 02</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase monolith-text text-[#E5E2E1]">Video Editing & Motion Graphics</h2>
        </div>
      </div>
      
      {/* CRT TV Container */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-12 py-12">
        
        {/* Outer TV Body */}
        <div className="bg-[#1C1C1C] rounded-[2rem] p-4 md:p-8 flex flex-col md:flex-row gap-8 shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_5px_15px_rgba(255,255,255,0.05)] border-4 border-[#111]">
          
          {/* TV Screen Unit */}
          <div className="flex-1 bg-black rounded-[3rem] p-4 md:p-6 border-8 border-[#0a0a0a] relative flex items-center justify-center shadow-[inset_0_0_40px_#000]">
            
            {/* The Actual Display Tube */}
            <div className="relative w-full aspect-video bg-[#050505] rounded-[2rem] overflow-hidden border border-[#222]">
              
              <AnimatePresence mode="wait">
                {!isSwitching ? (
                  <motion.video 
                    key={`video-${channel}`}
                    initial={{ opacity: 0, filter: 'brightness(3) contrast(2)' }}
                    animate={{ opacity: 1, filter: 'brightness(1) contrast(1.1)' }}
                    exit={{ opacity: 0, filter: 'brightness(3)' }}
                    transition={{ duration: 0.2 }}
                    ref={videoRef}
                    src={videos[channel].src} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-[#111] flex items-center justify-center">
                    {/* SVG Noise Effect for Channel Switch */}
                    <div className="w-full h-full opacity-30 bg-repeat" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')` }}></div>
                  </div>
                )}
              </AnimatePresence>

              {/* CRT Scanlines Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] z-10 mix-blend-overlay"></div>
              
              {/* CRT Vignette & Shadow */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] z-10"></div>
              
              {/* Screen Glass Glare */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-transparent z-10 w-full h-[60%] skew-y-12 origin-top-left opacity-20 transform -translate-y-10"></div>

              {/* Retro TV OSD (On Screen Display) */}
              <div className="absolute top-6 right-8 z-20 pointer-events-none opacity-80 mix-blend-screen">
                <span className="font-mono text-[24px] text-[#00ff00] font-bold drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]">CH {String(channel + 1).padStart(2, '0')}</span>
              </div>
              <div className="absolute bottom-6 left-8 z-20 pointer-events-none opacity-80 mix-blend-screen">
                <span className="font-mono text-[14px] uppercase tracking-widest text-[#00ff00] font-bold drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]">PLAY ► {videos[channel].alt}</span>
              </div>
            </div>
            
          </div>

          {/* Control Panel (Physical Buttons/Knobs) */}
          <div className="w-full md:w-32 flex flex-row md:flex-col items-center justify-center gap-8 bg-[#151515] p-6 rounded-3xl border-2 border-[#111] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
            
            {/* Channel UP Button */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] uppercase font-bold text-[#555] tracking-widest">CH UP</span>
              <button 
                onClick={() => switchChannel('up')}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#333] shadow-[0_8px_20px_rgba(0,0,0,0.8),inset_0_2px_5px_rgba(255,255,255,0.1)] hover:to-[#222] active:shadow-[0_2px_5px_rgba(0,0,0,0.8),inset_0_5px_15px_rgba(0,0,0,0.9)] active:translate-y-1 transition-all flex items-center justify-center group"
                aria-label="Next Channel"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0c0c0c] shadow-[inset_0_2px_8px_rgba(0,0,0,0.9)] group-active:bg-[#050505]"></div>
              </button>
            </div>

            {/* Channel DOWN Button */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] uppercase font-bold text-[#555] tracking-widest">CH DN</span>
              <button 
                onClick={() => switchChannel('down')}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#333] shadow-[0_8px_20px_rgba(0,0,0,0.8),inset_0_2px_5px_rgba(255,255,255,0.1)] hover:to-[#222] active:shadow-[0_2px_5px_rgba(0,0,0,0.8),inset_0_5px_15px_rgba(0,0,0,0.9)] active:translate-y-1 transition-all flex items-center justify-center group"
                aria-label="Previous Channel"
              >
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0c0c0c] shadow-[inset_0_2px_8px_rgba(0,0,0,0.9)] group-active:bg-[#050505]"></div>
              </button>
            </div>

            {/* Speaker Grille (Aesthetic feature common on CRT TVs) */}
            <div className="mt-auto hidden md:block opacity-60">
               <div className="flex gap-[6px]">
                 {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-[6px] h-32 bg-[#0c0c0c] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)]"></div>
                 ))}
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
