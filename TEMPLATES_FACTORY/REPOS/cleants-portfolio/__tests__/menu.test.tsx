import "@testing-library/jest-dom";
import Menu from "@/components/menu";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("<Menu />", () => {
  beforeEach(() => {
    render(<Menu />);
  });
  it("renders", () => {
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });
  it("menu button is in the document and renders menuList on click", () => {
    const menuBtn = screen.getByTestId("menu-btn");
    act(() => {
      fireEvent.click(menuBtn);
    });
    const menuList = screen.getByTestId("menu-list");
    expect(menuList).toBeInTheDocument();

    // And then hides it again
    act(() => {
      fireEvent.click(menuBtn);
    });
    expect(menuList).not.toBeInTheDocument();
  });
});
