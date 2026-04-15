import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="bg-surface-low p-12 md:p-24 flex flex-col items-start justify-center min-h-[50vh]">
      <h2 className="display-lg tracking-[-0.04em] font-black uppercase text-foreground mb-16 text-6xl md:text-[8rem]">Let's Build.</h2>
      <Button variant="default" className="text-foreground tracking-[0.1em] text-lg font-bold uppercase transition-all duration-200">
        Start a project
      </Button>
    </section>
  )
}
