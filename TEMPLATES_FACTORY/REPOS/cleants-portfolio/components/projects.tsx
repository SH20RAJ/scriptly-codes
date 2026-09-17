import ProjectCard from "./projectCard";

export type Project = {
  id: string; // unique identifier, e.g., 'portfolio-website'
  title: string; // project title
  description: string; // short blurb, 1-2 sentences
  tech: string[]; // list of technologies, e.g., ['React', 'TypeScript', 'Tailwind']
  image?: string; // optional screenshot or thumbnail URL
  repo?: string; // optional GitHub repo URL
  live?: string; // optional live demo URL
  date?: string; // optional completion date, e.g., '2025-09'
};

export const sampleProjects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio template built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/username/dev-portfolio-template",
    live: "https://your-portfolio.vercel.app",
    date: "2025-09",
  },
  {
    id: "task-manager-app",
    title: "Task Manager App",
    description:
      "A simple task management app with user authentication and persistent storage.",
    tech: ["React", "Node.js", "MongoDB"],
    repo: "https://github.com/username/task-manager",
    live: "https://task-manager.example.com",
  },
];

export default function Projects() {
  return (
    <div id="projects" data-testid="projects" className="py-12 px-6 md:px-20 ">
      <h2 className="font-bold text-3xl mb-4">Projects</h2>
      {sampleProjects.map((i) => (
        <ProjectCard key={i.id} project={i} />
      ))}
    </div>
  );
}
