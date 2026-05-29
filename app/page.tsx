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

      {/* Nav links — positioned over the right side of the pill in the hero image */}
      <nav
        className="absolute right-12 hidden md:flex items-center gap-10"
        style={{ top: '22%' }}
      >
        {[
          { href: '/work', label: 'INDEX' },
          { href: '/gallery', label: 'GALLERY' },
          { href: '/studio', label: 'STUDIO' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[0.72rem] tracking-[0.22em] text-[#333] hover:text-black transition-colors duration-300"
            style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile navigation — bottom center */}
      <nav className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-8 md:hidden">
        <div
          className="flex items-center gap-8 px-8 py-4 rounded-full"
          style={{ background: 'rgba(232,228,219,0.92)' }}
        >
          {[
            { href: '/work', label: 'INDEX' },
            { href: '/gallery', label: 'GALLERY' },
            { href: '/studio', label: 'STUDIO' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-[0.2em] text-[#333] hover:text-black transition-colors"
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
