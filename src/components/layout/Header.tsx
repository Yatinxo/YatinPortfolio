import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-6 py-8 md:px-12 bg-surface">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="YETI Logo" className="w-10 h-10 object-contain" />
        <h1 className="font-black uppercase tracking-tighter text-2xl text-white">YATIN THAKUR</h1>
      </div>
      <nav className="hidden md:flex gap-12 items-center">
        <a className="text-secondary underline decoration-2 underline-offset-8 surgical-label text-[10px] font-bold" href="#">INDEX</a>
        <a className="text-neutral-500 uppercase tracking-[0.3em] text-[10px] font-bold hover:text-foreground transition-colors" href="#">WORKS</a>
        <a className="text-neutral-500 uppercase tracking-[0.3em] text-[10px] font-bold hover:text-foreground transition-colors" href="#">LAB</a>
      </nav>
      <Button variant="secondary" className="font-bold surgical-label text-[11px] cursor-crosshair px-6">
        CONTACT
      </Button>
    </header>
  )
}
