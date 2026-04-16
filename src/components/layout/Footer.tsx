export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full no-line-rule">
      <div className="mb-8 md:mb-0">
        <span className="text-[0.6875rem] tracking-[0.4em] font-medium uppercase font-['Inter'] text-[#E5E2E1]/60">©2026 YETI</span>
      </div>
      <div className="flex gap-8">
        <a className="text-[0.6875rem] tracking-[0.4em] font-medium uppercase font-['Inter'] text-primary hover:text-white transition-all cursor-ne-resize" href="https://www.linkedin.com/in/yatin-thakur-3b13b8179" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        <a className="text-[0.6875rem] tracking-[0.4em] font-medium uppercase font-['Inter'] text-[#E5E2E1]/60 hover:text-[#7B2C1F] transition-all cursor-ne-resize" href="#">ARCHIVE</a>
        <a className="text-[0.6875rem] tracking-[0.4em] font-medium uppercase font-['Inter'] text-[#E5E2E1]/60 hover:text-[#7B2C1F] transition-all cursor-ne-resize" href="mailto:contact@yatinthakur.com">EMAIL</a>
      </div>
    </footer>
  )
}
