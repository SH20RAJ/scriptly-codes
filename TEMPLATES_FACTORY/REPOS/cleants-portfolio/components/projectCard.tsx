import Image from "next/image";
import { Project } from "./projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded-lg p-4 mb-8 bg-white dark:bg-gray-900 dark:text-slate-400">
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
        />
      )}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p>{project.description}</p>
      <ul className="flex gap-2 mt-2">
        {project.tech.map((tech) => (
          <li
            className="border text-sm rounded px-1 bg-slate text-blue-800 dark:text-blue-700"
            key={tech}
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-row items-center justify-center">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            className="mx-4 text-blue-500 hover:underline"
          >
            Repo
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="mx-4 text-blue-500 hover:underline"
          >
            Live
          </a>
        )}
      </div>
    </article>
  );
}
