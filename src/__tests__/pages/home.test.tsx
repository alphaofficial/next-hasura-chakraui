import { render, waitFor } from "@/client/test-utils";
import Home from "@/pages/index";

const renderPage = () => render(<Home />);
describe("Home page", () => {
  jest.mock("@tanstack/react-query", () => {
    const originalModule = jest.requireActual("@tanstack/react-query");
    return {
      __esModule: true,
      ...originalModule,
      useCharactersByVillageQuery: jest.fn(),
    };
  });

  it("renders correctly", async () => {
    const { container } = renderPage();
    const node = await waitFor(() => container);
    expect(node).toMatchSnapshot();
  });
});
