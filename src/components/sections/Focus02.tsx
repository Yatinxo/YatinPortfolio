export default function Focus02() {
  return (
    <section className="px-6 md:px-12 py-32 bg-surface">
      <div className="mb-24 flex flex-col items-start w-full">
        <span className="surgical-label tracking-[0.1em] text-secondary-foreground text-[12px] font-bold uppercase block mb-4">Focus 02</span>
        <h3 className="display-lg tracking-[-0.04em] text-6xl md:text-8xl font-black uppercase text-foreground">Motion Graphics</h3>
      </div>
      <div className="flex flex-col gap-16">
        <div className="aspect-video w-full bg-surface-low flex items-center justify-center relative overflow-hidden group">
          <img 
            alt="Motion Reel 1" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2iWJfNSHmJMT0L3fGlyVo8WYIoMcnS5jaGnzxkDs9tGBZ2n0QPcaG6nVdP7fmfyv5BI3rZjsyig4Qsw0OA57XLCKonPA8bcTk3RQ037gftZrk27JjwWLDEOhSuzyu15RqiBKmw7OSaeBKpK0uVkWjxpA9bbmznSTisSFl5y7P5uHkMZAr1uykjig64QGcjctaAKScWbvrBIEClhw0aIL7BGJPsocGvRrRrUHnEwcPfMRvqzGZAi2K9297aQFAalwUEjT9SsiLHkQ" 
          />
          <div className="z-10 bg-on-background/10 backdrop-blur-md p-8 group-hover:scale-110 transition-transform cursor-pointer">
            <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </div>
          <div className="absolute bottom-6 left-6 z-10">
            <span className="surgical-label text-[9px] text-muted-foreground font-bold">REEL_01 // 2024</span>
          </div>
        </div>
        <div className="aspect-video w-full bg-surface-low flex items-center justify-center relative overflow-hidden group">
          <img 
            alt="Motion Reel 2" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUU5pz2hIYH2dT8sRdjcHSGbM6lkQCYnLwE4E3KcIuS8-jxeuhw2r3UagaH7gWDBByHOh5GhiSBDhckZRnSBfvFotvIy3nsq3qzeR-BdGfvvhwcuMMZJU-hUQjsrRGNHQfxBa8my9GVVpEIOQZ3NPkjQnNdGwe6oga6imiU7vQ_L0n6uuj8NLBV2HFi2nkhWTVOxANfpZ82enkyO0P4yQIWt4uG-Y-E7ZKkw7kxfN-_AiHFplZxnJkwRAnAHJDdjgV3Ikfgxcfj6M" 
          />
          <div className="z-10 bg-on-background/10 backdrop-blur-md p-8 group-hover:scale-110 transition-transform cursor-pointer">
            <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </div>
          <div className="absolute bottom-6 left-6 z-10">
            <span className="surgical-label text-[9px] text-muted-foreground font-bold">KINETIC_ID // VOL.4</span>
          </div>
        </div>
      </div>
    </section>
  )
}
