import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Index — Studieux Atelier',
  description: 'Full index of projects by Studieux Atelier — architecture, interiors, and spatial storytelling.',
}

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white page-enter">
      <Navbar />

      <main className="px-9 pb-24">
        {/* Large vertical spacer — matches Figma design */}
        <div className="h-32 md:h-40 lg:h-48" />

        {/* Column headers */}
        <div
          className="grid grid-cols-[1fr_1fr_1fr] gap-x-4 pb-3 mb-1"
          style={{ paddingLeft: 'clamp(160px, 17%, 248px)' }}
        >
          {['PROJECT', 'CATEGORY', 'LOCATION'].map((header) => (
            <span
              key={header}
              className="text-xs tracking-[0.15em] text-[#1a1a1a] font-bold"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              {header}
            </span>
          ))}
        </div>

        {/* Project rows */}
        <div
          className="flex flex-col"
          style={{ paddingLeft: 'clamp(160px, 17%, 248px)' }}
        >
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="grid grid-cols-[1fr_1fr_1fr] gap-x-4 py-[10px] border-b border-[#e8e6e2] group hover:bg-[#f9f8f6] transition-colors duration-200 -mx-3 px-3"
            >
              <span
                className="text-[1.05rem] text-[#555] group-hover:text-[#1a1a1a] transition-colors duration-200 truncate pr-4"
                style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 300 }}
              >
                {project.name}
              </span>
              <span
                className="text-[1.05rem] text-[#555] group-hover:text-[#1a1a1a] transition-colors duration-200 truncate pr-4"
                style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 300 }}
              >
                {project.category}
              </span>
              <span
                className="text-[1.05rem] text-[#555] group-hover:text-[#1a1a1a] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 300 }}
              >
                {project.location}
              </span>
            </Link>
          ))}
        </div>

        <div className="h-16" />
      </main>
    </div>
  )
}
