
import { useState } from 'react'
import {
  Code2,
  Database,
  Wrench,
  CheckCircle2,
} from 'lucide-react'

const skillGroups = {
  Frontend: {
    icon: Code2,
    description: 'Building responsive and interactive user interfaces.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'DaisyUI',
    ],
  },
  'Backend & Database': {
    icon: Database,
    description: 'Creating APIs and working with application data.',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'MongoDB Atlas',
      'REST APIs',
      'Better Auth',
    ],
  },
  'Tools & Deployment': {
    icon: Wrench,
    description: 'Managing code and deploying modern web projects.',
    skills: [
      'Git',
      'GitHub',
      'Vite',
      'npm',
      'Netlify',
      'Vercel',
      'VS Code',
    ],
  },
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const activeGroup = skillGroups[activeCategory]
  const ActiveIcon = activeGroup.icon

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d9488]">
            What I work with
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
            My Technical Skills
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Technologies and tools I use to turn ideas into functional,
            responsive, and user-friendly web experiences.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3"
          role="group"
          aria-label="Filter skills by category"
        >
          {Object.keys(skillGroups).map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 ${
                  isActive
                    ? 'bg-[#14213d] text-white shadow-lg shadow-slate-900/10'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-[#0d9488]'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div
          key={activeCategory}
          className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#0d9488]">
              <ActiveIcon size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#14213d]">
                {activeCategory}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                {activeGroup.description}
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {activeGroup.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-4 transition hover:border-teal-200 hover:bg-teal-50/60"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[#0d9488]"
                />

                <span className="text-sm font-medium text-slate-700">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
