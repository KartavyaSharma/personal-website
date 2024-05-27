import { getProjectDetails } from "app/projects/utils";
import Link from "next/link";
import { ArrowIcon } from "./icons";

export function Projects() {
  let projects = getProjectDetails().slice(0, 5);

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
          Projects
        </h2>
      </div>
      <div className="mb-4">
        <ul className="font-sm flex flex-col space-x-0 dark:text-neutral-300">
          {projects.map((project) => (
            <li key={project.slug} className="flex flex-col space-y-1 mb-4">
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <div className="w-[110px] tabular-nums">
                  <a
                    className="flex items-center transition-all text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={
                      project.metadata.projectLink
                        ? `${project.metadata.projectLink}`
                        : `${project.metadata.githubLink}`
                    }
                  >
                    <ArrowIcon />
                    <p className="ml-2 h-6">{project.metadata.name}</p>
                  </a>
                </div>
                <Link
                  key={project.slug}
                  className="text-neutral-900 dark:text-neutral-100 tracking-tight"
                  href={`/projects/${project.slug}`}
                >
                  {project.metadata.shortDescription}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
