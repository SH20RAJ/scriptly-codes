import MenuList from "@/components/menuList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<MenuList />", () => {
  beforeEach(() => {
    render(<MenuList />);
  });

  it("renders the menu container", () => {
    const container = screen.getByTestId("menu-list");
    expect(container).toBeInTheDocument();
  });

  it("renders About link with correct href", () => {
    const aboutLink = screen.getByRole("link", { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/#about");
  });

  it("renders Projects link with correct href", () => {
    const projectsLink = screen.getByRole("link", { name: /Projects/i });
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute("href", "/#projects");
  });

  it("renders Contact link with correct href", () => {
    const contactLink = screen.getByRole("link", { name: /Contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/#contact");
  });
});
