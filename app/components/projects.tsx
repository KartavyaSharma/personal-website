import { getProjectDetails } from "app/projects/utils/utils";
import { ArrowIcon } from "./icons";
import Link from "next/link";

export function Projects() {
  let projects = getProjectDetails();

  return (
      <div>
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
                  href={`/projects/${project.slug}`}
                  className="group inline-flex items-center justify-center text-neutral-900 dark:text-neutral-100 tracking-tight "
                >
                  <span className="w-full">
                    {project.metadata.shortDescription}
                  </span>
                  <svg
                    className="w-4 h-4 ms-1 rtl:rotate-180 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}
