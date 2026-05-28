import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { galleryItems } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Gallery — Studieux Atelier',
  description: 'A curated gallery of architectural and interior design work by Studieux Atelier.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white page-enter">
      <Navbar />

      <main className="px-9 pb-24">
        {/* Spacer matching Figma */}
        <div className="h-16 md:h-20" />

        {/* Gallery grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="lg:pl-[clamp(120px,17%,248px)]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[14px]">
            {galleryItems.map((item, i) => (
              <Link
                key={i}
                href={`/projects/${item.projectSlug}`}
                className="group relative block overflow-hidden bg-[#f0eeeb]"
                style={{ aspectRatio: '288 / 210' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 288px"
                  className="object-cover transition-all duration-500 group-hover:scale-[1.03] grayscale group-hover:grayscale-0"
                />
                {/* Project name on hover */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/30 transition-all duration-400 flex items-end p-3">
                  <span
                    className="text-white text-[10px] tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                  >
                    {item.projectName.toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
