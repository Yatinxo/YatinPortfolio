import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-6 py-8 md:px-12 bg-surface">
      <div className="flex items-center gap-6">
        <img src="/logo.png" alt="YETI Logo" className="w-10 h-10 object-contain" />
        <h1 className="font-black uppercase tracking-[0.2em] text-2xl text-white">YATIN THAKUR</h1>
      </div>
      <Button variant="secondary" className="font-bold surgical-label text-[11px] cursor-crosshair px-6">
        CONTACT
      </Button>
    </header>
  )
}
