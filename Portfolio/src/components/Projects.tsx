const projects = [
  {
    title: "SneakerHub",
    description:
      "Aplicación web de e-commerce orientada a la venta de zapatillas. Desarrollo Full-Stack con interfaz dinámica y gestión de productos.",
    techs: ["JavaScript", "React.js", "MySQL", "CSS"],
    github: "https://github.com/FranCalvoDev/SneakerHub-Final",
    demo: null,
    status: "finished",
  },
  {
    title: "Portfolio Personal",
    description:
      "Portfolio profesional desarrollado con React y TypeScript. Muestra de proyectos, habilidades y experiencia laboral.",
    techs: ["React.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/FranCalvoDev/Portfolio",
    demo: null,
    status: "finished",
  },
  {
    title: "Migración de Software PHP",
    description:
      "Migración y modernización de sistema legacy desarrollado en PHP. Proyecto en proceso de desarrollo activo.",
    techs: ["PHP", "MySQL", "JavaScript"],
    github: null,
    demo: null,
    status: "inprogress",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-background py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-secondary border border-border rounded-xl p-6 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-primary font-semibold text-lg">
                    {project.title}
                  </h3>
                  {project.status === "inprogress" && (
                    <span className="text-xs bg-muted text-primary border border-primary px-2 py-1 rounded-full">
                      En proceso
                    </span>
                  )}
                </div>
                <p className="text-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-foreground text-xs px-3 py-1 rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition"
                  >
                    Demo
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span className="text-xs text-muted-foreground italic">
                    Links disponibles próximamente
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects