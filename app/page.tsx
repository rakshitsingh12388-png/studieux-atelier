import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Hero Background Image */}
      <Image
        src="/images/hero-landing.png"
        alt="Studieux Atelier"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Centered Navigation - exactly as in Figma: nav items at ~47% vertical */}
      <nav className="absolute inset-0 flex flex-col items-center justify-center gap-0">
        {/* Logo top left on desktop, centered on mobile */}
        <Link
          href="/"
          className="absolute top-[50px] left-[37px] font-brand text-2xl tracking-[0.12em] text-[#888888] hover:opacity-70 transition-opacity hidden md:block"
        >
          STUDIEUX&nbsp; ATELIER
        </Link>

        {/* Mobile Logo */}
        <Link
          href="/"
          className="absolute top-8 left-5 font-brand text-xl tracking-[0.12em] text-[#888888] hover:opacity-70 transition-opacity md:hidden"
        >
          STUDIEUX&nbsp; ATELIER
        </Link>

        {/* Desktop Nav - centered horizontally at mid-page */}
        <div className="hidden md:flex items-center gap-[62px] lg:gap-[192px]">
          <Link
            href="/index"
            className="font-brand text-2xl tracking-[0.08em] text-[#888888] hover:opacity-70 transition-opacity"
          >
            INDEX
          </Link>
          <Link
            href="/gallery"
            className="font-brand text-2xl tracking-[0.08em] text-[#888888] hover:opacity-70 transition-opacity"
          >
            GALLERY
          </Link>
          <Link
            href="/studio"
            className="font-brand text-2xl tracking-[0.08em] text-[#888888] hover:opacity-70 transition-opacity"
          >
            STUDIO
          </Link>
        </div>

        {/* Mobile Nav - centered */}
        <div className="flex flex-col items-center gap-10 md:hidden mt-20">
          {[
            { href: '/index', label: 'INDEX' },
            { href: '/gallery', label: 'GALLERY' },
            { href: '/studio', label: 'STUDIO' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-brand text-2xl tracking-[0.15em] text-[#888888] hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
