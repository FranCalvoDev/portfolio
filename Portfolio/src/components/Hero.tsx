import { motion } from "framer-motion"
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem } from "../utils/animations"

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
             y construyo soluciones web modernas, escalables y con impacto real.
           Bilingüe —{" "}
            <span className="text-primary">Español / Inglés B2</span>.
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
            <a
              href="/cv.pdf"
              download
              className="border border-border text-foreground font-semibold px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition"
            >
              Descargar CV
            </a>
          </motion.div>

          {/* Links sociales */}
          <motion.div variants={fadeUp} className="flex gap-6">
            <a
              href="https://github.com/FranCalvoDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-md hover:text-primary transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-md hover:text-primary transition"
            >
              LinkedIn ↗
            </a>
          </motion.div>

        </motion.div>

        {/* Foto — entra desde la derecha con scale */}
        <motion.div
          className="flex justify-center items-center"
          variants={fadeRight}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={scaleIn}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary bg-secondary flex items-center justify-center"
          >
            {/* <img src="/foto.jpg" alt="Francisco Calvo" className="w-full h-full object-cover rounded-full" /> */}
            <span className="text-muted-foreground text-sm">Tu foto acá</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero