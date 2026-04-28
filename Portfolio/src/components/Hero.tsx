import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem } from "../utils/animations"

const photos = [
  "/Foto1.jpg",
  "/Foto2.jpg",
  "/Foto3.jpg",
]

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary overflow-hidden">
      {photos.map((photo, index) => (
        <img
          key={photo}
          src={photo}
          alt={`Francisco Calvo ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-background min-h-screen flex items-center px-8 pt-24"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto — entra desde la izquierda */}
        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Saludo + Nombre */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-1">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Hola, soy
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Francisco <br />
              <span className="text-primary">Calvo</span>
            </h1>
          </motion.div>

          {/* Título */}
          <motion.h2
            variants={fadeRight}
            className="gap-1 text-xl md:text-2xl text-muted-foreground font-medium"
          >
            -Desarrollador Web{" "}
            <span className="text-primary">Full-Stack </span> <br />
            -Analista de{" "}
            <span className="text-primary">Sistemas</span>
          </motion.h2>

          {/* Descripción */}
          <motion.p
            variants={fadeUp}
            className="text-foreground text-base leading-relaxed max-w-md"
          >
            Analizo y creo los requerimientos para convertirlos en soluciones. Como Analista en Sistemas y Desarrollador Full-Stack, diseño
            y construyo soluciones web modernas, escalables y eficientes.
            <span className="mt-2 block">
              Bilingüe —{" "}
              <span className="text-primary">Español / Inglés B2</span>.
            </span>
          </motion.p>

          {/* Badges */}
          <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
            {["Python", "JavaScript", "React.js", "MySQL", "Docker"].map(
              (tech) => (
                <motion.span
                  key={tech}
                  variants={staggerItem}
                  className="bg-secondary border border-border text-foreground text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
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
          </motion.div>

        </motion.div>

        {/* Foto + Botones — entra desde la derecha */}
        <motion.div
          className="flex flex-col items-center gap-6"
          variants={fadeRight}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={scaleIn}>
            <PhotoCarousel />
          </motion.div>

          {/* Pirámide de botones */}
<div className="flex flex-col items-center gap-3 w-full">

  {/* Punta — Descargar CV destacado */}
  <a
    href="/FranciscoCalvo-CV-(Español).pdf"
    download
    className="bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-center w-48"
  >
    Descargar CV
  </a>

  {/* Base — GitHub + LinkedIn más chicos */}
  <div className="flex gap-3">
    <a
      href="https://github.com/FranCalvoDev"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 border border-border text-foreground text-sm px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition"
    >
      🐙 GitHub ↗
    </a>
    <a
      href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 border border-border text-foreground text-sm px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition"
    >
      💼 LinkedIn ↗
    </a>
  </div>

</div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero