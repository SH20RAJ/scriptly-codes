import "@testing-library/jest-dom";
import Header from "@/components/header";
import { render, screen } from "@testing-library/react";
import { userName } from "@/app/page";

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header />);
  });
  it("renders", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  it("user name is in the document", () => {
    const name = screen.getByRole("heading");
    expect(name.textContent).toMatch(userName);
  });
  it("menu is in the document", () => {
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });
});
