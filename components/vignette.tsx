interface VignetteProps {
  text: string
}

export function Vignette({ text }: VignetteProps) {
  return (
    <section className="py-16 bg-[#C9A86A]/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0' fill='none' stroke='%23C9A86A' strokeWidth='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <blockquote className="text-center">
          <div className="text-5xl text-[#C9A86A] mb-4">"</div>
          <p className="text-xl md:text-2xl font-serif text-[#4A4A45] leading-relaxed italic text-balance">{text}</p>
          <div className="text-5xl text-[#C9A86A] mt-4 rotate-180">"</div>
        </blockquote>
      </div>
    </section>
  )
}
