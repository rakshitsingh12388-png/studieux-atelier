import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-bleed hero background */}
      <Image
        src="/images/hero-bg.png"
        alt="Studieux Atelier — aerial architectural photography"
        fill
        priority
        quality={95}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Very subtle dark overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Desktop navigation — top right */}
      <nav className="absolute top-0 right-0 hidden md:flex items-center gap-10 px-12 py-8">
        {[
          { href: '/work', label: 'INDEX' },
          { href: '/gallery', label: 'GALLERY' },
          { href: '/studio', label: 'STUDIO' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[0.75rem] tracking-[0.22em] text-white/80 hover:text-white transition-colors duration-300"
            style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile navigation — bottom center */}
      <nav className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-10 md:hidden">
        <div className="flex items-center gap-8">
          {[
            { href: '/work', label: 'INDEX' },
            { href: '/gallery', label: 'GALLERY' },
            { href: '/studio', label: 'STUDIO' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[0.72rem] tracking-[0.22em] text-white/80 hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  )
}
