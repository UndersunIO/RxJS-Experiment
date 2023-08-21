import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("Affiche les résultats de recherche en fonction de l'input après un délai", async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Recherche...");
    act(() => {
      userEvent.type(input, "test");
    });

    await waitFor(() => {
      expect(screen.getByText("Recherche pour: test")).toBeInTheDocument();
    });
    expect(screen.getByText("test | result1")).toBeInTheDocument();
    expect(screen.getByText("test | result2")).toBeInTheDocument();
    expect(screen.getByText("test | result3")).toBeInTheDocument();
  });
});
