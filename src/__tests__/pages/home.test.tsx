import { render } from "@/client/test-utils";
import Home from "@/pages/index";

const renderPage = () => render(<Home />);
describe("Home page", () => {
  jest.mock("@tanstack/react-query", () => {
    const originalModule = jest.requireActual("@tanstack/react-query");
    return {
      __esModule: true,
      ...originalModule,
      useQuery: jest.fn(),
      useCharactersByVillageQuery: jest.fn(),
    };
  });

  it("renders correctly", () => {
    const { container } = renderPage();
    expect(container).toMatchSnapshot();
  });
});
