import { render } from "@/utils/test-utils";
import Home from "@/pages/index";

const renderPage = () => render(<Home />);
describe("Home page", () => {
  jest.mock("@tanstack/react-query", () => {
    const originalModule = jest.requireActual("@tanstack/react-query");
    return {
      __esModule: true,
      ...originalModule,
      useQuery: jest.fn(),
    };
  });

  it("Renders the heading", () => {
    const { getByLabelText } = renderPage();
    const heading = getByLabelText("heading");
    expect(heading).toHaveTextContent("Hello graphql!");
  });
});
