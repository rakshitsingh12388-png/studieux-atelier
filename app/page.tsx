import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-bleed hero — the Figma image has the pill bar baked in */}
      <Image
        src="/images/hero-bg.png"
        alt="Studieux Atelier"
        fill
        priority
        quality={100}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Clickable nav links — overlaid exactly on the right side of the pill */}
      <nav
        className="absolute hidden md:flex items-center gap-12"
        style={{
          top: '46%',
          transform: 'translateY(-50%)',
          right: '8%',
        }}
      >
        {[
          { href: '/work',    label: 'INDEX'   },
          { href: '/gallery', label: 'GALLERY' },
          { href: '/studio',  label: 'STUDIO'  },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[0.72rem] tracking-[0.2em] text-[#2a2a2a] hover:text-black transition-colors duration-200"
            style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile — bottom pill */}
      <nav className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-8 md:hidden">
        <div
          className="flex items-center gap-8 px-8 py-4 rounded-full"
          style={{ background: 'rgba(232,228,219,0.92)' }}
        >
          {[
            { href: '/work',    label: 'INDEX'   },
            { href: '/gallery', label: 'GALLERY' },
            { href: '/studio',  label: 'STUDIO'  },
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
