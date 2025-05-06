'use client'

export default function ResumePage() {
  const timeline = [
    {
      title: 'Frontend Operations Analyst Intern – Licious',
      date: 'Jan 2025 – Present',
      description:
        'Optimized SLA performance and crate tracking workflows. Designed analytics dashboards for real-time visibility.'
    },
    {
      title: 'Firmware Engineer Intern – Western Digital',
      date: 'Aug 2024 – Nov 2024',
      description:
        'Worked on NAND flash firmware reliability and system-level validation using UART, UFS protocols, and C.'
    },
    {
      title: 'B.E. in Electronics & Communication – RVCE',
      date: '2021 – 2025',
      description:
        'Specialized in Embedded Systems, RISC-V, and Microcontroller-based applications. Final-year project: Smart Stick for Visually Impaired.'
    }
  ]

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">My Resume & Timeline</h1>

      <div className="border-l-2 border-foreground/30 pl-6 relative space-y-10">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-3 top-1 w-4 h-4 bg-foreground rounded-full shadow-lg animate-pulse" />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm text-muted-foreground italic">{item.date}</p>
            <p className="mt-2 leading-relaxed text-base">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 mt-4 text-lg border rounded shadow hover:bg-foreground hover:text-background transition-all"
        >
          📄 Download Full Resume
        </a>
      </div>
    </section>
  )
}
