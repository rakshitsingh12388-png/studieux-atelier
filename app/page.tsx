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

      {/* Dark overlay — subtle, preserves the B&W aesthetic */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Navigation pill — centered horizontally, roughly at 40% from top */}
      <div className="absolute inset-0 flex items-center justify-end px-0">
        <nav
          className="flex items-center h-[72px] pr-0"
          style={{ width: 'clamp(560px, 65vw, 900px)', marginRight: 0 }}
        >
          {/* Pill container — extends to right edge */}
          <div
            className="flex items-center h-full w-full rounded-l-full overflow-hidden"
            style={{ background: 'rgba(232,228,219,0.92)', backdropFilter: 'blur(8px)' }}
          >
            {/* Circle logo mark */}
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#1a1a1a] mx-6"
              style={{ width: '44px', height: '44px' }}
            >
              <span
                className="text-white text-[10px] font-light tracking-widest"
                style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.1em' }}
              >
                SA
              </span>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Nav links */}
            <div className="flex items-center gap-10 pr-12">
              {[
                { href: '/index', label: 'INDEX' },
                { href: '/gallery', label: 'GALLERY' },
                { href: '/studio', label: 'STUDIO' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm tracking-[0.2em] text-[#333] hover:text-black transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 300 }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile navigation — visible only on small screens */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-8 md:hidden">
        <div
          className="flex items-center gap-8 px-8 py-4 rounded-full"
          style={{ background: 'rgba(232,228,219,0.92)' }}
        >
          {[
            { href: '/index', label: 'INDEX' },
            { href: '/gallery', label: 'GALLERY' },
            { href: '/studio', label: 'STUDIO' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-[0.2em] text-[#333] hover:text-black transition-colors"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 300 }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
