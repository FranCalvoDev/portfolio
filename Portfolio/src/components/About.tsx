const stats = [
  {
    icon: "🎓",
    label: "Educación",
    value: "Tecnicatura en Análisis de Sistemas (+90%)",
  },
  {
    icon: "🌍",
    label: "Idiomas",
    value: "Español nativo — Inglés B2 (Cambridge)",
  },
  {
    icon: "📍",
    label: "Ubicación",
    value: "Buenos Aires, Argentina",
  },
  {
    icon: "🏀",
    label: "Extracurricular",
    value: "Árbitro Federado de Básquet",
  },
]

const About = () => {
  return (
    <section id="about" className="bg-background py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Sobre mí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <p className="text-foreground text-base leading-relaxed">
              Soy estudiante avanzado de la <span className="text-primary font-medium">Tecnicatura en Análisis de Sistemas</span>, con más de un año de experiencia práctica en desarrollo web Full-Stack. Me apasiona construir soluciones de software que tengan un impacto real.
            </p>
            <p className="text-foreground text-base leading-relaxed">
              Trabajo con tecnologías como <span className="text-primary font-medium">Python, JavaScript, React.js, MySQL y Docker</span>, y me enfoco en escribir código limpio, escalable y con buenas prácticas.
            </p>
            <p className="text-foreground text-base leading-relaxed">
              Soy <span className="text-primary font-medium">bilingüe (Español - Inglés B2)</span>, lo que me permite colaborar en entornos internacionales. Mi experiencia como <span className="text-primary font-medium">Árbitro Federado de Básquet</span> me formó en liderazgo, comunicación y toma de decisiones bajo presión — habilidades que aplico día a día en mi trabajo como desarrollador.
            </p>
            <p className="text-foreground text-base leading-relaxed">
              Busco integrarme a un equipo donde pueda aportar mis conocimientos técnicos, seguir creciendo profesionalmente y contribuir a proyectos de impacto real.
            </p>
          </div>

          {/* Cards de datos */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary border border-border rounded-xl px-6 py-4 flex items-center gap-4"
              >
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About