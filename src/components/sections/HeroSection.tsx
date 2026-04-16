export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center px-8 pt-24 overflow-hidden bg-surface">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay">
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 max-w-5xl">
        <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-6">Portfolio MMXXVI</p>
        <h1 className="monolith-text text-[clamp(4rem,12vw,9rem)] font-black uppercase text-on-surface mb-8">
          Visual<br/><span className="text-primary-container">Architect.</span>
        </h1>
        <p className="text-2xl md:text-3xl font-light text-on-surface-variant max-w-2xl leading-tight border-l-2 border-on-secondary-fixed-variant pl-8">
          I carve digital monuments through Graphic Design and Motion Graphics, focusing on precision and raw visual power.
        </p>
      </div>
    </header>
  )
}
