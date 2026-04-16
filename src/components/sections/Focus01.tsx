import { motion } from "framer-motion";

export default function Focus01() {
  return (
    <section className="py-32 px-8 bg-surface-container-low overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-4">Focus 01</p>
          <h2 className="text-5xl font-black uppercase monolith-text">Graphic Design</h2>
        </div>
        <p className="max-w-xs text-on-surface-variant text-sm font-medium">Static foundations. High-contrast typography and brutalist layout structures.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8 group overflow-hidden bg-surface-container-high aspect-video relative cursor-pointer"
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Editorial Identity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1WXBvD5NuCn-u868A35vyIuZkJR42StkvUOPVIJTQd3i3Z30-WGEdCFHhDEm6bXowwX7fcLC_AFWAbA-KDHsTUcghjOqGlPzSlsbB4vJQgD42QjooiUYhB6_dd1tJ0EnVrrYBky7Wsu134ymz77ZA0qfwe4Dw-aXCKLTv8_qzoxEVdS8B2bF7YpaB_9ejHyY4cxblkhMUNBhGQRZEL5eyywjKDB9J_bGYchw2aEEfl-LFkwo1YB0mjiGbp8eHoJkx0BR73U89CwM"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-bold uppercase tracking-widest text-primary">Editorial Identity</span>
          </div>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 group overflow-hidden bg-surface-container-high aspect-[3/4] relative cursor-pointer"
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Print Series" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz3htUxlCHEjonoHUAxNl1vE7vGfHy5whPio2GQ8mdg8YYi3ZJh0kQA5pvob8NjnrsLlhi_YJMxTa_NH2_4DS8ZuBBcSeYvC2CogAwXdxtNVZq7vTS_za2KamQJa-LB8f2QdHlAkeFMygAZvifAotlUJP8W9fNAfhXrsZH3HS2t_q83s29YCuaTjlpYIziB1bbsROao9YSg0tc71BTnosFynAmIeVJFsqK-VA2_eAYL0IFjUnhq7TtaQ8vG2z60eFmnkf23hbWvzk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-bold uppercase tracking-widest text-primary">Print Series</span>
          </div>
        </motion.div>
      </div>

      {/* Movie/Album Posters Carousel Section */}
      <div className="mt-32 border-t border-surface-container-high pt-24 group perspective-[2000px] overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-4">Focus 01.1</p>
          <h3 className="text-4xl md:text-5xl font-black uppercase monolith-text text-on-surface">Movie/Album Posters</h3>
          <p className="max-w-md text-on-surface-variant text-sm font-medium mx-auto mt-6">Experimental poster design exploring cinematic and musical narratives through raw visual aesthetics.</p>
        </div>
        
        <div className="flex justify-center items-center py-20 pb-32">
          {/* 3D Carousel Stage */}
          <div className="relative w-[320px] aspect-[2/3] preserve-3d carousel-container transition-transform duration-1000 ease-in-out cursor-pointer">
            {/* Poster 1 */}
            <div className="absolute inset-0 bg-black overflow-hidden preserve-3d group-hover:shadow-[0_0_80px_rgba(123,44,31,0.2)] transition-shadow duration-700 border border-surface-container-high" style={{ transform: "rotateY(0deg) translateZ(400px)" }}>
              <img src="/R_singh.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Rocket Singh Poster" />
            </div>
            {/* Poster 2 */}
            <div className="absolute inset-0 bg-black overflow-hidden preserve-3d group-hover:shadow-[0_0_80px_rgba(123,44,31,0.2)] transition-shadow duration-700 border border-surface-container-high" style={{ transform: "rotateY(120deg) translateZ(400px)" }}>
              <img src="/Boy%20(dark).png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="2Hollis Boy Poster" />
            </div>
            {/* Poster 3 */}
            <div className="absolute inset-0 bg-black overflow-hidden preserve-3d group-hover:shadow-[0_0_80px_rgba(123,44,31,0.2)] transition-shadow duration-700 border border-surface-container-high" style={{ transform: "rotateY(240deg) translateZ(400px)" }}>
              <img src="/after%20hours%20(dark).png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="The Weeknd After Hours Poster" />
            </div>
          </div>
        </div>
      </div>

      {/* Game Posters Carousel Section */}
      <div className="mt-32 border-t border-surface-container-high pt-24 group perspective-[2000px] overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-4">Focus 01.2</p>
          <h3 className="text-4xl md:text-5xl font-black uppercase monolith-text text-on-surface">Game Posters</h3>
          <p className="max-w-md text-on-surface-variant text-sm font-medium mx-auto mt-6">Immersive and bold promotional art exploring stylized game worlds and striking aesthetics.</p>
        </div>
        
        <div className="flex justify-center items-center py-20 pb-32">
          {/* 3D Carousel Stage */}
          <div className="relative w-[320px] aspect-[2/3] preserve-3d carousel-container transition-transform duration-1000 ease-in-out cursor-pointer">
            {/* Poster 1 */}
            <div className="absolute inset-0 bg-black overflow-hidden preserve-3d group-hover:shadow-[0_0_80px_rgba(123,44,31,0.2)] transition-shadow duration-700 border border-surface-container-high" style={{ transform: "rotateY(0deg) translateZ(400px)" }}>
              <img src="/atlas.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Atlas Game Poster" />
            </div>
            {/* Poster 2 */}
            <div className="absolute inset-0 bg-black overflow-hidden preserve-3d group-hover:shadow-[0_0_80px_rgba(123,44,31,0.2)] transition-shadow duration-700 border border-surface-container-high" style={{ transform: "rotateY(120deg) translateZ(400px)" }}>
              <img src="/blaze1.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Blaze Knife Poster 1" />
            </div>
            {/* Poster 3 */}
            <div className="absolute inset-0 bg-black overflow-hidden preserve-3d group-hover:shadow-[0_0_80px_rgba(123,44,31,0.2)] transition-shadow duration-700 border border-surface-container-high" style={{ transform: "rotateY(240deg) translateZ(400px)" }}>
              <img src="/blaze2.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Blaze Knife Poster 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
