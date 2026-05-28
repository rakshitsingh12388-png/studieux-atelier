'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  variant?: 'dark' | 'light'; // dark = on dark bg, light = on white bg
}

export default function Navbar({ variant = 'light' }: NavbarProps) {
  const pathname = usePathname();
  const textColor = variant === 'dark' ? 'text-[#888888]' : 'text-[#888888]';

  return (
    <nav className="w-full flex items-center justify-between px-[37px] py-[50px]">
      {/* Logo */}
      <Link href="/" className={`font-brand text-2xl tracking-[0.12em] ${textColor} hover:opacity-70 transition-opacity`}>
        STUDIEUX&nbsp; ATELIER
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-[50px] lg:gap-[192px]">
        <Link
          href="/index"
          className={`font-brand text-2xl tracking-[0.08em] ${textColor} hover:opacity-70 transition-opacity ${pathname === '/index' ? 'underline underline-offset-4' : ''}`}
        >
          INDEX
        </Link>
        <Link
          href="/gallery"
          className={`font-brand text-2xl tracking-[0.08em] ${textColor} hover:opacity-70 transition-opacity ${pathname === '/gallery' ? 'underline underline-offset-4' : ''}`}
        >
          GALLERY
        </Link>
        <Link
          href="/studio"
          className={`font-brand text-2xl tracking-[0.08em] ${textColor} hover:opacity-70 transition-opacity ${pathname === '/studio' ? 'underline underline-offset-4' : ''}`}
        >
          STUDIO
        </Link>
      </div>
    </nav>
  );
}
