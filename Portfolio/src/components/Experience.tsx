const experiences = [
  {
    role: "Analista de Sistemas / Desarrollador",
    company: "Estudio Contable Privado",
    period: "Abril 2024 – Diciembre 2024",
    location: "Bahía Blanca, Buenos Aires",
    description: [
      "Relevamiento, análisis y organización de información en entornos digitales utilizando Python para automatización de tareas y procesamiento de datos.",
      "Gestión y consulta de bases de datos relacionales con MySQL y manejo de estructuras de datos.",
      "Soporte técnico y desarrollo de scripts para automatización de procesos internos.",
      "Uso de Git para control de versiones y gestión de cambios.",
      "Colaboración en el desarrollo de interfaces web con JavaScript y React.js.",
      "Trabajo con metodologías ágiles y documentación técnica en plataformas colaborativas.",
    ],
  },
  {
    role: "Proyectos Académicos",
    company: "Instituto Juan XXIII",
    period: "2023 – Presente",
    location: "Bahía Blanca, Buenos Aires",
    description: [
      "Desarrollo de aplicaciones web Full-Stack con JavaScript, HTML, CSS y consumo de APIs REST.",
      "Implementación de interfaces dinámicas y reactivas con React.js, Vue.js y Angular.",
      "Modelado y administración de bases de datos con MySQL y MongoDB.",
      "Escritura de scripts en Python para procesamiento y análisis de datos.",
      "Uso de Git y GitHub para control de versiones en equipo de 8 personas.",
      "Contenerización de proyectos con Docker para gestión de entornos de desarrollo.",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="bg-background py-24 px-8">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Experiencia
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-secondary border border-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-primary font-semibold text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-primary text-sm">{exp.period}</p>
                  <p className="text-muted-foreground text-sm">{exp.location}</p>
                </div>
              </div>

              {/* Lista de tareas */}
              <ul className="flex flex-col gap-2">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex gap-2 text-sm text-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience