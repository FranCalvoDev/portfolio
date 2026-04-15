const Hero = () => {
  return (
    <section
      id="home"
      className="bg-background min-h-screen flex items-center px-8"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="flex flex-col gap-6">

          {/* Saludo */}
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Hola, soy
          </span>

          {/* Nombre */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Francisco <br />
            <span className="text-primary">Calvo</span>
          </h1>

          {/* Título */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Desarrollador Web{" "}
            <span className="text-primary">Full-Stack</span>
          </h2>

          {/* Descripción */}
          <p className="text-foreground text-base leading-relaxed max-w-md">
            Técnico Analista en Sistemas con experiencia en desarrollo
            Full-Stack. Construyo soluciones web modernas, escalables y con
            buenas prácticas. Bilingüe —{" "}
            <span className="text-primary">Español / Inglés B2</span>.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {["Python", "JavaScript", "React.js", "MySQL", "Docker"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-secondary border border-border text-foreground text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition"
            >
              Contactame
            </a>
            <a
              href="/cv.pdf"
              download
              className="border border-border text-foreground font-semibold px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition"
            >
              Descargar CV
            </a>
          </div>

          {/* Links sociales */}
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/FranCalvoDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-primary transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-primary transition"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>

        {/* Foto */}
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary bg-secondary flex items-center justify-center">
            {/* Reemplazá esto por tu foto: */}
            {/* <img src="/foto.jpg" alt="Francisco Calvo" className="w-full h-full object-cover rounded-full" /> */}
            <span className="text-muted-foreground text-sm">Tu foto acá</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero