import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Project } from "@/components/projects";
import ProjectCard from "@/components/projectCard";

const sampleProject: Project = {
  id: "portfolio-website",
  title: "Portfolio Website",
  description:
    "A personal portfolio template built with Next.js and Tailwind CSS.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  image: "/images/portfolio.png",
  repo: "https://github.com/username/dev-portfolio-template",
  live: "https://your-portfolio.vercel.app",
};

describe("ProjectCard component", () => {
  beforeEach(() => {
    render(<ProjectCard project={sampleProject} />);
  });

  it("renders project title", () => {
    const title = screen.getByText(sampleProject.title);
    expect(title).toBeInTheDocument();
  });

  it("renders project description", () => {
    const desc = screen.getByText(sampleProject.description);
    expect(desc).toBeInTheDocument();
  });

  it("renders all tech tags", () => {
    sampleProject.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("renders repo and live links with correct hrefs", () => {
    const repoLink = screen.getByText(/Repo/i);
    const liveLink = screen.getByText(/Live/i);

    expect(repoLink).toHaveAttribute("href", sampleProject.repo);
    expect(liveLink).toHaveAttribute("href", sampleProject.live);
  });

  it("renders project image with correct alt text", () => {
    const img = screen.getByAltText(sampleProject.title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
  });
});
