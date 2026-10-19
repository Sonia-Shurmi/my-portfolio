import { useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  X,
} from 'lucide-react'


const projects = [
  {
    id: 'devstack',
    name: 'DevStack',
    category: 'Frontend Development',
    description:
      'A responsive technology discovery application built with React and modern UI tools.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'DaisyUI'],
    liveUrl: 'https://devstack-assignment.netlify.app/',
    githubUrl: 'https://github.com/Sonia-Shurmi/devstack',
    color: 'from-teal-50 to-cyan-100',
    iconColor: 'text-teal-700',
    icon: 'DS',
  },
  {
    id: 'fitlog',
    name: 'FitLog',
    category: 'Fitness Web Application',
    description:
      'A fitness planning application built with Next.js and TypeScript.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://a6-fitlog1.vercel.app/',
    githubUrl: 'https://github.com/Sonia-Shurmi/a6-fitlog',
    color: 'from-lime-50 to-emerald-100',
    iconColor: 'text-emerald-800',
    icon: 'FL',
  },
  {
    id: 'bazar-dor',
    name: 'Bazar Dor',
    category: 'Full-Stack Web Application',
    description:
      'A marketplace application using Next.js, authentication, and MongoDB.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Better Auth'],
    liveUrl: 'https://bajar-dor-rosy.vercel.app/',
    githubUrl: 'https://github.com/Sonia-Shurmi/bajar-dor',
    color: 'from-green-50 to-lime-100',
    iconColor: 'text-green-800',
    icon: 'BD',
  },
]


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d9488]">
              Selected work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              A selection of projects where I've practiced building
              modern, responsive web applications.
            </p>
          </div>

          <span className="text-sm font-medium text-slate-500">
            {projects.length} projects
          </span>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div
                className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
              >
                <div className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 backdrop-blur">
                  {project.category}
                </div>

                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-3xl border border-white/80 bg-white/70 text-4xl font-black tracking-tight shadow-sm transition duration-300 group-hover:scale-110 ${project.iconColor}`}
                >
                  {project.icon}
                </div>

                <Code2
                  size={24}
                  className="absolute bottom-4 right-4 text-slate-500/60"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#14213d]">
                  {project.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#14213d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d9488]"
                  >
                    View details
                    <ArrowUpRight size={16} />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} live demo`}
                      className="rounded-lg border border-slate-200 p-2.5 text-slate-600 transition hover:border-teal-300 hover:text-[#0d9488]"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} GitHub repository`}
                      className="rounded-lg border border-slate-200 p-2.5 text-slate-600 transition hover:border-teal-300 hover:text-[#0d9488]"
                    >
                      <Code2 size={17} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="my-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#0d9488]">
                  {selectedProject.category}
                </p>

                <h3
                  id="project-modal-title"
                  className="mt-2 text-2xl font-bold text-[#14213d]"
                >
                  {selectedProject.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              {selectedProject.description}
            </p>

            <h4 className="mt-6 font-bold text-[#14213d]">
              Challenge
            </h4>
            <p className="mt-2 leading-7 text-slate-600">
              {selectedProject.challenge}
            </p>

            <h4 className="mt-5 font-bold text-[#14213d]">
              Implementation
            </h4>
            <p className="mt-2 leading-7 text-slate-600">
              {selectedProject.solution}
            </p>

            <h4 className="mt-5 font-bold text-[#14213d]">
              Technology stack
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {selectedProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg bg-teal-50 px-3 py-2 text-sm font-medium text-teal-800"
                >
                  {technology}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="mt-8 w-full rounded-xl bg-[#14213d] px-5 py-3 font-semibold text-white transition hover:bg-[#0d9488]"
            >
              Close details
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
