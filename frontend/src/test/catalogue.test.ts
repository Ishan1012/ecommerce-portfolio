import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Catalogue from "@/pages/Catalogue";

describe("Catalogue page", () => {
  it("renders heading", () => {
    render(
      <MemoryRouter>
        <Catalogue />
      </MemoryRouter>
    );
    expect(screen.getByText(/Product Catalogue/i)).toBeInTheDocument();
  });
});
