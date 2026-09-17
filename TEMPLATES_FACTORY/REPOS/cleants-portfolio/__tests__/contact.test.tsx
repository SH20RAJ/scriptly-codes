import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "@/components/contact";
import { githubUserName, linkedInUserName, userEmail } from "@/app/page";

describe("<Conact />", () => {
  beforeEach(() => {
    render(<Contact />);
  });
  it("renders", () => {
    const contact = screen.getByTestId("contact");
    expect(contact).toBeInTheDocument();
  });
  it("renders heading", () => {
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /contact me/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("Email link is in the document with correct href", () => {
    const emailLink = screen.getByRole("link", { name: /email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", `mailto:${userEmail}`);
  });
  it("Github link is in the document with correct href", () => {
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      `https://github.com/${githubUserName}/`,
    );
  });
  it("LinkedIn link is in the document with correct href", () => {
    const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
      "href",
      `https://www.linkedin.com/in/${linkedInUserName}/`,
    );
  });
});
