export default function BeyondPixels() {
  return (
    <section className="py-16 px-6 md:px-12 bg-spotify-base">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">About the Artist</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="spotify-card rounded-lg p-6 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
              <span className="material-symbols-outlined text-white">sports_soccer</span>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Football</h3>
              <p className="text-spotify-text-secondary text-sm leading-relaxed">Mentioning it as a source of energy and team strategy.</p>
            </div>
          </div>
          
          <div className="spotify-card rounded-lg p-6 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
              <span className="material-symbols-outlined text-white">graphic_eq</span>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Music</h3>
              <p className="text-spotify-text-secondary text-sm leading-relaxed">Exploring soundscapes and rhythm.</p>
            </div>
          </div>
          
          <div className="spotify-card rounded-lg p-6 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
              <span className="material-symbols-outlined text-white">draw</span>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Drawing</h3>
              <p className="text-spotify-text-secondary text-sm leading-relaxed">Returning to the fundamentals of form and line.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
