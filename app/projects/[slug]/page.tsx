import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { getProjectBySlug, getAllSlugs, projects } from '@/lib/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.name} — Studieux Atelier`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Studieux Atelier`,
      description: project.description,
      images: [project.heroImage],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const mono = { fontFamily: 'var(--font-anonymous-pro), monospace' }

  return (
    <div className="min-h-screen bg-white page-enter">
      <Navbar />

      <main className="pb-24">
        <div className="h-8 md:h-10" />

        {/* Two-column layout — matches Figma exactly */}
        <div className="flex gap-0">

          {/* Left column — architectural drawing, hidden on mobile */}
          <div
            className="hidden lg:flex flex-col flex-shrink-0 pl-9 pr-6"
            style={{ width: 'clamp(200px, 22%, 320px)' }}
          >
            {project.hasDrawing && project.drawingImage && (
              <div className="relative w-full mt-8" style={{ aspectRatio: '4/5' }}>
                <Image
                  src={project.drawingImage}
                  alt={`${project.name} — architectural drawing`}
                  fill
                  className="object-contain object-top"
                  sizes="320px"
                />
              </div>
            )}
          </div>

          {/* Right content column */}
          <div className="flex-1 min-w-0 px-9 lg:pl-0 lg:pr-16">

            {/* Project name + category + location — inline header row */}
            <div className="flex items-baseline gap-8 mb-4 flex-wrap">
              <h1
                className="text-[0.85rem] font-bold tracking-[0.1em] text-[#1a1a1a]"
                style={mono}
              >
                {project.displayName}
              </h1>
              <span
                className="text-[0.75rem] tracking-[0.1em] text-[#888]"
                style={mono}
              >
                {project.category}
              </span>
              <span
                className="text-[0.75rem] tracking-[0.1em] text-[#888]"
                style={mono}
              >
                {project.location}
              </span>
            </div>

            {/* Hero image */}
            <div
              className="relative w-full mb-5 overflow-hidden bg-[#f0eeeb]"
              style={{ aspectRatio: '1238 / 750' }}
            >
              <Image
                src={project.heroImage}
                alt={project.name}
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 78vw"
              />
            </div>

            {/* Project metadata — 2 column grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 mb-5 max-w-[780px]">
              <div>
                <p className="text-[0.65rem] tracking-[0.15em] text-[#1a1a1a] font-bold mb-0.5 uppercase" style={mono}>
                  Project Type
                </p>
                <p className="text-[0.8rem] text-[#555]" style={mono}>
                  {project.projectType}
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] tracking-[0.15em] text-[#1a1a1a] font-bold mb-0.5 uppercase" style={mono}>
                  Location
                </p>
                <p className="text-[0.8rem] text-[#555]" style={mono}>
                  {project.location}
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] tracking-[0.15em] text-[#1a1a1a] font-bold mb-0.5 uppercase" style={mono}>
                  Project Status
                </p>
                <p className="text-[0.8rem] text-[#555]" style={mono}>
                  {project.projectStatus}
                </p>
              </div>
              {project.siteArea && (
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] text-[#1a1a1a] font-bold mb-0.5 uppercase" style={mono}>
                    Site Area
                  </p>
                  <p className="text-[0.8rem] text-[#555]" style={mono}>
                    {project.siteArea}
                  </p>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-[#e8e6e2] mb-5 max-w-[780px]" />

            {/* Description */}
            {project.description && (
              <p
                className="text-[0.8rem] leading-[1.9] text-[#555] mb-10 max-w-[560px]"
                style={mono}
              >
                {project.description}
              </p>
            )}

            {/* Additional images */}
            {project.images.length > 1 && (
              <div className="space-y-4 max-w-[780px]">
                {project.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden bg-[#f0eeeb] ${img.full ? 'w-full' : 'w-full sm:w-[60%]'}`}
                    style={{ aspectRatio: img.full ? '16/9' : '4/3' }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Prev / Next navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-[#e8e6e2] max-w-[780px]">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex items-center gap-2 text-[0.72rem] tracking-[0.12em] text-[#888] hover:text-[#1a1a1a] transition-colors"
                  style={mono}
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  <span>{prevProject.name}</span>
                </Link>
              ) : <div />}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center gap-2 text-[0.72rem] tracking-[0.12em] text-[#888] hover:text-[#1a1a1a] transition-colors"
                  style={mono}
                >
                  <span>{nextProject.name}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ) : <div />}
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
