import type { Metadata } from 'next'
import { Inter, Anonymous_Pro, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
})

const anonymousPro = Anonymous_Pro({
  variable: '--font-anonymous-pro',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://studieuxatelier.com'),
  title: 'Studieux Atelier — Architecture & Interior Design',
  description:
    'Studieux Atelier designs spaces that are not just built — but deeply experienced. Architecture, interiors, and spatial storytelling from Dehradun, India.',
  keywords: 'architecture, interior design, Dehradun, India, residential, commercial, hospitality',
  openGraph: {
    title: 'Studieux Atelier',
    description: 'Architecture & Interior Design Studio',
    type: 'website',
    images: ['/images/hero-bg.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anonymousPro.variable} ${poppins.variable} h-full`}
    >
      <body className="min-h-full bg-white text-stone-900 antialiased">{children}</body>
    </html>
  )
}
