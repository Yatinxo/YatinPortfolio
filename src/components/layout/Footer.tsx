export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-start px-6 py-12 md:px-12 bg-surface-lowest hidden md:flex">
      <div className="mb-8 md:mb-0">
        <span className="font-['Inter'] font-bold uppercase tracking-[0.4em] text-[11px] text-muted-foreground">©2026 YETI</span>
      </div>
      <div className="flex gap-12">
        <a className="font-['Inter'] font-bold uppercase tracking-[0.4em] text-[11px] text-primary hover:text-white transition-colors cursor-ne-resize" href="#">LINKEDIN</a>
        <a className="font-['Inter'] font-bold uppercase tracking-[0.4em] text-[11px] text-muted-foreground hover:text-primary transition-colors cursor-ne-resize" href="#">ARCHIVE</a>
        <a className="font-['Inter'] font-bold uppercase tracking-[0.4em] text-[11px] text-muted-foreground hover:text-primary transition-colors cursor-ne-resize" href="#">EMAIL</a>
      </div>
    </footer>
  )
}
