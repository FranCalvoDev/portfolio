const Contact = () => {
  return (
    <section id="contact" className="bg-background py-24 px-8">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-primary mb-4 text-center">
          Contacto
        </h2>
        <p className="text-foreground text-center mb-12">
          ¿Tenés alguna propuesta o consulta? Escribime y te respondo a la brevedad.
        </p>

        {/* Formulario */}
        <form
          action="https://formspree.io/f/mkokgyld"
          method="POST"
          className="bg-secondary border border-border rounded-xl p-8 flex flex-col gap-6 mb-12"
        >
          <div className="flex flex-col gap-2">
            <label className="text-foreground text-sm font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Tu nombre"
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-foreground text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-foreground text-sm font-medium">Mensaje</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Escribí tu mensaje..."
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground border border-border px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/FranCalvoDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground border border-border px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition"
          >
            🐙 GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact