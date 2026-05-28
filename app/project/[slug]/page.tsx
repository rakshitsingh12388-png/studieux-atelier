import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { projects } from '../../data/projects';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pb-20">
        {/* Project Name + Small Hero - Two column layout */}
        <div className="px-[37px] md:px-[120px] flex flex-col md:flex-row gap-6 mb-8">
          {/* Left: Project Title */}
          <div className="md:w-[45%] flex flex-col justify-end pb-4">
            <h1 className="font-anonymous font-bold text-[18px] md:text-[20px] text-[#373737] tracking-[0.05em] uppercase">
              {project.name}
            </h1>
          </div>
          {/* Right: Small hero image */}
          <div className="md:w-[55%]">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '642/389' }}
            >
              <Image
                src={project.images.hero}
                alt={project.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Wide image */}
        {project.images.wide && (
          <div className="px-[37px] md:px-[120px] mb-8">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1238/750' }}>
              <Image
                src={project.images.wide}
                alt={`${project.name} overview`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Project details + medium image */}
        <div className="px-[37px] md:px-[120px] flex flex-col md:flex-row gap-6 mb-8">
          {/* Left: Project Info */}
          <div className="md:w-[45%] flex flex-col gap-5">
            <div>
              <p className="font-anonymous font-bold text-[14px] md:text-[18px] text-[#373737]">PROJECT TYPE</p>
              <p className="font-anonymous text-[14px] md:text-[18px] text-[#373737] mt-1">{project.projectType}</p>
            </div>
            <div>
              <p className="font-anonymous font-bold text-[14px] md:text-[18px] text-[#373737]">PROJECT STATUS</p>
              <p className="font-anonymous text-[14px] md:text-[18px] text-[#373737] mt-1">{project.status}</p>
            </div>
            <div>
              <p className="font-anonymous font-bold text-[14px] md:text-[18px] text-[#373737]">LOCATION</p>
              <p className="font-anonymous text-[14px] md:text-[18px] text-[#373737] mt-1">{project.location}</p>
            </div>
            {project.siteArea && (
              <div>
                <p className="font-anonymous font-bold text-[14px] md:text-[18px] text-[#373737]">SITE AREA</p>
                <p className="font-anonymous text-[14px] md:text-[18px] text-[#373737] mt-1">{project.siteArea}</p>
              </div>
            )}
            {/* Description */}
            <div className="mt-4">
              <p className="font-anonymous text-[14px] md:text-[18px] text-[#888888] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Right: Portrait image */}
          {project.images.portrait && (
            <div className="md:w-[55%]">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '824/499' }}>
                <Image
                  src={project.images.portrait}
                  alt={`${project.name} detail`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Additional images */}
        {(project.images.medium || project.images.extra) && (
          <div className="px-[37px] md:px-[120px] flex flex-col md:flex-row gap-6 mb-8">
            {project.images.medium && (
              <div className="md:w-1/2">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '786/476' }}>
                  <Image
                    src={project.images.medium}
                    alt={`${project.name} view`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            {project.images.extra && (
              <div className="md:w-1/2">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '642/389' }}>
                  <Image
                    src={project.images.extra}
                    alt={`${project.name} extra`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Prev / Next Navigation */}
        <div className="px-[37px] md:px-[120px] mt-16 flex justify-between items-center border-t border-black pt-6">
          {prevProject ? (
            <Link
              href={`/project/${prevProject.slug}`}
              className="font-anonymous text-[14px] md:text-[16px] text-[#888888] hover:opacity-60 transition-opacity"
            >
              ← {prevProject.name}
            </Link>
          ) : <span />}
          <Link
            href="/index"
            className="font-brand text-[18px] tracking-[0.1em] text-[#888888] hover:opacity-60 transition-opacity"
          >
            INDEX
          </Link>
          {nextProject ? (
            <Link
              href={`/project/${nextProject.slug}`}
              className="font-anonymous text-[14px] md:text-[16px] text-[#888888] hover:opacity-60 transition-opacity"
            >
              {nextProject.name} →
            </Link>
          ) : <span />}
        </div>
      </main>
    </div>
  );
}
