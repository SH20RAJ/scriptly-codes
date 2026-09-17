import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  beforeEach(() => {
    render(<Page />);
  });
  it("renders", () => {
    const home = screen.getByTestId("home");
    expect(home).toBeInTheDocument();
  });
  it("<Hero /> is in the document", () => {
    const hero = screen.getByTestId("hero");
    expect(hero).toBeInTheDocument();
  });
  it("<Projects / is in the document", () => {
    const projects = screen.getByTestId("projects");
    expect(projects).toBeInTheDocument();
  });
  it("<Contact /> is in the document", () => {
    const contact = screen.getByTestId("contact");
    expect(contact).toBeInTheDocument();
  });
});
