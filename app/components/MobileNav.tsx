'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Header */}
      <nav className="w-full flex items-center justify-between px-5 py-8 md:hidden">
        <Link href="/" className="font-brand text-xl tracking-[0.12em] text-[#888888]">
          STUDIEUX&nbsp; ATELIER
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-[#888888] flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#888888] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#888888] transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#888888] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-12 md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-5 text-[#888888] text-2xl"
          >
            ✕
          </button>
          {[
            { href: '/index', label: 'INDEX' },
            { href: '/gallery', label: 'GALLERY' },
            { href: '/studio', label: 'STUDIO' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-brand text-3xl tracking-[0.15em] text-[#888888] hover:opacity-60 ${pathname === item.href ? 'underline underline-offset-4' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
