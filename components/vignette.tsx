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
            backgroundImage: `url('/inflicted.png')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '100px 100px',
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
