import { useEffect, useState } from "react"

const links = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Sticky shadow al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detectar sección activa
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Cerrar menú al hacer click en un link
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-secondary transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/30 border-b border-border" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo / Nombre */}
        <a
          href="#home"
          className="text-primary font-bold text-xl hover:opacity-80 transition"
        >
          Francisco Calvo 
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 relative pb-1
                  ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }
                `}
              >
                {link.label}
                {/* Indicador de sección activa */}
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa — solo mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

      </div>

      {/* Menú mobile desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-8 py-4 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className={`block text-sm font-medium py-2 transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar