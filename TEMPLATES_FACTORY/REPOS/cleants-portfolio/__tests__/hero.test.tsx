import { userName } from "@/app/page";
import Hero from "@/components/hero";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<Hero />", () => {
  beforeEach(() => {
    render(<Hero />);
  });
  it("renders headline", () => {
    const headline = screen.getByRole("heading", { level: 1 });
    expect(headline).toBeInTheDocument();
    expect(headline.textContent).toMatch(
      `Hi, I'm ${userName} — a web developer`,
    );
  });

  it("renders subheadline", () => {
    const subheadline = screen.getByText(
      /I create accessible, high-performance web applications/i,
    );
    expect(subheadline).toBeInTheDocument();
  });

  it("renders 'See My Work' button linking to #projects", () => {
    const seeWorkButton = screen.getByRole("link", { name: /See My Work/i });
    expect(seeWorkButton).toBeInTheDocument();
    expect(seeWorkButton).toHaveAttribute("href", "#projects");
  });

  it("renders 'Download Resume' button linking to /resume.pdf", () => {
    const resumeButton = screen.getByRole("link", { name: /Download Resume/i });
    expect(resumeButton).toBeInTheDocument();
    expect(resumeButton).toHaveAttribute("href", "/resume.pdf");
    expect(resumeButton).toHaveAttribute("target", "_blank");
  });

  it("renders semantic elements correctly", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/I create accessible/i).tagName.toLowerCase()).toBe(
      "p",
    );
  });
});
