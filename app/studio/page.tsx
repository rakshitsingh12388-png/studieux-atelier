import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Studio — Studieux Atelier',
  description: 'About Studieux Atelier — an architecture and interior design studio based in Dehradun.',
}

const team = [
  { name: 'Animesh Aggarwal', role: 'Principal Architect' },
  { name: 'Pooja Swami', role: 'Associate Architect' },
  { name: 'Icha Kaur', role: 'Senior Architect' },
  { name: 'Khushi Bhatnagar', role: 'Senior Architect' },
  { name: 'Rishi Chettri', role: 'Junior Architect' },
  { name: 'Jasmine Kaur', role: 'Junior Architect' },
  { name: 'Nidhi', role: 'Drafting Professional' },
  { name: 'Rakshit Singh', role: 'UIUX Intern' },
  { name: 'Neeraj Biswas', role: 'Interior Design Intern' },
  { name: 'Janhavi Singh', role: 'Interior Design Intern' },
]

const awards = [
  'IIID Regional Design Award 2023',
  'Times 40 Under 40 — Architecture',
  'Design Excellence Recognition — FOAID 2022',
  'Best Hospitality Interior — Design Journal 2023',
  'Emerging Studio of the Year — India Design Forum',
  'Architecture + Design Award for Residential 2021',
]

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-white page-enter">
      <Navbar />

      <main>
        {/* Studio hero image */}
        <div
          className="relative overflow-hidden"
          style={{ marginLeft: 'clamp(160px, 17%, 248px)', marginRight: 0 }}
        >
          <div className="relative w-full" style={{ aspectRatio: '1238 / 570' }}>
            <Image
              src="/images/studio.png"
              alt="Studieux Atelier Studio"
              fill
              priority
              quality={90}
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 83vw"
            />
          </div>
        </div>

        {/* Content sections */}
        <div
          className="pt-16 pb-24 space-y-16"
          style={{ paddingLeft: 'clamp(160px, 17%, 248px)' }}
        >
          {/* WHAT WE DO */}
          <section className="grid grid-cols-[200px_1fr] gap-8 items-start max-w-[900px]">
            <span
              className="text-xs tracking-[0.15em] text-[#1a1a1a] font-bold pt-1"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              WHAT WE DO
            </span>
            <p
              className="text-[0.95rem] leading-[1.75] text-[#444]"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              At Studieux Atelier, we design spaces that are not just built — but deeply experienced.
              <br />
              Our work blends architecture, interiors, and spatial storytelling to create environments
              that feel timeless, functional, and emotionally rich.
            </p>
          </section>

          {/* PEOPLE */}
          <section className="grid grid-cols-[200px_1fr] gap-8 items-start max-w-[900px]">
            <span
              className="text-xs tracking-[0.15em] text-[#1a1a1a] font-bold pt-1"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              PEOPLE
            </span>
            <div className="w-full">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline py-[9px] border-b border-[#e8e6e2]"
                >
                  <span
                    className="text-[0.9rem] text-[#444]"
                    style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                  >
                    {member.name}
                  </span>
                  <span
                    className="text-[0.9rem] text-[#888]"
                    style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                  >
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* AWARDS */}
          <section className="grid grid-cols-[200px_1fr] gap-8 items-start max-w-[900px]">
            <span
              className="text-xs tracking-[0.15em] text-[#1a1a1a] font-bold pt-1"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              AWARDS
            </span>
            <div className="w-full">
              {awards.map((award, i) => (
                <div key={i} className="py-[9px] border-b border-[#e8e6e2]">
                  <span
                    className="text-[0.9rem] text-[#444]"
                    style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
                  >
                    {award}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="grid grid-cols-[200px_1fr] gap-8 items-start max-w-[900px]">
            <span
              className="text-xs tracking-[0.15em] text-[#1a1a1a] font-bold pt-1"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              CONTACT
            </span>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[0.9rem] text-[#444] leading-[1.8]"
              style={{ fontFamily: 'var(--font-anonymous-pro), monospace' }}
            >
              <div>
                <p>Studieux Atelier</p>
                <p>B-4/49, Sector-18, Rohini</p>
                <p>New Delhi, Delhi-110085</p>
                <br />
                <p>Studieux Atelier</p>
                <p>Near Suri Chawk,</p>
                <p>Dehradun,</p>
                <p>Uttrakhand-248001</p>
              </div>
              <div>
                <p className="text-[#888] text-xs tracking-[0.1em] mb-1">Email</p>
                <a
                  href="mailto:studieuxatelier@gmail.com"
                  className="hover:text-[#1a1a1a] transition-colors"
                >
                  studieuxatelier@gmail.com
                </a>
                <br /><br />
                <p className="text-[#888] text-xs tracking-[0.1em] mb-1">Phone</p>
                <a href="tel:+91" className="hover:text-[#1a1a1a] transition-colors">
                  +91 xxxxx xxxxx
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
