export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 bg-surface">
      <img src="/logo.png" alt="YETI Watermark" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] opacity-5 pointer-events-none z-0" />
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay">
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="z-10 mb-12">
        <span className="surgical-label text-primary text-[12px] font-bold uppercase block mb-4">Portfolio MMXXIV</span>
        <h2 className="monolith-text text-[15vw] md:text-[12vw] font-black uppercase text-foreground leading-none">
          Visual<br />Architect.
        </h2>
      </div>
      <div className="z-10 max-w-2xl mt-12 border-l-2 border-on-secondary-fixed-variant pl-8">
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
          I carve digital monuments through Graphic Design and Motion Graphics, focusing on precision and raw visual power.
        </p>
      </div>
    </section>
  )
}
