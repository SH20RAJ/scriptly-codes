import Footer from "@/components/footer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<Footer />", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it("renders", () => {
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("Back to Top link is in the document with correct href", () => {
    const backToTop = screen.getByRole("link", { name: /top/i });
    expect(backToTop).toBeInTheDocument();
    expect(backToTop).toHaveAttribute("href", "/");
  });
});
