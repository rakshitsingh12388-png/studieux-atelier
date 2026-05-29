'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/work', label: 'INDEX' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/studio', label: 'STUDIO' },
  ]

  return (
    <nav className="w-full flex items-center justify-between px-9 py-5 bg-white">
      <Link
        href="/"
        className="nav-link text-sm tracking-[0.2em] text-[#555] hover:text-[#1a1a1a] transition-colors duration-300"
        style={{ fontFamily: 'var(--font-inter), Helvetica Neue, sans-serif', fontWeight: 300 }}
      >
        STUDIEUX&nbsp; ATELIER
      </Link>

      <div className="flex items-center gap-12">
        {links.map(({ href, label }) => {
          const isActive =
            pathname === href || (href !== '/' && pathname.startsWith(href))

          return (
            <Link
              key={href}
              href={href}
              className={`nav-link text-sm tracking-[0.2em] transition-colors duration-300 ${
                isActive ? 'text-[#1a1a1a]' : 'text-[#888] hover:text-[#1a1a1a]'
              }`}
              style={{ fontFamily: 'var(--font-inter), Helvetica Neue, sans-serif', fontWeight: 300 }}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
