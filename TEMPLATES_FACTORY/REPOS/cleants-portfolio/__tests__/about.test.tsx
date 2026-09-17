import "@testing-library/jest-dom";
import About, { aboutText } from "@/components/about";
import { screen, render } from "@testing-library/react";

describe("<About />", () => {
  beforeEach(() => {
    render(<About />);
  });
  it("renders", () => {
    const about = screen.getByTestId("about");
    expect(about).toBeInTheDocument();
  });
  it("title is in the document", () => {
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toMatch("About Me");
  });
  it("all about text is in the document", () => {
    const about = screen.getByTestId("about");
    for (let i = 0; i < aboutText.length; i++) {
      expect(about.textContent).toMatch(aboutText[i]);
    }
  });
});
