export default function BeyondPixels() {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto">
        <p className="surgical-label text-[0.6875rem] font-medium uppercase text-primary mb-4 text-center">Interests</p>
        <h2 className="text-6xl md:text-8xl font-black uppercase monolith-text text-center mb-24">Beyond the Pixels</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6">
            <span className="material-symbols-outlined text-4xl text-primary">sports_soccer</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">FOOTBALL</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Mentioning it as a source of energy and team strategy.</p>
          </div>
          
          <div className="space-y-6">
            <span className="material-symbols-outlined text-4xl text-primary">graphic_eq</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">MUSIC</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Exploring soundscapes and rhythm.</p>
          </div>
          
          <div className="space-y-6">
            <span className="material-symbols-outlined text-4xl text-primary">draw</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">DRAWING</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Returning to the fundamentals of form and line.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
