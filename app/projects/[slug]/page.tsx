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

  return (
    <div className="min-h-screen bg-white page-enter">
      <Navbar />

      <main className="pb-24">
        {/* Vertical spacer */}
        <div className="h-10 md:h-12" />

        {/* Project layout: left drawing area + right content */}
        <div className="flex gap-0">
          {/* Left column — architectural drawing / empty */}
          <div
            className="hidden lg:block flex-shrink-0"
            style={{ width: 'clamp(120px, 17%, 248px)', paddingLeft: '36px', paddingRight: '24px' }}
          >
            {project.hasDrawing && project.drawingImage && (
              <div className="relative w-full mt-8" style={{ aspectRatio: '4/5' }}>
                <Image
                  src={project.drawingImage}
                  alt={`${project.name} — architectural drawing`}
                  fill
                  className="object-contain object-top"
                  sizes="248px"
                />
              </div>
            )}
          </div>

          {/* Right content column */}
          <div className="flex-1 min-w-0 pr-9 lg:pr-16">
            {/* Project name */}
            <h1
              className="text-[1.1rem] font-bold tracking-[0.08em] text-[#1a1a1a] mb-4"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              {project.displayName}
            </h1>

            {/* Hero image */}
            <div
              className="relative w-full mb-6 overflow-hidden"
              style={{ aspectRatio: '1238 / 750', maxWidth: '100%' }}
            >
              <Image
                src={project.heroImage}
                alt={project.name}
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 83vw"
              />
            </div>

            {/* Project metadata grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-6 max-w-[860px]">
              <div>
                <p
                  className="text-xs tracking-[0.12em] text-[#1a1a1a] font-bold mb-1"
                  style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                >
                  PROJECT TYPE
                </p>
                <p
                  className="text-[0.9rem] text-[#555]"
                  style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                >
                  {project.projectType}
                </p>
              </div>

              <div>
                <p
                  className="text-xs tracking-[0.12em] text-[#1a1a1a] font-bold mb-1"
                  style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                >
                  LOCATION
                </p>
                <p
                  className="text-[0.9rem] text-[#555]"
                  style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                >
                  {project.location}
                </p>
              </div>

              <div>
                <p
                  className="text-xs tracking-[0.12em] text-[#1a1a1a] font-bold mb-1"
                  style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                >
                  PROJECT STATUS
                </p>
                <p
                  className="text-[0.9rem] text-[#555]"
                  style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                >
                  {project.projectStatus}
                </p>
              </div>

              {project.siteArea && (
                <div>
                  <p
                    className="text-xs tracking-[0.12em] text-[#1a1a1a] font-bold mb-1"
                    style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                  >
                    SITE AREA
                  </p>
                  <p
                    className="text-[0.9rem] text-[#555]"
                    style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                  >
                    {project.siteArea}
                  </p>
                </div>
              )}
            </div>

            {/* Horizontal rule */}
            <div className="border-t border-[#e8e6e2] mb-6 max-w-[860px]" />

            {/* Description */}
            {project.description && (
              <p
                className="text-[0.9rem] leading-[1.8] text-[#555] mb-10 max-w-[620px]"
                style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
              >
                {project.description}
              </p>
            )}

            {/* Additional images */}
            {project.images.length > 1 && (
              <div className="space-y-5 max-w-[860px]">
                {project.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden ${img.full ? 'w-full' : 'w-full sm:w-[55%]'}`}
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
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-[#e8e6e2] max-w-[860px]">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex items-center gap-2 text-[0.8rem] tracking-[0.1em] text-[#888] hover:text-[#1a1a1a] transition-colors"
                  style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  <span>{prevProject.name}</span>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center gap-2 text-[0.8rem] tracking-[0.1em] text-[#888] hover:text-[#1a1a1a] transition-colors"
                  style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                >
                  <span>{nextProject.name}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
