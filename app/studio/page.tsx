import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function StudioPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Studio Hero Image - full width */}
      <div className="relative w-full overflow-hidden" style={{ height: '400px', maxHeight: '500px' }}>
        <Image
          src="/images/studio-hero.png"
          alt="Studieux Atelier Studio"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Studio Content */}
      <main className="px-[37px] md:px-[37px] pb-20">
        <div className="max-w-[1366px] mx-auto">

          {/* WHAT WE DO */}
          <section className="mt-16 md:mt-20">
            <h2 className="font-brand text-2xl tracking-[0.15em] text-[#888888] mb-8">WHAT WE DO</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div>
                <p className="font-anonymous text-[16px] md:text-[18px] text-[#888888] leading-relaxed">
                  Studieux Atelier is a multidisciplinary design studio working across architecture,
                  interior design, and landscape. We approach each project as a dialogue—between the
                  land and its inhabitants, between form and function, between permanence and change.
                </p>
              </div>
              <div>
                <p className="font-anonymous text-[16px] md:text-[18px] text-[#888888] leading-relaxed">
                  Our work spans residential, commercial, hospitality, and landscape projects.
                  Each design is rooted in its context, shaped by the specifics of site, programme,
                  and the lives it will hold.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-[#dddddd] mt-16" />

          {/* PEOPLE */}
          <section className="mt-16">
            <h2 className="font-brand text-2xl tracking-[0.15em] text-[#888888] mb-10">PEOPLE</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <p className="font-anonymous text-[18px] md:text-[20px] text-[#373737] font-bold mb-2">
                  Animesh Aggarwal
                </p>
                <p className="font-anonymous text-[16px] text-[#888888] leading-relaxed">
                  Principal Architect & Founder
                </p>
                <p className="font-anonymous text-[14px] text-[#888888] mt-4 leading-relaxed">
                  With a background in architecture and a passion for materials and making,
                  Animesh leads the studio's design vision and project direction.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-[#dddddd] mt-16" />

          {/* AWARDS */}
          <section className="mt-16">
            <h2 className="font-brand text-2xl tracking-[0.15em] text-[#888888] mb-10">AWARDS</h2>
            <div>
              <p className="font-anonymous text-[16px] md:text-[18px] text-[#888888] leading-relaxed">
                Animesh Aggarwal
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-[#dddddd] mt-16" />

          {/* CONTACT */}
          <section className="mt-16">
            <h2 className="font-brand text-2xl tracking-[0.15em] text-[#888888] mb-10">CONTACT</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-anonymous text-[16px] md:text-[18px] text-[#373737] leading-relaxed">
                  Studieux Atelier<br />
                  B-4/49, Sector-18, Rohini<br />
                  New Delhi, Delhi-110085
                </p>
              </div>
              <div>
                <p className="font-anonymous text-[16px] md:text-[18px] text-[#373737] leading-relaxed">
                  {/* Email / Phone placeholder */}
                  studio@studieuxatelier.com
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
