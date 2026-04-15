import { Card } from "@/components/ui/card"

export default function BeyondPixels() {
  return (
    <section className="px-6 md:px-12 py-32 bg-surface-lowest flex flex-col items-start">
      <div className="mb-24 flex flex-col items-start text-left w-full">
        <h3 className="display-lg tracking-[-0.04em] text-5xl md:text-7xl font-black uppercase text-foreground mb-16">Beyond the Pixels</h3>
        
        <div className="w-full flex flex-col gap-16">
          <div className="flex flex-row items-center gap-8 group cursor-pointer border-l-4 border-transparent hover:border-primary pl-8 transition-all">
            <span className="material-symbols-outlined text-5xl text-primary">sports_soccer</span>
            <span className="surgical-label text-[14px] font-bold tracking-[0.1em]">PLAYING FOOTBALL</span>
          </div>
          
          <div className="flex flex-row items-center gap-8 group cursor-pointer border-l-4 border-transparent hover:border-primary pl-8 transition-all">
            <span className="material-symbols-outlined text-5xl text-primary">graphic_eq</span>
            <span className="surgical-label text-[14px] font-bold tracking-[0.1em]">EXPERIMENTAL MUSIC</span>
          </div>
          
          <div className="flex flex-row items-center gap-8 group cursor-pointer border-l-4 border-transparent hover:border-primary pl-8 transition-all">
            <span className="material-symbols-outlined text-5xl text-primary">draw</span>
            <span className="surgical-label text-[14px] font-bold tracking-[0.1em]">ANALOG DRAWING</span>
          </div>
        </div>
      </div>
    </section>
  )
}
