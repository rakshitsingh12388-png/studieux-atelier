import Link from 'next/link';
import Navbar from '../components/Navbar';
import { projects } from '../data/projects';

export default function IndexPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Project List Table */}
      <main className="px-[37px] md:px-[37px] pb-20">
        {/* Header Row */}
        <div className="w-full max-w-[1055px] mx-auto">
          {/* Column Headers */}
          <div className="flex items-center py-2 mb-1">
            <div className="w-[40%] md:w-[35%]">
              <span className="font-anonymous text-[20px] md:text-[24px] text-[#373737] tracking-[0.05em]">
                PROJECT
              </span>
            </div>
            <div className="w-[35%] md:w-[35%]">
              <span className="font-anonymous text-[20px] md:text-[24px] text-[#373737] tracking-[0.05em]">
                CATEGORY
              </span>
            </div>
            <div className="hidden md:block w-[30%]">
              <span className="font-anonymous text-[24px] text-[#373737] tracking-[0.05em]">
                LOCATION
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-black mb-0" />

          {/* Project Rows */}
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/project/${project.slug}`}
              className="block"
            >
              <div className="project-row flex items-center py-[8px] md:py-[6px] cursor-pointer">
                <div className="w-[40%] md:w-[35%] pr-2">
                  <span className="font-anonymous text-[16px] md:text-[20px] text-[#373737] leading-[1.4]">
                    {project.name}
                  </span>
                </div>
                <div className="w-[35%] md:w-[35%] pr-2">
                  <span className="font-anonymous text-[14px] md:text-[20px] text-[#373737] leading-[1.4]">
                    {project.category}
                  </span>
                </div>
                <div className="hidden md:block w-[30%]">
                  <span className="font-anonymous text-[20px] text-[#373737] leading-[1.4]">
                    {project.location}
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-black" />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
