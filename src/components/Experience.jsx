
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  CalendarDays,
} from 'lucide-react'

const experiences = [
  {
    type: 'Education',
    title: 'Computer Engineering',
    organization: 'Daffodil International University',
    period: '2021',
    description:
      'Academic background in computing and technology, supporting my journey into modern web development.',
    icon: GraduationCap,
  },
  {
    type: 'Professional Experience',
    title: 'Front-End Web Developer',
    organization: 'Softnio IT',
    period: 'Previous experience',
    description:
      'Worked on web development and responsive interface projects, including contributions to web templates.',
    icon: BriefcaseBusiness,
  },
  {
    type: 'Project Experience',
    title: 'Modern Web Application Development',
    organization: 'Personal & Academic Projects',
    period: 'Recent projects',
    description:
      'Built DevStack, FitLog, and Bazar Dor using modern frontend technologies, with experience in application structure, responsive UI, and database integration.',
    icon: Code2,
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d9488]">
            My journey
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
            Education & Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            My academic foundation, professional experience, and
            continued growth as a web developer.
          </p>
        </div>

        <div className="relative mt-12 space-y-6 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-slate-200 sm:before:left-8">
          {experiences.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="relative flex gap-4 sm:gap-6"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-white text-[#0d9488] shadow-sm sm:h-16 sm:w-16">
                  <Icon size={24} />
                </div>

                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                      {item.type}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <CalendarDays size={13} />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#14213d] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-medium text-[#0d9488]">
                    {item.organization}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
