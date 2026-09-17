import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Projects, { sampleProjects } from "@/components/projects";

describe("<Projects />", () => {
  beforeEach(() => {
    render(<Projects />);
  });
  it("renders", () => {
    const projects = screen.getByTestId("projects");
    expect(projects).toBeInTheDocument();
  });
  it("title is in the document", () => {
    const title = screen.getByText("Projects");
    expect(title).toBeInTheDocument();
  });
  it("all projects are in the document", () => {
    const projects = screen.getByTestId("projects");
    for (let i = 0; i < sampleProjects.length; i++) {
      expect(projects.textContent).toMatch(sampleProjects[i].title);
    }
  });
});
