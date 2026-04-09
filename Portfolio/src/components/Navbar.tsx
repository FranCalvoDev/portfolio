import { useEffect, useState } from 'react'

const links = [
  { label: 'S', href: '#skills', title: 'Skills' },
  { label: 'P', href: '#projects', title: 'Proyectos' },
  { label: 'E', href: '#experience', title: 'Experiencia' },
  { label: 'C', href: '#contact', title: 'Contacto' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navbar normal */}
      <nav className={`fixed top-0 left-0 w-full bg-secondary z-50 px-8 py-4 flex justify-between items-center shadow-md transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <span className="text-accent font-bold text-xl">Francisco Calvo</span>
        <ul className="flex gap-6 text-sm text-slate-300">
          <li><a href="#skills" className="hover:text-accent transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-accent transition">Proyectos</a></li>
          <li><a href="#experience" className="hover:text-accent transition">Experiencia</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Contacto</a></li>
        </ul>
      </nav>

      {/* Círculos flotantes */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 transition-all duration-500 ${scrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            title={link.title}
            className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow-lg hover:scale-110 transition-transform"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}

export default Navbar