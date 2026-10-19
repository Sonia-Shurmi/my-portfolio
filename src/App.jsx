import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const technologies = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8fafc]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14213d] text-white">
            <Code2 size={21} />
          </span>

          <span className="text-lg font-bold tracking-tight text-[#14213d]">
            Sonia<span className="text-[#0d9488]">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#0d9488]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#14213d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d9488]"
          >
            Let's talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#14213d] md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-slate-600 transition hover:bg-teal-50 hover:text-[#0d9488]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-[#14213d] px-4 py-3 text-center font-semibold text-white"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
    
function Hero() {
  return (
    <section
      id="home"
      className="bg-[#f8fafc] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: Introduction */}
        <div className="order-2 md:order-1">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#0d9488]">
            <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
            Open to opportunities
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#14213d] sm:text-5xl lg:text-6xl">
            Building modern web experiences.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            Hi, I'm Sonia Akter, a web developer passionate about
            creating responsive, user-friendly applications with
            modern web technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-[#0d9488] px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              View Projects
              <span className="ml-2" aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-[#14213d] transition hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Your professional photo */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-[#0d9488]/15" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
              <img
                src="/sonia-profile.png"
                alt="Sonia Akter, web developer"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <main>
        <Hero />

        <section
          id="about"
          className="scroll-mt-24 border-t border-slate-200 bg-white px-5 py-16 text-center sm:px-8"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0d9488]">
            A little more about me
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[#14213d]">
            Turning curiosity into code.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            I enjoy learning modern web technologies and building useful,
            accessible, and responsive digital products.
          </p>
        </section>

        <Skills />

        <Projects />
        <Experience/>

        
<section
  id="contact"
  className="scroll-mt-24 border-t border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
>
  <div className="mx-auto max-w-4xl rounded-3xl bg-[#14213d] px-6 py-12 text-center sm:px-12 sm:py-16">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
      Get in touch
    </p>

    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Let's build something meaningful.
    </h2>

    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
      I'm interested in opportunities to build modern, responsive web
      applications and collaborate with people who value thoughtful design
      and clean development.
    </p>

    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=msakter93@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-400"
>
  <Mail size={18} />
  Contact Me
  <ArrowUpRight size={18} />
</a>

    <p className="mt-5 text-sm text-slate-300">
      msakter93@gmail.com
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <a
        href="https://github.com/Sonia-Shurmi"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm text-white transition hover:border-teal-400 hover:text-teal-300"
      >
        <Code2 size={17} />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/mst-sonia-akter-7b4a12a8/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm text-white transition hover:border-teal-400 hover:text-teal-300"
      >
        LinkedIn
        <ArrowUpRight size={16} />
      </a>
    </div>
  </div>
</section>

      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sonia Akter. Built with React & Tailwind CSS.
      </footer>
    </div>
  )
}

export default App
